class AddUniqueConstraintToSubs < ActiveRecord::Migration[5.2]
  def change
    change_column :subs, :title, :string, unique: true
    
  end
end
