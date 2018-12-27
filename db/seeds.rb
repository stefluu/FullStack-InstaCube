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


dummyUser = User.create(username:"demo_user", full_name: "DemoUser",, display_name: "Demo User", bio: "Hi. Welcome to InstaCube!", email: "demo@testing.com", password: "123456")

user1 = User.create(username: "CS.Photography", full_name: "Christopher", display_name: "Christopher Sturm", bio: "Film and Digital photography- csturmphoto.com", email: "chris@testing.com", password: "123456")

user2 = User.create(username: "Look_up_Look_down", full_name: "Nature", display_name: "Nature", bio: "Look all around!", email: "nature@testing.com", password: "123456")

user3 = User.create(username: "letsExplore", full_name: "Stefanie", display_name: "Stefanie.", bio: "Hi there! Welcome to my page!", email: "stef@testing.com", password: "123456")

user4 = User.create(username: "WinterisComing", full_name: "Jack Frost", display_name: "Jack Frost", bio: "You know nothing, John Snow.", email: "winter@testing.com", password: "123456")

user5 = User.create(username: "Ocean+Sky", full_name: "Land Sea", display_name: "Land + Sea", bio: "If only Ocean Beach was warm enough to swim", email: "oceansky@testing.com", password: "123456")

user6 = User.create(username: "TAGI", full_name: "Tagi", display_name: "Tagi", bio: "Peep!", email: "tagi@testing.com", password: "123456")

user7 = User.create(username: "FoodnStuff", full_name: "Food", display_name: "FOOD", bio: "All the foods.", email: "food@testing.com", password: "123456")

#Dummy User

# tagi
image1 = Image.create!(user_id: dummyUser.id, date: Date.parse("2017-11-16"), caption: "Hi, I'm Tagi!")
image1.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/Q35wrvi4yjo31NHCedX9SmdP"), filename: "tagi.jpeg")

# black and white
image2 = Image.create!(user_id: dummyUser.id, date: Date.parse("2017-11-29"))
image2.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/FGQw45pkJp77uR2Q3geNPTtG"), filename: "blackwhitephoto.jpeg")

# flower
image3 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-1-12"), caption: "I grew this!")
image3.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/kQevcka5GnL3EJ3QiRJ8L6vq"), filename: "flower.jpg")

# wheat
image4 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-7-29"), caption: "Windswept Wheat")
image4.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/wheat.jpg"), filename: "wheat.jpg")

# grassreading
image5 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-8-10"), caption: "Read more!")
image5.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/grnBCYkcm5q8GydPgqhzmPLz"), filename: "grassreading.jpeg")

# bluewheat
image6 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-8-11"), caption: "Wheat against the sky.")
image6.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/bluewheat.jpg"), filename: "bluewheat.jpg")

# redflower
image7 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-3-12"), caption: "Look how red this flower is!")
image7.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/redflower.jpg"), filename: "redflower.jpg")

# sunset
image8 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-4-16"), caption: "Nature's paintings")
image8.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/i1bW6ZFnHoYug3UgtPpkVULo"), filename: "sunset.jpg")


#ChristopherSturm

# beetle
image9 = Image.create!(user_id: user1.id, date: Date.parse("2017-1-23"), caption: "Light Blue")
image9.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/r135x1tWpJg41uzwfAV8wuf1"), filename: "beetle.jpg")

# purplecup
image10 = Image.create!(user_id: user1.id, date: Date.parse("2017-10-19"), caption: "Lavender")
image10.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/BnjBZvvtydWxCZv16aF3Phrn"), filename: "purplecup.jpg")

# leaf
image11 = Image.create!(user_id: user1.id, date: Date.parse("2018-1-10"), caption: "These are ferns")
image11.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/zPGYXZtWP3nzeR8YEHViJFZd"), filename: "leaf.jpg")

# fooddrizzle
image12 = Image.create!(user_id: user1.id, date: Date.parse("2018-5-27"), caption: "Try this place out")
image12.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/rZ8EeNxdinFm7tCuRczMY4gU"), filename: "fooddrizzle.jpg")

# deviledeggs
image13 = Image.create!(user_id: user1.id, date: Date.parse("2018-7-19"), caption: "Deviled Eggs")
image13.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/YBySc5daH9i3cfpV2A3MjYFs"), filename: "deviledeggs.jpeg")


##LookUp LookDown

# redleaf
image14 = Image.create!(user_id: user3.id, date: Date.parse("2017-10-2"), caption: "Fall colors")
image14.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/redleaf.jpeg"), filename: "redleaf.jpeg")

# treebranches
image15 = Image.create!(user_id: user3.id, date: Date.parse("2017-11-5"), caption: "No more leaves.")
image15.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/treebranches.jpg"), filename: "treebranches.jpg")

#trees
image16 = Image.create!(user_id: user3.id, date: Date.parse("2017-11-27"), caption: "It's becoming fall!")
image16.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/YnND9ndgBcbPFnK5rgdJxrt2"), filename: "trees.jpg")

#fall_leaf
image17 = Image.create!(user_id: user3.id, date: Date.parse("2018-9-28"), caption: "Autumn is here again!")
image17.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/fall_leaf.jpg"), filename: "fall_leaf.jpg")

#uncurling
image18 = Image.create!(user_id: user3.id, date: Date.parse("2018-10-20"), caption: "A picture from earlier this year! It grew back!")
image18.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/uncurling.jpg"), filename: "uncurling.jpg")

# redleaf2
image19 = Image.create!(user_id: user3.id, date: Date.parse("2018-10-30"), caption: "Another red leaf!")
image19.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/redleaf2.jpeg"), filename: "redleaf2.jpeg")

# dandelion
image20 = Image.create!(user_id: user3.id, date: Date.parse("2018-12-30"), caption: "Make a wish!")
image20.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/SpyB33FLBsAufbCTXwkext1h"), filename: "dandelion.jpeg")



#letsExplore

#sparklers
image21 = Image.create!(user_id: user4.id, date: Date.parse("2017-12-2"), caption: "Sparklers for my friend's wedding")
image21.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/YeFGKAE7Hz11a92Vng5r8Ppq"), filename: "sparklers.jpg")


# paintthetown
image22 = Image.create!(user_id: user4.id, date: Date.parse("2018-2-23"), caption: "Paint the town. No parking.")
image22.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/paintthetown.jpg"), filename: "paintthetown.jpg")

# ferry
image23 = Image.create!(user_id: user4.id, date: Date.parse("2018-4-19"), caption: "Sit and talk a while.")
image23.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/ferry.jpg"), filename: "ferry.jpg")

# lightfence
image24 = Image.create!(user_id: user4.id, date: Date.parse("2018-5-26"), caption: "Glow.")
image24.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/lightfence.jpg"), filename: "lightfence.jpg")

# plane
image24 = Image.create!(user_id: user4.id, date: Date.parse("2018-7-18"), caption: "Travel when you can.")
image24.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/plane.jpg"), filename: "plane.jpg")


image10 = Image.create!(user_id: user2.id, date: Date.parse("2018-7-16"), caption: "I love the beach.")
# beach

image10.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/V5p3a5bTiKq5rqv5iSQ6ibVU"), filename: "beach.jpeg")








