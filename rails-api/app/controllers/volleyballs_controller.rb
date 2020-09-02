class VolleyballsController < ApplicationController

  def index
    balls = Volleyball.random_balls 20
    render json: balls
  end
end