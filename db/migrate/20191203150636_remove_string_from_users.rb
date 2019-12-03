class RemoveStringFromUsers < ActiveRecord::Migration[6.0]
  def change

    remove_column :users, :string, :string
  end
end
