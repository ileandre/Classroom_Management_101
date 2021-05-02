class ChangeCommentColumnFromCommentTocomments < ActiveRecord::Migration[6.1]
  def change
    rename_column :comments, :comment, :comments
  end
end
