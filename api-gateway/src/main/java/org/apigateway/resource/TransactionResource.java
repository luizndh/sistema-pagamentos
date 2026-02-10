package org.apigateway.resource;

import org.apigateway.dto.TransactionDTO;
import org.apigateway.model.Transaction;
import org.apigateway.service.TransactionService;
import org.jboss.logging.Logger;

import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/v1/pagamentos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TransactionResource {

    @Inject
    TransactionService service;

    @Inject
    Logger logger;

    @POST
    public Response createTransaction(@Valid TransactionDTO dto) {
        try {
            Transaction transaction = this.service.createTransaction(dto);
            return Response.accepted(transaction).build();
        } catch (Exception e) {
            logger.error("Unexpected error processing transaction", e);
            return Response.serverError()
                           .entity("Error processing transaction.")
                           .build();
        }
    }
}
