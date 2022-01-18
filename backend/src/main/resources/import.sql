INSERT INTO tb_user(email) VALUES ('maria@gmail.com');
INSERT INTO tb_user(email) VALUES ('joao@gmail.com');
INSERT INTO tb_user(email) VALUES ('ana@gmail.com');
INSERT INTO tb_user(email) VALUES ('lucia@gmail.com');
INSERT INTO tb_user(email) VALUES ('joaquim@gmail.com');

INSERT INTO tb_game(score, count, title, image) VALUES (4.5, 2, 'Tomb Raider', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/TombRaider2013.jpg/220px-TombRaider2013.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (3.3, 3, 'GTA V', 'https://www.rockstargames.com/V/img/global/order/mobile-cover.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'World of Warcraft', 'https://http2.mlstatic.com/D_NQ_NP_941642-MLB31068381150_062019-O.jpg');


INSERT INTO tb_score(game_id, user_id, value) VALUES (1, 1, 5.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (1, 2, 4.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 1, 3.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 2, 3.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 3, 4.0);