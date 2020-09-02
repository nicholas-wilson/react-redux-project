class CreateVolleyballs < ActiveRecord::Migration[6.0]
  def change
    create_table :volleyballs do |t|
      t.integer :top
      t.integer :left
    end
  end
end
