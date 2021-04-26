class Teacher < ApplicationRecord
    has_many :students, dependent: :destroy
    has_many :comments, through: :students
end
