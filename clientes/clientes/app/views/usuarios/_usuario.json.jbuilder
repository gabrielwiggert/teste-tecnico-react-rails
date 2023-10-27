json.extract! usuario, :id, :usuario, :senha, :created_at, :updated_at
json.url usuario_url(usuario, format: :json)
