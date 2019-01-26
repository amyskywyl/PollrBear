class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :question_type, :string, null: false
    remove_column :questions, :type, :string
  end
end
