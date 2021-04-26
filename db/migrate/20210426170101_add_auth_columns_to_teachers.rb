class AddAuthColumnsToTeachers < ActiveRecord::Migration[6.1]
  def change
    add_column :teachers, :username, :string
    add_column :teachers, :email, :string
    add_column :teachers, :password_digest, :string
  end
end
