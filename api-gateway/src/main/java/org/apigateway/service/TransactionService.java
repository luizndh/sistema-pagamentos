package org.apigateway.service;

import org.apigateway.dto.TransactionDTO;
import org.apigateway.mapper.TransactionMapper;
import org.apigateway.model.Transaction;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;
import org.jboss.logging.Logger;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class TransactionService {

    @Inject
    @Channel("transactions-out")
    Emitter<Transaction> transactionEmitter;

    @Inject
    Logger logger;

    @Inject
    TransactionMapper mapper;

    @Inject

    public Transaction createTransaction(TransactionDTO dto) {
        logger.info("Validating transaction with idempotency key: " + dto.idempotencyKey());
        this.validateTransaction(dto);

        logger.info("Creating transaction entity from DTO");
        Transaction transaction = mapper.toEntity(dto);

        logger.info("Persisting transaction to database");
        transaction.persist();

        logger.info("Sending transaction " + transaction.id + " to message queue");
        this.transactionEmitter.send(transaction);

        return transaction;
    }

    private void validateTransaction(TransactionDTO dto) {
        // Basics validations are already handled by Bean Validation annotations on TransactionDTO
        // Implement idempotency key uniqueness check
        if (Transaction.find("idempotencyKey", dto.idempotencyKey()).firstResult() != null) {
            logger.error("Validation failed: Duplicate idempotency key: " + dto.idempotencyKey());
            throw new RuntimeException("Transaction already processed or in progress.");
        }
    }
}