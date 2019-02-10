
#json.groups do 
#  @groups.each do |group|
#    json.set! group.id do 
#      json.extract! group, :id, :title, :user_id
#    end 
#  end
#end

#json.questions do 
#  @groups.each do |group|
#    group.questions.each do |question|
#      json.set! question.id do 
#        json.extract! question, :id, :body, :question_type, :group_id
#      end
#    end 
#  end 
#end

@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :title, :user_id
    json.questions do
      group.questions.each do |question|
        json.set! question.id do
          json.extract! question, :id, :body, :question_type
        end
      end
    end
  end
end

