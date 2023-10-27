require "application_system_test_case"

class PatrimonioClientesTest < ApplicationSystemTestCase
  setup do
    @patrimonio_cliente = patrimonio_clientes(:one)
  end

  test "visiting the index" do
    visit patrimonio_clientes_url
    assert_selector "h1", text: "Patrimonio clientes"
  end

  test "should create patrimonio cliente" do
    visit patrimonio_clientes_url
    click_on "New patrimonio cliente"

    fill_in "Contacorrente", with: @patrimonio_cliente.contaCorrente
    fill_in "Id", with: @patrimonio_cliente.id
    fill_in "Rendafixa", with: @patrimonio_cliente.rendaFixa
    fill_in "Rendavariavel", with: @patrimonio_cliente.rendaVariavel
    click_on "Create Patrimonio cliente"

    assert_text "Patrimonio cliente was successfully created"
    click_on "Back"
  end

  test "should update Patrimonio cliente" do
    visit patrimonio_cliente_url(@patrimonio_cliente)
    click_on "Edit this patrimonio cliente", match: :first

    fill_in "Contacorrente", with: @patrimonio_cliente.contaCorrente
    fill_in "Id", with: @patrimonio_cliente.id
    fill_in "Rendafixa", with: @patrimonio_cliente.rendaFixa
    fill_in "Rendavariavel", with: @patrimonio_cliente.rendaVariavel
    click_on "Update Patrimonio cliente"

    assert_text "Patrimonio cliente was successfully updated"
    click_on "Back"
  end

  test "should destroy Patrimonio cliente" do
    visit patrimonio_cliente_url(@patrimonio_cliente)
    click_on "Destroy this patrimonio cliente", match: :first

    assert_text "Patrimonio cliente was successfully destroyed"
  end
end
