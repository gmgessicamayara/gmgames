package com.gmdev.gmgames.dto;

public class ScoreDTO {
	
	private Long gameId;
	private String email;
	private Double score;
	
	public ScoreDTO() {
		
	}

	public Long getGameId() {
		return gameId;
	}

	public void setGameId(Long gameId) {
		this.gameId = gameId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	
}
