class ChangeCommentColumnFromCommentsToNotes < ActiveRecord::Migration[6.1]
  def change
    rename_column :comments, :comments, :notes
  end
end
