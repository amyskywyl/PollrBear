json.array! @questions.each do |question|
    json.extract! question, :id, :body, :question_type, :active, :group_id
end