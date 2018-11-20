@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :user_id, :img_id, :body, :id
  end
end
