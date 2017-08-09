class CreateGames < ActiveRecord::Migration[4.2]
  def change
  	create_table :games do |g|
    	g.integer :game
    end
  end
end
