require "test_helper"

class PatrimoniosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @patrimonio = patrimonios(:one)
  end

  test "should get index" do
    get patrimonios_url
    assert_response :success
  end

  test "should get new" do
    get new_patrimonio_url
    assert_response :success
  end

  test "should create patrimonio" do
    assert_difference("Patrimonio.count") do
      post patrimonios_url, params: { patrimonio: { contaCorrente: @patrimonio.contaCorrente, rendaFixa: @patrimonio.rendaFixa, rendaVariavel: @patrimonio.rendaVariavel } }
    end

    assert_redirected_to patrimonio_url(Patrimonio.last)
  end

  test "should show patrimonio" do
    get patrimonio_url(@patrimonio)
    assert_response :success
  end

  test "should get edit" do
    get edit_patrimonio_url(@patrimonio)
    assert_response :success
  end

  test "should update patrimonio" do
    patch patrimonio_url(@patrimonio), params: { patrimonio: { contaCorrente: @patrimonio.contaCorrente, rendaFixa: @patrimonio.rendaFixa, rendaVariavel: @patrimonio.rendaVariavel } }
    assert_redirected_to patrimonio_url(@patrimonio)
  end

  test "should destroy patrimonio" do
    assert_difference("Patrimonio.count", -1) do
      delete patrimonio_url(@patrimonio)
    end

    assert_redirected_to patrimonios_url
  end
end
