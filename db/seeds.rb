# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Group.destroy_all
Question.destroy_all
Choice.destroy_all
ActivePoll.destroy_all

demo = User.create(firstname: "Pollr",
                   lastname: "Bear",
                   username: "pollrbear",
                   email: "demo@pollrbear.com",
                   password: "bearbear")
demogroup1 = Group.create(title: "Ungrouped", user_id: demo.id)
demogroup2 = Group.create(title: "Bears favorite", user_id: demo.id)
demogroup3 = Group.create(title: "Group for bears", user_id: demo.id)

question1 = Question.create(body: "what", question_type: "q", group_id: demogroup1.id)
question2 = Question.create(body: "is", question_type: "q", group_id: demogroup1.id)
question3 = Question.create(body: "it", question_type: "q", group_id: demogroup3.id)
question4 = Question.create(body: "really", question_type: "q", group_id: demogroup3.id)

choice1 = Choice.create(body: "okay", question_id: question1.id)
choice2 = Choice.create(body: "not okay", question_id: question1.id)
choice3 = Choice.create(body: "lol", question_id: question2.id)
choice4 = Choice.create(body: "em", question_id: question2.id)
choice5 = Choice.create(body: "hmmm", question_id: question3.id)
choice6 = Choice.create(body: "haha", question_id: question3.id)
choice7 = Choice.create(body: "yes", question_id: question4.id)
choice8 = Choice.create(body: "no", question_id: question4.id)
choice9 = Choice.create(body: "maybe", question_id: question4.id)

active_poll = ActivePoll.create!(user_id: demo.id)