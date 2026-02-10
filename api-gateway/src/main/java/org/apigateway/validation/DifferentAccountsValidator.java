package org.apigateway.validation;

import org.apigateway.dto.TransactionDTO;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class DifferentAccountsValidator implements ConstraintValidator<DifferentAccounts, TransactionDTO> {

    @Override
    public boolean isValid(TransactionDTO dto, ConstraintValidatorContext context) {
        if (dto == null) {
            return true;
        }

        boolean isValid = !dto.originAccount().equals(dto.destinationAccount());

        if (!isValid) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate("Origin and destination accounts cannot be the same.")
                   .addConstraintViolation();
        }

        return isValid;
    }
}
