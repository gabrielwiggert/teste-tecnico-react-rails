class BalancesController < ApplicationController
  before_action :set_balance, only: %i[ show edit update destroy ]

  # GET /balances or /balances.json
  def index
    @balances = Balance.all
  end

  # GET /balances/1 or /balances/1.json
  def show
  end

  # GET /balances/new
  def new
    @balance = Balance.new
  end

  # GET /balances/1/edit
  def edit
  end

  # POST /balances or /balances.json
  def create
    @balance = Balance.new(balance_params)

    respond_to do |format|
      if @balance.save
        format.html { redirect_to balance_url(@balance), notice: "Balance was successfully created." }
        format.json { render :show, status: :created, location: @balance }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @balance.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /balances/1 or /balances/1.json
  def update
    respond_to do |format|
      if @balance.update(balance_params)
        format.html { redirect_to balance_url(@balance), notice: "Balance was successfully updated." }
        format.json { render :show, status: :ok, location: @balance }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @balance.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /balances/1 or /balances/1.json
  def destroy
    @balance.destroy!

    respond_to do |format|
      format.html { redirect_to balances_url, notice: "Balance was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_balance
      @balance = Balance.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def balance_params
      params.require(:balance).permit(:idCliente, :contaCorrente, :rendaFixa, :rendaVariavel)
    end
end
