json.question do 
  json.extract! @question, :id, :body, :question_type, :active, :group_id
end

json.groups do
  current_user.groups.each do |group|
    json.set! group.id do
      json.extract! group, :id, :title, :user_id
    end
  end
end

json.choices do
  @question.choices.each do |choice|
    json.set! choice.id do
      json.extract! choice, :id, :body, :question_id, :answer_count
    end
  end
end