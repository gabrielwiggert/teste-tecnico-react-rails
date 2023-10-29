# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Cliente.create(nome: 'Janaina Marques', email: 'janainamarques@gmail.com', celular: '+5519993693470')
Cliente.create(nome: 'Pedro Ramos', email: 'pedroramos@gmail.com', celular: '+5519993693479')
Cliente.create(nome: 'Luiza Amaral', email: 'luizaamaral@gmail.com', celular: '+5519993693471')

Usuario.create(usuario: 'admin', senha: 'admin')

Chamado.create(titulo: 'Problema com app', codigo: 'JOj3430opi32', sobre: 'Não estou conseguindo acessar o app')
Chamado.create(titulo: 'Dúvida sobre contrato', codigo: 'jha987324KJHA', sobre: 'Gostaria de esclarecer uma dúvida sobre o contrato assinado')
Chamado.create(titulo: 'Problema com o pagamento', codigo: 'OJ879IHGBknb', sobre: 'Meu débito automático não foi agendado')

Balance.create(idCliente: '1', contaCorrente: '5435.45', rendaFixa: '12543.34', rendaVariavel: '3343.23')
Balance.create(idCliente: '2', contaCorrente: '3245.34', rendaFixa: '5234.21', rendaVariavel: '11345.87')
Balance.create(idCliente: '3', contaCorrente: '19235.41', rendaFixa: '52321.25', rendaVariavel: '11098.23')

Agendamento.create(titulo: 'Reunião inicial', datahora: '2023-11-22 10:10:00 UTC', link: 'meet.google/IJASa13', sobre: 'Reunião de alinhamento')
Agendamento.create(titulo: 'Alinhamento Renda Fixa', datahora: '2023-10-31 00:30:00 UTC', link: 'teams.microsoft/234aJDSF', sobre: 'Treinamento de renda fixa')
Agendamento.create(titulo: 'Planejamento estratégico', datahora: '2023-12-23 11:20:00 UTC', link: 'zoom.meetings/sJIH23423', sobre: 'Planejamento de investimento em educação')