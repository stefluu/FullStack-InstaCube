json.set! user.id do
  json.extract! user, :id, :username, :email, :display_name, :bio
end

#
# this will render object of all those attributes and set that object equal to the user id. leaving out the user.id will just return object with all those attributes
