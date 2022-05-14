package fr.insa.RestBank.repositories;

import fr.insa.RestBank.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

    public Client getClientById(int id);
}
