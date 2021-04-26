class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.references :teacher, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.integer :grade
      t.integer :period

      t.timestamps
    end
  end
end
