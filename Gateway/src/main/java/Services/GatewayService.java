package Services;


import Modele.CustomerAccount;
import org.springframework.stereotype.Service;

@Service
public class GatewayService {

    public CustomerAccount getCustomerAccount(int id) {
        CustomerAccount customerAccount = new CustomerAccount();
        customerAccount.setEmail("test1@gmail.com");
        customerAccount.setId(id);
        return customerAccount;
    }
}
