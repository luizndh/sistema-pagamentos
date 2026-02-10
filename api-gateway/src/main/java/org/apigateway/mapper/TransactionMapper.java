package org.apigateway.mapper;

import org.apigateway.dto.TransactionDTO;
import org.apigateway.model.Transaction;
import org.apigateway.model.TransactionStatus;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TransactionMapper {

    public Transaction toEntity(TransactionDTO dto) {
        Transaction entity = new Transaction();
        entity.idempotencyKey = dto.idempotencyKey();
        entity.originAccount = dto.originAccount();
        entity.destinationAccount = dto.destinationAccount();
        entity.amount = dto.amount();
        entity.status = TransactionStatus.PENDING;
        return entity;
    }
}
