class CreateFollowings < ActiveRecord::Migration[5.2]
  def change
    create_table :followings do |t|
      t.integer :user_id, null: false
      t.integer :follower_id, null: false

      t.timestamps
    end
    add_index :followings, :user_id
    add_index :followings, :follower_id
  end
end
