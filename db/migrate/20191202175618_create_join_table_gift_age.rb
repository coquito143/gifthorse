class CreateJoinTableGiftAge < ActiveRecord::Migration[6.0]
  def change
    create_join_table :gifts, :ages do |t|
      # t.index [:gift_id, :age_id]
      # t.index [:age_id, :gift_id]
    end
  end
end
