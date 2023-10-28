class CreateAgendamentos < ActiveRecord::Migration[7.1]
  def change
    create_table :agendamentos do |t|
      t.string :titulo
      t.datetime :datahora
      t.string :link
      t.string :sobre

      t.timestamps
    end
  end
end
