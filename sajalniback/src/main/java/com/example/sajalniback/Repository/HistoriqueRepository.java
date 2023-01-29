package com.example.sajalniback.Repository;
import com.example.sajalniback.model.Dossier;
import com.example.sajalniback.model.Historique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoriqueRepository extends JpaRepository<Historique, Long> {

/*
  @Query("SELECT h FROM Historique  AS h ORDER BY h.dossier , h.date")
  List<Historique> findAllOrderByDateAndDossier();
*/
}