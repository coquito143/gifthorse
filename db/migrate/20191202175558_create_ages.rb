class CreateAges < ActiveRecord::Migration[6.0]
  def change
    create_table :ages do |t|
      t.integer :age
      t.string :image_url

      t.timestamps
    end
  end
end
