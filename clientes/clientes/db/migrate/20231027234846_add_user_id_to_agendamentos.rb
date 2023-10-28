class AddUserIdToAgendamentos < ActiveRecord::Migration[7.1]
  def change
    add_column :agendamentos, :user_id, :integer
    add_index :agendamentos, :user_id
  end
end
