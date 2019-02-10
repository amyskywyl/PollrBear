class Choice < ApplicationRecord
  validates :body, presence: true

  belongs_to :question
  has_many :choices

  def choice_count
    choices.count
  end
end