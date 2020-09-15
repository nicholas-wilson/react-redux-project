class Hiscore < ApplicationRecord
  scope :sort_by_score, -> {order(score: :desc)}
end