package fr.insa.RestBank.ressoures;

import fr.insa.RestBank.exception.MyExecutionException;
import fr.insa.RestBank.ressoures.packageResponse.StatusTransaction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;


public class CommonRessource {

    @ExceptionHandler(MyExecutionException.class)
    public ResponseEntity<String> handleExecutionException(MyExecutionException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ex.getMessage());
    }
}
