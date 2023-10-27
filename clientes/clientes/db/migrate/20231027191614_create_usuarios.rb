class CreateUsuarios < ActiveRecord::Migration[7.1]
  def change
    create_table :usuarios do |t|
      t.string :usuario
      t.string :senha

      t.timestamps
    end
  end
end
