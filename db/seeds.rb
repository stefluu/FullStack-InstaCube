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

image1.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/tagi.jpeg"), filename: "tagi.jpeg")

image2 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-2-20"))
# black and white

image2.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/blackwhitephoto.jpeg"), filename: "blackwhitephoto.jpeg")

image3 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-8-12"), caption: "This year's bloom.")
# flower

image3.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/flower.jpg"), filename: "flower.jpg")

image4 = Image.create!(user_id: user1.id, date: Date.parse("2018-1-23"), caption: "Light Blue")
# beetle

image4.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/beetle.jpg"), filename: "beetle.jpg")

image5 = Image.create!(user_id: user1.id, date: Date.parse("2018-4-19"), caption: "Lavender")
# purplecup

image5.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/purplecup.jpg"), filename: "purplecup.jpg")

image6 = Image.create!(user_id: user1.id, date: Date.parse("2018-5-10"), caption: "These are ferns")
# leaf

image6.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/leaf.jpg"), filename: "leaf.jpg")

image7 = Image.create!(user_id: user1.id, date: Date.parse("2018-8-3"), caption: "Hi, I like photography")
# chris

image7.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/chris.jpg"), filename: "chris.jpg")

image8 = Image.create!(user_id: user1.id, date: Date.parse("2017-10-27"), caption: "My friend made this")
# fooddrizzle

image8.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/fooddrizzle.jpg"), filename: "fooddrizzle.jpg")

image9 = Image.create!(user_id: user1.id, date: Date.parse("2018-2-2"), caption: "Deviled Eggs")
# deviledeggs

image9.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/deviledeggs.jpeg"), filename: "deviledeggs.jpeg")

image10 = Image.create!(user_id: user2.id, date: Date.parse("2018-7-16"), caption: "I love the beach.")
# beach

image10.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/beach.jpg"), filename: "beach.jpg")

image11 = Image.create!(user_id: user2.id, date: Date.parse("2018-4-16"), caption: "Nature's paintings")
# sunset

image11.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/sunset.jpg"), filename: "sunset.jpg")

image12 = Image.create!(user_id: user2.id, date: Date.parse("2017-9-20"), caption: "It's becoming fall!")
#trees

image12.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/trees.jpg"), filename: "trees.jpg")

image13 = Image.create!(user_id: user3.id, date: Date.parse("2018-3-15"), caption: "Sparklers for my friend's wedding")
#sparklers

image13.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/sparklers.jpg"), filename: "sparklers.jpg")

image14 = Image.create!(user_id: user3.id, date: Date.parse("2018-8-28"), caption: "Make a wish!")
# dandelion

image14.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/dandelion.jpeg"), filename: "dandelion.jpeg")

image15 = Image.create!(user_id: user3.id, date: Date.parse("2018-9-10"), caption: "Read more!")
# grassreading

image15.image.attach(io:: File.open("/Users/peterberki/Desktop/instaCube_pictures/grassreading.jpeg"), filename: "grassreading.jpeg")
