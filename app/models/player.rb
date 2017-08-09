class Player < ActiveRecord::Base
	has_many :tournaments
	has_many :games, :through => :tournaments
end
