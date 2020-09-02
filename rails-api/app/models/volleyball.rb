class Volleyball < ApplicationRecord
  TOP_SIZES = [200, 350]

  def random_size
    self.left = rand(700) + 400
    self.top = TOP_SIZES[rand(2)]
  end

  def self.random_balls(amount)
    Volleyball.all.shuffle.slice(0, amount)
  end
end
