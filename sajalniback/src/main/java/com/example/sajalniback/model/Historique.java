package com.example.sajalniback.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "historique")
public class Historique {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "historique_seq")
    private long id;
    @Column(name = "historique", nullable = false)
    private String historique;
    @Column(name = "intervenant", nullable = false)
    private String intervenant;
    @Column(name = "date")
    private Date date;


    public void setId(long id) {
        this.id = id;
    }

    public void setHistorique(String historique) {
        this.historique = historique;
    }

    public void setIntervenant(String intervenant) {
        this.intervenant = intervenant;
    }

    public void setDate(Date date) {
        this.date = date;
    }


    public long getId() {
        return id;
    }

    public String getHistorique() {
        return historique;
    }

    public String getIntervenant() {
        return intervenant;
    }

    public Date getDate() {
        return date;
    }


    public Historique() {
    }

    public Historique(long id, String historique, String intervenant, Date date) {
        this.id = id;
        this.historique = historique;
        this.intervenant = intervenant;
        this.date = date;
    }
}
