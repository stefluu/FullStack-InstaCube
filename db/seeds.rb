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


dummyUser = User.create(username:"demo_user", full_name: "DemoUser", display_name: "Demo User", bio: "Hi. Welcome to InstaCube!", email: "demo@testing.com", password: "123456")

user1 = User.create(username: "CS.Photography", full_name: "Christopher", display_name: "Christopher Sturm", bio: "Film and Digital photography- csturmphoto.com", email: "chris@testing.com", password: "123456")

user2 = User.create(username: "Look_up_Look_down", full_name: "Nature", display_name: "Nature", bio: "Look all around!", email: "nature@testing.com", password: "123456")

user3 = User.create(username: "letsExplore", full_name: "Stefanie", display_name: "Stefanie.", bio: "Hi there! Welcome to my page!", email: "stef@testing.com", password: "123456")

user4 = User.create(username: "WinterIsComing", full_name: "Jack Frost", display_name: "Jack Frost", bio: "You know nothing, John Snow.", email: "winter@testing.com", password: "123456")

user5 = User.create(username: "Ocean+Sky", full_name: "Land Sea", display_name: "Land + Sea", bio: "If only Ocean Beach was warm enough to swim", email: "oceansky@testing.com", password: "123456")

user6 = User.create(username: "TAGI", full_name: "Tagi", display_name: "Tagi", bio: "Peep!", email: "tagi@testing.com", password: "123456")

user7 = User.create(username: "FoodnStuff", full_name: "Food", display_name: "FOOD", bio: "All the foods.", email: "food@testing.com", password: "123456")

#Dummy User

# tagi
image1 = Image.create!(user_id: dummyUser.id, date: Date.parse("2017-11-16"), caption: "Hi, I'm Tagi!")
image1.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/Q35wrvi4yjo31NHCedX9SmdP"), filename: "tagi.jpeg")

# black and white
image2 = Image.create!(user_id: dummyUser.id, date: Date.parse("2017-11-29"))
image2.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/blackwhitephoto.jpeg"), filename: "blackwhitephoto.jpeg")

# flower
image3 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-1-12"), caption: "I grew this!")
image3.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/flower.jpg"), filename: "flower.jpg")

# wheat
image4 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-7-29"), caption: "Windswept Wheat")
image4.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/wheat.jpg"), filename: "wheat.jpg")

# grassing
image5 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-8-10"), caption: "Read more!")
image5.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/grassreading.jpeg"), filename: "grassreading.jpeg")

# bluewheat
image6 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-8-11"), caption: "Wheat against the sky.")
image6.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/bluewheat.jpg"), filename: "bluewheat.jpg")

# redflower
image7 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-3-12"), caption: "Look how red this flower is!")
image7.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/redflower.jpg"), filename: "redflower.jpg")

# sunset
image8 = Image.create!(user_id: dummyUser.id, date: Date.parse("2018-4-16"), caption: "Nature's paintings")
image8.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/sunset.jpg"), filename: "sunset.jpg")


#ChristopherSturm

# beetle
image9 = Image.create!(user_id: user1.id, date: Date.parse("2017-1-23"), caption: "Light Blue")
image9.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/beetle.jpg"), filename: "beetle.jpg")

# purplecup
image10 = Image.create!(user_id: user1.id, date: Date.parse("2017-10-19"), caption: "Lavender")
image10.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/purplecup.jpg"), filename: "purplecup.jpg")

# leaf
image11 = Image.create!(user_id: user1.id, date: Date.parse("2018-1-10"), caption: "These are ferns")
image11.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/leaf.jpg"), filename: "leaf.jpg")

# fooddrizzle
image12 = Image.create!(user_id: user1.id, date: Date.parse("2018-5-27"), caption: "Try this place out")
image12.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/fooddrizzle.jpg"), filename: "fooddrizzle.jpg")

# deviledeggs
image13 = Image.create!(user_id: user1.id, date: Date.parse("2018-7-19"), caption: "Deviled Eggs")
image13.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/deviledeggs.jpeg"), filename: "deviledeggs.jpeg")


##LookUp LookDown

# redleaf
image14 = Image.create!(user_id: user2.id, date: Date.parse("2017-10-2"), caption: "Fall colors")
image14.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/redleaf.jpeg"), filename: "redleaf.jpeg")

# treebranches
image15 = Image.create!(user_id: user2.id, date: Date.parse("2017-11-5"), caption: "No more leaves.")
image15.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/treebranches.jpg"), filename: "treebranches.jpg")

#trees
image16 = Image.create!(user_id: user2.id, date: Date.parse("2017-11-27"), caption: "It's becoming fall!")
image16.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/trees.jpg"), filename: "trees.jpg")

#fall_leaf
image17 = Image.create!(user_id: user2.id, date: Date.parse("2018-9-28"), caption: "Autumn is here again!")
image17.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/fall_leaf.jpg"), filename: "fall_leaf.jpg")

#uncurling
image18 = Image.create!(user_id: user2.id, date: Date.parse("2018-10-20"), caption: "A picture from earlier this year! It grew back!")
image18.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/uncurling.jpg"), filename: "uncurling.jpg")

# redleaf2
image19 = Image.create!(user_id: user2.id, date: Date.parse("2018-10-30"), caption: "Another red leaf!")
image19.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/redleaf2.jpeg"), filename: "redleaf2.jpeg")

# dandelion
image20 = Image.create!(user_id: user2.id, date: Date.parse("2018-12-30"), caption: "Make a wish!")
image20.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/dandelion.jpeg"), filename: "dandelion.jpeg")



#letsExplore

#sparklers
image21 = Image.create!(user_id: user3.id, date: Date.parse("2017-12-2"), caption: "Sparklers for my friend's wedding")
image21.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/sparklers.jpg"), filename: "sparklers.jpg")


# paintthetown
image22 = Image.create!(user_id: user3.id, date: Date.parse("2018-2-23"), caption: "Paint the town. No parking.")
image22.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/paintthetown.jpg"), filename: "paintthetown.jpg")

# ferry
image23 = Image.create!(user_id: user3.id, date: Date.parse("2018-4-19"), caption: "Sit and talk a while.")
image23.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/ferry.jpg"), filename: "ferry.jpg")

# lightfence
image24 = Image.create!(user_id: user3.id, date: Date.parse("2018-5-26"), caption: "Glow.")
image24.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/lightfence.jpg"), filename: "lightfence.jpg")

# plane
image24 = Image.create!(user_id: user3.id, date: Date.parse("2018-7-18"), caption: "Travel when you can.")
image24.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/plane.jpg"), filename: "plane.jpg")



#WinterIsComing

# winterwindow
image25 = Image.create!(user_id: user4.id, date: Date.parse("2018-12-31"), caption: "Winter is Coming.")
image25.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/winterwindow.jpg"), filename: "winterwindow.jpg")

# rockingchair
image26 = Image.create!(user_id: user4.id, date: Date.parse("2018-1-2"), caption: "I sat here with a cup of english tea and looked at the snow.")
image26.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/rockingchair.jpg"), filename: "rockingchair.jpg")

# bowlgloves
image26 = Image.create!(user_id: user4.id, date: Date.parse("2018-1-30"), caption: "It's chilly out.")
image26.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/bowlgloves.jpg"), filename: "bowlgloves.jpg")

# snow
image26 = Image.create!(user_id: user4.id, date: Date.parse("2018-12-12"), caption: "Winter arrived...again!")
image26.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/snow.jpg"), filename: "snow.jpg")

# pinecone
image27 = Image.create!(user_id: user4.id, date: Date.parse("2018-12-23"), caption: "All these pinecones...")
image27.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/pinecone.jpg"), filename: "pinecone.jpg")



#Ocean+Sky

# rippledclouds
image28 = Image.create!(user_id: user5.id, date: Date.parse("2018-7-13"), caption: "This was an amazing sight and a beautiful day.")
image28.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/rippledclouds.jpg"), filename: "rippledclouds.jpg")

# dolores
image29 = Image.create!(user_id: user5.id, date: Date.parse("2018-8-4"), caption: "Pretty day at Dolores.")
image29.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/dolores.jpg"), filename: "dolores.jpg")

# beach.jpg
image29 = Image.create!(user_id: user5.id, date: Date.parse("2018-8-14"), caption: "Found this cave by a swing.")
image29.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/beach.jpg"), filename: "beach.jpg")

# sandfootprints
image30 = Image.create!(user_id: user5.id, date: Date.parse("2018-9-20"), caption: "Chilly walk on the beach")
image30.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/sandfootprints.jpg"), filename: "sandfootprints.jpg")

# beach.jpeg
image31 = Image.create!(user_id: user5.id, date: Date.parse("2018-11-7"), caption: "Definitely looks colder than it was.")
image31.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/V5p3a5bTiKq5rqv5iSQ6ibVU"), filename: "beach.jpeg")



#Tagi

# tagiscreaming
image32 = Image.create!(user_id: user6.id, date: Date.parse("2018-6-7"), caption: "Mom! Listen to me mom!")
image32.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/tagiscreaming.jpg"), filename: "tagiscreaming.jpg")

# tagitoiletpaper
image33 = Image.create!(user_id: user6.id, date: Date.parse("2018-7-7"), caption: "What's in here? Let me check again.")
image33.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/tagitoiletpaper.jpg"), filename: "tagitoiletpaper.jpg")

# tagiturned
image34 = Image.create!(user_id: user6.id, date: Date.parse("2018-7-25"), caption: "Peep...?")
image34.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/tagiturned.jpg"), filename: "tagiturned.jpg")


#FoodnStuff

# thanksgiving
image35 = Image.create!(user_id: user7.id, date: Date.parse("2017-11-23"), caption: "Family Thanksgiving! :)")
image35.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/thanksgiving.jpg"), filename: "thanksgiving.jpg")

# pasta
image36 = Image.create!(user_id: user7.id, date: Date.parse("2018-1-28"), caption: "Made baked ziti tonight!")
image36.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/pasta.jpg"), filename: "pasta.jpg")

# hkcafe
image37 = Image.create!(user_id: user7.id, date: Date.parse("2018-3-5"), caption: "Baked dishes at HK cafes are bomb!")
image37.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/hk+cafe.jpg"), filename: "hk+cafe.jpg")

# donuts
image38 = Image.create!(user_id: user7.id, date: Date.parse("2018-8-21"), caption: "From when I went to Portland!")
image38.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/donuts.jpg"), filename: "donuts.jpg")

# tomato
image39 = Image.create!(user_id: user7.id, date: Date.parse("2018-9-28"), caption: "Farmers' Market tomatoes.")
image39.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/tomato.jpg"), filename: "tomato.jpg")

# matcha
image40 = Image.create!(user_id: user7.id, date: Date.parse("2018-11-27"), caption: "Mmm Matcha....")
image40.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/instacube-dev/matcha_rotated.png"), filename: "matcha_rotated.png")
