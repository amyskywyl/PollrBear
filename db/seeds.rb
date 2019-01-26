# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Group.destroy_all

demo = User.create(firstname: "Pollr",
                   lastname: "Bear",
                   username: "pollrbear",
                   email: "demo@pollrbear.com",
                   password: "bearbear")

demogroup1 = Group.create(title: "Bears favorite", user_id: demo.id)
demogroup2 = Group.create(user_id: demo.id)
demogroup3 = Group.create(title: "Group for bears", user_id: demo.id)

question1 = Question.create(body: "what", question_type: "q", group_id: demogroup1.id)