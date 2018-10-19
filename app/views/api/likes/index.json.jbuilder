@likes.each do |like|
  json.set! like.id do
    json.extract! like, :user_id, :img_id
  end
end
