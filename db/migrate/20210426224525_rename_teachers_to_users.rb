class RenameTeachersToUsers < ActiveRecord::Migration[6.1]
  def change
    rename_table :teachers, :users
  end
end
