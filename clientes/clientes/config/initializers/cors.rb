Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3000'
      resource '*', headers: 'Access-Control-Allow-Origin', methods: [:get, :post]
    end
  end