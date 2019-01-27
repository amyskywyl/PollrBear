class Group < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :questions,
    foreign_key: :group_id,
    class_name: 'Question',
    dependent: :destroy

end
