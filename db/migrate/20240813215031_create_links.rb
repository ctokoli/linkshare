class CreateLinks < ActiveRecord::Migration[7.1]
  def change
    create_table :links do |t|
      t.string :value1
      t.string :value3
      t.string :value5
      t.string :value7
      t.string :value9
      t.string :link2
      t.string :link4
      t.string :link6
      t.string :link8
      t.string :link10
      t.timestamps
    end
  end
end
