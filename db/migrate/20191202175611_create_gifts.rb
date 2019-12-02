class CreateGifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :name
      t.string :image_url
      t.string :amazon_url
      t.boolean :for_girls
      t.boolean :for_boys
      t.string :price_range

      t.timestamps
    end
  end
end
