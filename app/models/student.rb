class Student < ApplicationRecord
  belongs_to :teacher
  has_many :comments, dependent: :destroy 
end
