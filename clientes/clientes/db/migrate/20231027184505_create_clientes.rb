class CreateClientes < ActiveRecord::Migration[7.1]
  def change
    create_table :clientes do |t|
      t.string :nome
      t.string :email
      t.string :celular

      t.timestamps
    end
  end
end
