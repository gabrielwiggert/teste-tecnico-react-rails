class CreateChamados < ActiveRecord::Migration[7.1]
  def change
    create_table :chamados do |t|
      t.string :titulo
      t.string :codigo
      t.string :sobre

      t.timestamps
    end
  end
end
