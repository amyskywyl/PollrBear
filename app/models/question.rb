class Question < ApplicationRecord
  validates :body, :question_type, presence: true
  # validates :active, presence: true, uniqueness: true

  belongs_to :group
  has_many :choices
  has_one :active_poll
  has_one :user,
    through: :group,
    source: :user

end