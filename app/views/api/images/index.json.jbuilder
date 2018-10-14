# json.array! @images do |image|
#   json.extract! image, :caption, :date
#   json.photo_url url_for(image.photo)
# end

@images.each do |image|
  json.extract! image, :caption, :date
  json.photo_url url_for(image.photo)
end
