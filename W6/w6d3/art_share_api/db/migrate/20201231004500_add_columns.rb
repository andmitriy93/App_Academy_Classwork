class AddColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :name, :username# uniqueness: true, null: false
    
    remove_column :users, :email
  end
end
