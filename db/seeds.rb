# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dummyUser = User.create(username:"demo_user", full_name: "Stef L", email: "stef@testing.com", password: "123456")

user1 = User.create(username: "CS.Photography", full_name: "Christopher", email: "chris@testing.com", password: "123456")

user2 = User.create(username: "NatureIsBeautiful", full_name: "Nature", email: "nature@testing.com", password: "123456")

image1 = Image.create!(user_id: 48, date: Date.parse("2017-11-16"))
# image1.save!

image2 = Image.create!(user_id: 48, date: Date.parse("2018-2-20"))
# image2.save!

image3 = Image.create!(user_id: 48, date: Date.parse("2018-8-12"))
# image3.save!

image4 = Image.create!(user_id: 49, date: Date.parse("2018-1-23"))
# image4.save!

image5 = Image.create!(user_id: 49, date: Date.parse("2018-4-19"))
# image5.save!

image6 = Image.create!(user_id: 49, date: Date.parse("2018-5-10"))
# image6.save!

image7 = Image.create!(user_id: 49, date: Date.parse("2018-8-3"))
# image7.save!

image8 = Image.create!(user_id: 50, date: Date.parse("2017-10-27"))
# image8.save!

image9 = Image.create!(user_id: 50, date: Date.parse("2018-2-2"))
# image9.save!

image10 = Image.create!(user_id: 50, date: Date.parse("2018-7-16"))
# image10.save!
