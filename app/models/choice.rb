class Choice < ApplicationRecord
  validates :body, presence: true

  belongs_to :question
  has_many :answers

  def answer_count
    answers.count
  end
end