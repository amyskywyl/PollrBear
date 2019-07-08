json.extract! @active_poll, :id, :user_id, :question_id
if @question 
  json.question do 
    json.extract! @question, :id, :body, :question_type, :active, :group_id
  end

  json.choices do
    @question.choices.each do |choice|
      json.set! choice.id do
        json.extract! choice, :id, :body, :question_id, :answer_count
      end
    end
  end
end