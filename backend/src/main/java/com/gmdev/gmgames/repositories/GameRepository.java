package com.gmdev.gmgames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gmdev.gmgames.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
