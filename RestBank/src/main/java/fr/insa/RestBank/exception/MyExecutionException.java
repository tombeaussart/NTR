package fr.insa.RestBank.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class MyExecutionException extends Exception {
    public MyExecutionException(String error) {
        super(error);
    }
}
