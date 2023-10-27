class PatrimonioClientesController < ApplicationController
  before_action :set_patrimonio_cliente, only: %i[ show edit update destroy ]

  # GET /patrimonio_clientes or /patrimonio_clientes.json
  def index
    @patrimonio_clientes = PatrimonioCliente.all
  end

  # GET /patrimonio_clientes/1 or /patrimonio_clientes/1.json
  def show
  end

  # GET /patrimonio_clientes/new
  def new
    @patrimonio_cliente = PatrimonioCliente.new
  end

  # GET /patrimonio_clientes/1/edit
  def edit
  end

  # POST /patrimonio_clientes or /patrimonio_clientes.json
  def create
    @patrimonio_cliente = PatrimonioCliente.new(patrimonio_cliente_params)

    respond_to do |format|
      if @patrimonio_cliente.save
        format.html { redirect_to patrimonio_cliente_url(@patrimonio_cliente), notice: "Patrimonio cliente was successfully created." }
        format.json { render :show, status: :created, location: @patrimonio_cliente }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @patrimonio_cliente.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /patrimonio_clientes/1 or /patrimonio_clientes/1.json
  def update
    respond_to do |format|
      if @patrimonio_cliente.update(patrimonio_cliente_params)
        format.html { redirect_to patrimonio_cliente_url(@patrimonio_cliente), notice: "Patrimonio cliente was successfully updated." }
        format.json { render :show, status: :ok, location: @patrimonio_cliente }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @patrimonio_cliente.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /patrimonio_clientes/1 or /patrimonio_clientes/1.json
  def destroy
    @patrimonio_cliente.destroy!

    respond_to do |format|
      format.html { redirect_to patrimonio_clientes_url, notice: "Patrimonio cliente was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patrimonio_cliente
      @patrimonio_cliente = PatrimonioCliente.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def patrimonio_cliente_params
      params.require(:patrimonio_cliente).permit(:id, :contaCorrente, :rendaFixa, :rendaVariavel)
    end
end
