package com.gmdev.gmgames.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gmdev.gmgames.dto.GameDTO;
import com.gmdev.gmgames.dto.ScoreDTO;
import com.gmdev.gmgames.entities.Game;
import com.gmdev.gmgames.entities.Score;
import com.gmdev.gmgames.entities.User;
import com.gmdev.gmgames.repositories.GameRepository;
import com.gmdev.gmgames.repositories.ScoreRepository;
import com.gmdev.gmgames.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private GameRepository gameRepository;
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired ScoreRepository scoreRepository;
	
	@Transactional
	public GameDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Game game = gameRepository.findById(dto.getGameId()).get();
		
		Score score = new Score();
		score.setGame(game);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s :game.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / game.getScores().size();
		
		game.setScore(avg);
		game.setCount(game.getScores().size());
		
		game = gameRepository.saveAndFlush(game);
		
		return new GameDTO(game);
	}

}
