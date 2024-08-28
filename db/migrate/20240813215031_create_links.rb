class CreateLinks < ActiveRecord::Migration[7.1]
  def change
    create_table :links do |t|
      t.string :value
      t.string :link
      t.references :user, null: false, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
