class Question < ApplicationRecord
  validates :body, :group_id, :question_type, presence: true
  # validates :active, presence: true, uniqueness: true

  belongs_to :group
  has_one :user,
    through: :group,
    source: :user

  has_one :next,
  foreign_key: :id,
  primary_key: :next_id,
  class_name: 'Question'

  has_one :prev,
    foreign_key: :id,
    primary_key: :prev_id,
    class_name: 'Question'

  has_one :head,
    through: :group,
    source: :head

  has_one :tail,
    through: :group,
    source: :head

end