get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/receive_info' do
	@info_player1 = params[:jugador1]
	@info_player2 = params[:jugador2]
	@info_score1 = params[:score1]
	@info_score2 = params[:score2]

	@player_one = Player.create(name: @info_player1)
	@player_two = Player.create(name: @info_player2)

	@game_new = Game.create(game: 3)

	@tournament_new = Tournament.create(player_id: @player_one.id, game_id: @game_new.id, score: @info_score1)
	@tournament_new = Tournament.create(player_id: @player_two.id, game_id: @game_new.id, score: @info_score2)


	erb :index
end
