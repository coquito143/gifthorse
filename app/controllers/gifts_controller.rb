class GiftsController < ApplicationController
  before_action :set_gift, only: [:update, :destroy]
  before_action :authorize_request, except: %i[index_by_age]

  # get '/list_by_age/:age_id/gifts', to: 'gifts#index_by_age'
  def index_by_age
    @age = Age.find(params[:age_id])
    @gifts = @age.gifts
    render json: @gifts, status: :ok
  end

  
  # get '/gifts', to: 'gifts#/index_by_user'
  def index_by_user
    @age = Age.find(params[:age_id])
    @gifts = @age.gifts
    render json: @gifts, status: :ok
  end

  # post '/gifts', to: 'gifts#add_new'
  def add_new
    @gift = Gift.new(gift_params)
    if @gift.save
      render json: {gift: @gift}, status: :created
    else
      render json: { error: @gift.errors }, status: :unprocessible_entity
    end
  end

  # put '/gifts/:giftid', to: 'gifts#update'
  def update
    if @gift.user == @current_user
      if @gift.update(gift_params)
        render json: @gift
      else
        render json: @gift.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  # destroy '/gifts/:giftid', to: 'gifts#destroy'
  def destroy
    if @gift.user == @current_user
      @gift.destroy
      render json: {gift: @gift}, status: :ok
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gift
      @gift = Gift.find(params[:id])
      puts @gift
    end

    # Only allow a trusted parameter "white list" through.
    def gift_params
      params.require(:gift).permit(:name, :image_url, :amazon_url, :for_girls, :for_boys, :price_range)
    end
end