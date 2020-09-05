class HiscoresController < ApplicationController

  def index
    scores = Hiscores.all
    render json: scores
  end

  def create
    # take the data from the fetch and add a new entry to our hiscores table
  end
end