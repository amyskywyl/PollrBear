class Group < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :questions,
    foreign_key: :group_id,
    class_name: 'Question',
    dependent: :destroy

  has_one :head, -> { where prev_id: nil },
    foreign_key: :group_id,
    class_name: 'Question'

  has_one :tail, -> { where next_id: nil },
    foreign_key: :group_id,
    class_name: 'Question'
end
