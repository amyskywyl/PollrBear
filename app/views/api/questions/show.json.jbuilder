json.question do 
  json.extract! @question, :id, :body, :question_type, :active
end

json.groups do
  current_user.groups.each do |group|
    json.set! group.id do
      json.extract! group, :id, :title
    end
  end
end