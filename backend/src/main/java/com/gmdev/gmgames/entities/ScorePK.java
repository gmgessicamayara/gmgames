package com.gmdev.gmgames.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePK implements Serializable{
	 
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name ="game_id")
	private Game game;
	
	@ManyToOne
	@JoinColumn(name ="user_id")
	private User user;
	
	public ScorePK() {
		
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
