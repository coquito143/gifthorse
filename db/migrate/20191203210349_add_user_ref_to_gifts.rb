class AddUserRefToGifts < ActiveRecord::Migration[6.0]
  def change
    add_reference :gifts, :user, null: false, foreign_key: true
  end
end
