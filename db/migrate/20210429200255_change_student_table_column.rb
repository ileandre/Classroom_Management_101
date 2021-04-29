class ChangeStudentTableColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :students, :teacher_id, :user_id
  end
end