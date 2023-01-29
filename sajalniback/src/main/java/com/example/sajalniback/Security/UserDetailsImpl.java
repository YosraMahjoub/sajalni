package com.example.sajalniback.Security;

import com.example.sajalniback.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {

    private static final long serialVersionUID = 1L;

    private Long id;

    private String nom;

    private String email;
    private Date date;


    @JsonIgnore
    private String mdp;

    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(Long id, String nom , String email, String password,
                           Collection<? extends GrantedAuthority> authorities , Date date) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.mdp = password;
        this.authorities = authorities;
        this.date =date;
    }

    public static UserDetailsImpl build(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new UserDetailsImpl(
                user.getId(),
                user.getNom(),
                user.getEmail(),
                user.getMdp(),
                authorities,
                user.getDate());
    }

    public Date getDate() {
        return date;
    }
    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return mdp;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
