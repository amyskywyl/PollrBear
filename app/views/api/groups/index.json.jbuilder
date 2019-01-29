 @groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :title
  end
end