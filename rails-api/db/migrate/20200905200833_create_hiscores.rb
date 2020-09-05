class CreateHiscores < ActiveRecord::Migration[6.0]
  def change
    create_table :hiscores do |t|
      t.string :name
      t.integer :score
      t.integer :time
    end
  end
end
