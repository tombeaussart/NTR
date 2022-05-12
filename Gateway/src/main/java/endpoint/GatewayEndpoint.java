package endpoint;


import Modele.CustomerAccount;
import Services.GatewayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;
import request.CustomerRequest;

@Endpoint
public class GatewayEndpoint {

    private static final String NAMESPACE = "localhost:8080/spring/gateway";

    @Autowired
    private GatewayService gatewayService;

    @PayloadRoot(namespace = NAMESPACE,localPart = "CustomerRequest")
    @ResponsePayload
    public CustomerAccount getCustomer(/*@RequestPayload CustomerRequest request*/) {
        return gatewayService.getCustomerAccount(1);
    }
}
