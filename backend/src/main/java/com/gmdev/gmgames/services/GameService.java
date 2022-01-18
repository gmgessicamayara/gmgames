package com.gmdev.gmgames.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gmdev.gmgames.dto.GameDTO;
import com.gmdev.gmgames.entities.Game;
import com.gmdev.gmgames.repositories.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository repository;
	
	@Transactional(readOnly = true)
	public Page<GameDTO> findAll(Pageable pageable) {
		 Page<Game> result = repository.findAll(pageable);
		 Page<GameDTO> page = result.map(x -> new GameDTO(x));
		 return page;
	 }
	
	@Transactional(readOnly = true)
	public GameDTO findById(Long id) {
		 Game result = repository.findById(id).get();
		 GameDTO dto = new GameDTO(result);
		 return dto;
	 }
}
