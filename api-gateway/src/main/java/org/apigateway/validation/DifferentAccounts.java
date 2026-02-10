package org.apigateway.validation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Documented
@Constraint(validatedBy = DifferentAccountsValidator.class)
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DifferentAccounts {
    String message() default "Origin and destination accounts cannot be the same.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
