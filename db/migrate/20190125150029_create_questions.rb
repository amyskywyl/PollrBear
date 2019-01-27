class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.string :question_type, null: false
      t.boolean :active, null: false, default: "false"
      t.integer :group_id, null: false
      t.integer :prev_id
      t.integer :next_id

      t.timestamps
    end
    add_index :questions, :group_id
  end
end
