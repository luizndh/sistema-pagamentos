package org.apigateway.dto;

import java.math.BigDecimal;
import java.util.UUID;

import org.apigateway.validation.DifferentAccounts;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@DifferentAccounts
public record TransactionDTO(
    @NotNull UUID idempotencyKey,
    @NotBlank String originAccount,
    @NotBlank String destinationAccount,
    @Positive BigDecimal amount
) {}
