package fr.insa.RestBank.services;


import fr.insa.RestBank.exception.MyExecutionException;
import fr.insa.RestBank.models.Client;
import fr.insa.RestBank.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Client getClient(int id) {
        return clientRepository.getById(id);
    }

    public void updateBalance(int id, float amount) throws MyExecutionException {
        Client cl = getClient(id);
        if (cl != null)
            if (cl.getBalance() - amount < 0)
                throw new MyExecutionException("Transaction failed");
            else {
                cl.setBalance(cl.getBalance() - amount);
                clientRepository.save(cl);
            }
        else
            throw new MyExecutionException("Transaction failed");
    }

}
