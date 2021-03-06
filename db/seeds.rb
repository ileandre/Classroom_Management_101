require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Comment.destroy_all
Student.destroy_all
User.destroy_all

@leandre = User.create(firstName: 'Irma', lastName: 'Leandre', username: 'MasterLea', email: 'irmz@gmail.com', password: 'masterlea123')

puts "#{User.count} users created!"


User.all.find_each do |user|
    50.times do 
        Student.create!(firstName: Faker::Name.first_name, lastName: Faker::Name.last_name, grade: 50 + rand(50), period: rand(1...6), user: @leandre)
    end
end

puts "#{Student.count} students created!"

Student.all.find_each do |student|
    3.times do 
        Comment.create!(comment: Faker::Lorem.paragraph(sentence_count: 3), student: student)
    end
end

puts "#{Comment.count} comments created!"