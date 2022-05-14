package fr.insa.RestBank.ressoures;


import fr.insa.RestBank.exception.MyExecutionException;
import fr.insa.RestBank.models.Client;
import fr.insa.RestBank.ressoures.packageResponse.StatusTransaction;
import fr.insa.RestBank.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("clients")
public class ClientRessource extends CommonRessource {


    @Autowired
    private ClientService clientService;

    @GetMapping
    public Client getClient(@RequestParam(name = "id") int id) {
        return clientService.getClient(id);
    }


    @GetMapping(params = {"id", "amount"})
    public ResponseEntity<String> transaction(@RequestParam(name = "id") int id, @RequestParam(name = "amount") float amount) throws MyExecutionException {
        clientService.updateBalance(id, amount);
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body("ok");
    }
}
