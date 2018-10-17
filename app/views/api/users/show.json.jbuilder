#
# json.partial! 'api/users/user', user: @user

# json.set! user.id do
@user.images do |image|
  # json.extract! @user, :id, :username, :email, :display_name, :bio
  json.extract! image :caption, :date, :user_id
  # json.extract! @user :bio, :username, :display_name
  json.photo_url url_for(image.photo)
end
