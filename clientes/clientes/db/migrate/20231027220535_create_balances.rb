class CreateBalances < ActiveRecord::Migration[7.1]
  def change
    create_table :balances do |t|
      t.integer :idCliente
      t.float :contaCorrente
      t.float :rendaFixa
      t.float :rendaVariavel

      t.timestamps
    end
  end
end
