@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :body, :question_type, :active
  end
end