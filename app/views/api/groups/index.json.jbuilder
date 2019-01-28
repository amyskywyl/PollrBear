 @groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :title
  end
end

#json.questions do
#json.array!  @groups.each do |group|
#    group.questions.each do |question|
#      json.set! question.id do
#        json.extract! question, :id, :body, :group_id
#      end
#    end
#  end
#end

#json.groups @groups do |group|
#  json.name guest.name
#  json.gifts guest.gifts, :title
#end