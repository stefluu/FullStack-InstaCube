
@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :display_name, :bio
  end
end
