json.groups do
@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :title
  end
end
end

json.questions do
  @groups.each do |group|
    group.questions.each do |question|
      json.set! question.id do
        json.extract! question, :id, :body, :group_id
      end
    end
  end
end