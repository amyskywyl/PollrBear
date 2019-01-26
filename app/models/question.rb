class Question < ApplicationRecord
  validates :body, :question_type, presence: true
  # validates :active, presence: true, uniqueness: true

  belongs_to :group
  has_one :user,
    through: :group,
    source: :user
end