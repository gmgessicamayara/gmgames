package com.gmdev.gmgames.controllers;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmdev.gmgames.dto.GameDTO;
import com.gmdev.gmgames.dto.ScoreDTO;
import com.gmdev.gmgames.services.ScoreService;
 

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired 
	private ScoreService service;
	
	@PutMapping
	public GameDTO saveScore(@RequestBody ScoreDTO dto) {
		GameDTO gameDTO =  service.saveScore(dto); 
		return gameDTO;
	}
}
