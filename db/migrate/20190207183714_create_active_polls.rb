class CreateActivePolls < ActiveRecord::Migration[5.2]
  def change
    create_table :active_polls do |t|
      t.integer :user_id, null: false
      t.integer :question_id

      t.timestamps
    end
    add_index :active_polls, :user_id
  end
end
