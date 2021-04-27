class ChangeNameColumnsToCamelCase < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :first_name, :firstName
    rename_column :users, :last_name, :lastName
    rename_column :students, :first_name, :firstName
    rename_column :students, :last_name, :lastName
  end
end
