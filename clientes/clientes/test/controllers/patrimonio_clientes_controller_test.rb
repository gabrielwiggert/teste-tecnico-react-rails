require "test_helper"

class PatrimonioClientesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @patrimonio_cliente = patrimonio_clientes(:one)
  end

  test "should get index" do
    get patrimonio_clientes_url
    assert_response :success
  end

  test "should get new" do
    get new_patrimonio_cliente_url
    assert_response :success
  end

  test "should create patrimonio_cliente" do
    assert_difference("PatrimonioCliente.count") do
      post patrimonio_clientes_url, params: { patrimonio_cliente: { contaCorrente: @patrimonio_cliente.contaCorrente, id: @patrimonio_cliente.id, rendaFixa: @patrimonio_cliente.rendaFixa, rendaVariavel: @patrimonio_cliente.rendaVariavel } }
    end

    assert_redirected_to patrimonio_cliente_url(PatrimonioCliente.last)
  end

  test "should show patrimonio_cliente" do
    get patrimonio_cliente_url(@patrimonio_cliente)
    assert_response :success
  end

  test "should get edit" do
    get edit_patrimonio_cliente_url(@patrimonio_cliente)
    assert_response :success
  end

  test "should update patrimonio_cliente" do
    patch patrimonio_cliente_url(@patrimonio_cliente), params: { patrimonio_cliente: { contaCorrente: @patrimonio_cliente.contaCorrente, id: @patrimonio_cliente.id, rendaFixa: @patrimonio_cliente.rendaFixa, rendaVariavel: @patrimonio_cliente.rendaVariavel } }
    assert_redirected_to patrimonio_cliente_url(@patrimonio_cliente)
  end

  test "should destroy patrimonio_cliente" do
    assert_difference("PatrimonioCliente.count", -1) do
      delete patrimonio_cliente_url(@patrimonio_cliente)
    end

    assert_redirected_to patrimonio_clientes_url
  end
end
