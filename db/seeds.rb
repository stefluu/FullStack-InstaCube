require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Image.destroy_all


dummyUser = User.create(username:"demo_user", full_name: "Stef L", email: "stef@testing.com", password: "123456")

user1 = User.create(username: "CS.Photography", full_name: "Christopher", display_name: "Photographer in Oakland", bio: "Film and Digital photography", email: "chris@testing.com", password: "123456")

user2 = User.create(username: "NatureIsBeautiful", full_name: "Nature", bio: "Go Exploring!", email: "nature@testing.com", password: "123456")

user3 = User.create(username: "hey_itsStef", full_name: "Stefanie", display_name: "Stefanie.", bio: "Hi there! Welcome to my page!", email: "stef@stef.com", password: "123456")

image1 = Image.create!(user_id: dummyUser.id, date: Date.parse("2017-11-16"), caption: "Hi, I'm Tagi!")
# tagi

image1.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/Q35wrvi4yjo31NHCedX9SmdP"), filename: "tagi.jpeg")

image2 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-2-20"))
# black and white

image2.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/FGQw45pkJp77uR2Q3geNPTtG"), filename: "blackwhitephoto.jpeg")

image3 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-8-12"), caption: "This year's bloom.")
# flower

image3.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/kQevcka5GnL3EJ3QiRJ8L6vq"), filename: "flower.jpg")

image4 = Image.create!(user_id: user1.id, date: Date.parse("2018-1-23"), caption: "Light Blue")
# beetle

image4.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/r135x1tWpJg41uzwfAV8wuf1"), filename: "beetle.jpg")

image5 = Image.create!(user_id: user1.id, date: Date.parse("2018-4-19"), caption: "Lavender")
# purplecup

image5.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/BnjBZvvtydWxCZv16aF3Phrn"), filename: "purplecup.jpg")

image6 = Image.create!(user_id: user1.id, date: Date.parse("2018-5-10"), caption: "These are ferns")
# leaf

image6.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/zPGYXZtWP3nzeR8YEHViJFZd"), filename: "leaf.jpg")

# image7 = Image.create!(user_id: user1.id, date: Date.parse("2018-8-3"), caption: "Hi, I like photography")
# # chris

# image7.photo.attach(io: open("/Users/peterberki/Desktop/instaCube_pictures/chris.jpg"), filename: "chris.jpg")

image8 = Image.create!(user_id: user1.id, date: Date.parse("2017-10-27"), caption: "My friend made this")
# fooddrizzle

image8.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/rZ8EeNxdinFm7tCuRczMY4gU"), filename: "fooddrizzle.jpg")

image9 = Image.create!(user_id: user1.id, date: Date.parse("2018-2-2"), caption: "Deviled Eggs")
# deviledeggs

image9.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/YBySc5daH9i3cfpV2A3MjYFs"), filename: "deviledeggs.jpeg")

image10 = Image.create!(user_id: user2.id, date: Date.parse("2018-7-16"), caption: "I love the beach.")
# beach

image10.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/V5p3a5bTiKq5rqv5iSQ6ibVU"), filename: "beach.jpeg")

image11 = Image.create!(user_id: user2.id, date: Date.parse("2018-4-16"), caption: "Nature's paintings")
# sunset

image11.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/i1bW6ZFnHoYug3UgtPpkVULo"), filename: "sunset.jpg")

image12 = Image.create!(user_id: user2.id, date: Date.parse("2017-9-20"), caption: "It's becoming fall!")
#trees

image12.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/YnND9ndgBcbPFnK5rgdJxrt2"), filename: "trees.jpg")

image13 = Image.create!(user_id: user3.id, date: Date.parse("2018-3-15"), caption: "Sparklers for my friend's wedding")
#sparklers

image13.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/YeFGKAE7Hz11a92Vng5r8Ppq"), filename: "sparklers.jpg")

image14 = Image.create!(user_id: user3.id, date: Date.parse("2018-8-28"), caption: "Make a wish!")
# dandelion

image14.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/SpyB33FLBsAufbCTXwkext1h"), filename: "dandelion.jpeg")

image15 = Image.create!(user_id: user3.id, date: Date.parse("2018-9-10"), caption: "Read more!")
# grassreading

image15.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/grnBCYkcm5q8GydPgqhzmPLz"), filename: "grassreading.jpeg")
