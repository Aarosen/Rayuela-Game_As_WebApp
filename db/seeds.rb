player1 = Player.create(name: "aaron")
player2 = Player.create(name: "rogelio")
player3 = Player.create(name: "martha")
player4 = Player.create(name: "brenda")

game1 = Game.create(game: 1)
game2 = Game.create(game: 2)

tournament1 = Tournament.create(player_id: player1.id, game_id: game1.id, score: 60)
tournament2 = Tournament.create(player_id: player2.id, game_id: game1.id, score: 60)
tournament3 = Tournament.create(player_id: player3.id, game_id: game2.id, score: 78)
tournament4 = Tournament.create(player_id: player4.id, game_id: game2.id, score: 75)