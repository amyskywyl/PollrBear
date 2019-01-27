class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :title, null: false, default: "Ungrouped"
      t.integer :user_id, null: false
      t.integer :ord, null:false

      t.timestamps
    end
    add_index :groups, :user_id
  end
end
