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
Teacher.destroy_all

@leandre = Teacher.create(first_name: 'Irma', last_name: 'Leandre', quote: 'Do not let others define your success.')

puts "#{Teacher.count} teachers created!"


Teacher.all.find_each do |teacher|
    50.times do 
        Student.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, grade: 50 + rand(50), period: rand(1...6), teacher: @leandre)
    end
end

puts "#{Student.count} students created!"

Student.all.find_each do |student|
    3.times do 
        Comment.create!(comment: Faker::Lorem.paragraph(sentence_count: 3), student: student)
    end
end

puts "#{Comment.count} comments created!"