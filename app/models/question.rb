class Question < ApplicationRecord
  validates :body, :question_type, presence: true
  # validates :active, presence: true, uniqueness: true

  belongs_to :group
  has_one :user,
    through: :group,
    source: :user

  def set_active
    if self.active == true
      question.user.questions.select{|question| question[:id] != self.id}.map!{|question| question[:active] == false}
    end
  end
end