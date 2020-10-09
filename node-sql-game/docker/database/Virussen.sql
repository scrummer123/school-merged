CREATE TABLE games(
    id int not null auto_increment,
    name varchar(100),

    primary key(id)
);

CREATE TABLE players(
    id int not null auto_increment,
    game_id int not null,
    name varchar(100),
    alive boolean DEFAULT 1,

    primary key(id),
    foreign key(game_id) references games(id) ON DELETE CASCADE
);

CREATE TABLE virusses(
    id int not null auto_increment,
    name varchar(255),

    primary key(id)
);

CREATE TABLE immunities(
    id int not null auto_increment,
    virus_id int,
    player_id int,

    primary key(id),
    foreign key(virus_id) references virusses(id) ON DELETE CASCADE,
    foreign key(player_id) references players(id) ON DELETE CASCADE
);

CREATE TABLE attacks(
    id int not null auto_increment,
    player_id int,
    attacked_player_id int,
    virus_id int,

    primary key(id),
    foreign key(player_id) references players(id) ON DELETE CASCADE,
    foreign key(attacked_player_id) references players(id) ON DELETE CASCADE,
    foreign key(virus_id) references virusses(id) ON DELETE CASCADE
);

CREATE TABLE history(
    id int not null auto_increment,
    game_id int not null,
    data json not null,

    primary key(id)
);

INSERT INTO games(name) values("game1"),("game2"),("game3");
INSERT INTO players(game_id, name) values(1, "Jan"), (1, "Cas"), (2, "Simon"), (2, "Timo"), (3, "Loes"), (3, "Tijn");
INSERT INTO virusses(name) VALUES("Herpes"), ("Aids"), ("Herpes"), ("Timo"), ("Windows"), ("Ebola"), ("Mad cow desease"), ("Beats by dre"), ("Airpods"), ("C#");
INSERT INTO immunities(virus_id, player_id) VALUES(3, 1), (2, 2), (3, 6), (10, 4);
INSERT INTO attacks(virus_id, player_id, attacked_player_id) VALUES(3, 1, 2), (2, 2, 1), (3, 6, 5), (10, 5, 6);