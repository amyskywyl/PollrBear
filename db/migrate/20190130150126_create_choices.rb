class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.string :body, null: false
      t.integer :question_id, null: false
      t.integer :next_id
      t.integer :prev_id

      t.timestamps
    end
    add_index :choices, :question_id
  end
end
