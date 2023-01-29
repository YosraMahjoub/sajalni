package com.example.sajalniback.Controller;

import com.example.sajalniback.Repository.DossierRepository;
import com.example.sajalniback.Repository.HistoriqueRepository;
import com.example.sajalniback.exception.UserNotFoundException;
import com.example.sajalniback.model.Demande;
import com.example.sajalniback.model.Dossier;
import com.example.sajalniback.model.Historique;
import com.example.sajalniback.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/dossier")
public class DossierController {
    @Autowired
    private DossierRepository dosrepo;

    @Autowired
    private HistoriqueRepository hrepo;

    //list
    @RequestMapping("/all")
    public List<Dossier> getAllDos() {
        return dosrepo.findAll();
    }

    //mylist
    @RequestMapping("/myall")
    public List<Dossier> getmyAllDos() {

        return dosrepo.findByUser(RegistController.currentUser);
    }
    //detail
    @GetMapping("/find/{id}")
    public ResponseEntity<Dossier> getdosById(@PathVariable(value = "id") Long id)
            throws UserNotFoundException {
        Dossier dos = dosrepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException("le dossier avec l'id: " + id+" n'existe pas"));
        return ResponseEntity.ok().body(dos);
    }

    //ajout
    @PostMapping("/add")
    public Dossier createDos(@RequestBody Dossier dos) {
        dos.setStatut("en_cours");
        dos.setUser(RegistController.currentUser);
        Historique h = new Historique();


        h.setIntervenant(RegistController.currentUser.getEmail());
        h.setHistorique("creation");
        Set<Historique> historiques = new HashSet<>();
        historiques.add(h);
        dos.setHistoriques(historiques);
        hrepo.save(h);
        dosrepo.save(dos);

        return dos;
    }
    // update

    @PutMapping("/update/{id}")
    public ResponseEntity<Dossier> updateDos(@PathVariable Long id, @RequestBody Dossier dos){
        Dossier d = dosrepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException("le dossier :" + id+ " n'existe pas"));
        d.setImportateur(dos.getImportateur());
        d.setRefbf(dos.getRefbf());
        d.setCin(dos.getCin());
        d.setPassport(dos.getPassport());
        d.setMarque(dos.getMarque());
        d.setModele(dos.getModele());
        d.setNumAvis(dos.getNumAvis());

        Dossier updated = dosrepo.save(d);

        return ResponseEntity.ok(updated);
    }
    // delete
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDemande(@PathVariable Long id){
        Dossier u = dosrepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException("le dossier :" + id+ " n'existe pas"));

        dosrepo.delete(u);

        Map<String, Boolean> response = new HashMap<>();
        response.put(id+"deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
