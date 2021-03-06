class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :caption
      t.integer :user_id, null: false
      t.date :date, null: false

      t.timestamps
    end
    add_index :images, :user_id
  end
end
