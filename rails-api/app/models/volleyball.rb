class Volleyball < ApplicationRecord
  TOP_SIZES = [200, 350]

  def random_size
    self.left = rand(700) + 400
    self.top = TOP_SIZES[rand(1)]
  end
end
