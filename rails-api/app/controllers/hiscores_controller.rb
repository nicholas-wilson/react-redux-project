class HiscoresController < ApplicationController

  def index
    scores = Hiscore.all.sort_by_score
    render json: scores
  end

  def create
    Hiscore.create(name: params["hiscore"]["name"], score: params["hiscore"]["score"], time: params["hiscore"]["time"])
  end
end