
@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :display_name, :bio, :id

    user.likes.each do |like|
      json.set! like.img_id do
        json.extract! like, :user_id, :img_id
      end
    end

  end
end
