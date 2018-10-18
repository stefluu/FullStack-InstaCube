# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dummyUser = User.create(username:"demo_user", full_name: "Stef L", email: "stef@testing.com", password: "123456")

user1 = User.create(username: "CS.Photography", full_name: "Christopher", display_name: "Photographer in Oakland", bio: "Film and Digital photography", email: "chris@testing.com", password: "123456")

user2 = User.create(username: "NatureIsBeautiful", full_name: "Nature", bio: "Go Exploring!", email: "nature@testing.com", password: "123456")

user3 = User.create(username: "hey_itsStef", full_name: "Stefanie", display_name: "Stefanie.", bio: "Hi there! Welcome to my page!", email: "stef@stef.com", password: "123456")

image1 = Image.create!(user_id: dummyUser.id, date: Date.parse("2017-11-16"), caption: "Hi, I'm Tagi!")
# tagi

image2 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-2-20"))
# black and white

image3 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-8-12"), caption: "This year's bloom.")
# flower

image4 = Image.create!(user_id: user1.id, date: Date.parse("2018-1-23"), caption: "Light Blue")
# beetle

image5 = Image.create!(user_id: user1.id, date: Date.parse("2018-4-19"), caption: "Lavender")
# purplecup

image6 = Image.create!(user_id: user1.id, date: Date.parse("2018-5-10"))
# leaf

image7 = Image.create!(user_id: user1.id, date: Date.parse("2018-8-3"))
# chris

image8 = Image.create!(user_id: user1.id, date: Date.parse("2017-10-27"))
# fooddrizzle

image9 = Image.create!(user_id: user1.id, date: Date.parse("2018-2-2"), caption: "Deviled Eggs")
# deviledeggs

image10 = Image.create!(user_id: user2.id, date: Date.parse("2018-7-16"), caption: "I love the beach.")
# beach

image11 = Image.create!(user_id: user2.id, date: Date.parse("2018-4-16"), caption: "Nature's paintings")
# sunset

image12 = Image.create!(user_id: user2.id, date: Date.parse("2017-9-20"), caption: "It's becoming fall!")
#trees

image13 = Image.create!(user_id: user3.id, date: Date.parse("2018-3-15"))
#sparklers

image14 = Image.create!(user_id: user3.id, date: Date.parse("2018-8-28"))
# dandelion

image15 = Image.create!(user_id: user3.id, date: Date.parse("2018-9-10"), caption: "Read more!")
# grassreading
