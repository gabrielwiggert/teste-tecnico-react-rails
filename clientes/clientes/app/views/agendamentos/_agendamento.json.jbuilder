json.extract! agendamento, :id, :titulo, :datahora, :link, :sobre, :created_at, :updated_at
json.url agendamento_url(agendamento, format: :json)
