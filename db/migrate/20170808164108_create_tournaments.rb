class CreateTournaments < ActiveRecord::Migration[4.2]
  def change
  	create_table :tournaments do |t|
  		t.belongs_to :player
			t.belongs_to :game
    	t.integer :score
    end
  end
end
