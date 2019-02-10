class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.integer :choice_id, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :answers, :choice_id
  end
end
