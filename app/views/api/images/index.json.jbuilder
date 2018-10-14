

# json.array! @images do |image|
#   json.extract! image, :caption, :date
#   json.photo_url url_for(image.photo)
# end

# all_images = {}

# @images.each do |image|
#   all_images[image.id] =
#     (json.extract! image, :caption, :date
#     json.photo_url url_for(image.photo))
# end
#
# all_images


@images.each do |image|
  json.set! image.id do
    json.extract! image, :caption, :date
    json.photo_url url_for(image.photo)
  end
end
