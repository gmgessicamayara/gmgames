package com.gmdev.gmgames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gmdev.gmgames.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
