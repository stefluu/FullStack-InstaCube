

@followings.each do |following|
  json.set! following.id do
    json.extract! following, :user_id, :follower_id, :id
  end
end