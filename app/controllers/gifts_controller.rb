class GiftsController < ApplicationController
  before_action :set_gift, only: [:update, :destroy, :index_single_gift]
  before_action :authorize_request, except: [:index_by_age, :all_gifts]

  # get '/ages/:age_id/gifts', to: 'gifts#index_by_age'
  def index_by_age
    @age = Age.find(params[:age_id])
    @gifts = @age.gifts
    render json: @gifts, include: :ages, status: :ok
  end

  def all_gifts
    @gifts = Gift.all
    render json: @gifts, include: :ages, status: :ok
  end

    # get '/ages/:age_id/gifts_by_price', to: 'gifts#index_by_age_sorted_by_price'
    def index_by_age_sorted_by_price
      @age = Age.find(params[:age_id])
      @gifts = @age.gifts
      render json: @gifts, include: :ages, status: :ok
    end
  
  # get '/gifts', to: 'gifts#/index_by_user'
  def index_by_user
    @gifts = @current_user.gifts
    render json: @gifts, include: :ages, status: :ok
  end

  # get '/gifts/:id', to: 'gifts#index_single_gift'
  def index_single_gift
    render json: @gift, include: :ages, status: :ok
  end

  # post '/ages/:age_id/gifts', to: 'gifts#add_new'
  def add_new
    @age = Age.find(params[:age_id])
    @gift = Gift.new(gift_params)
    @current_user.gifts << @gift
    # @current_user.gifts << @gift  this shovels and saves at the same time
    if @age.gifts << @gift
      render json: {gift: @gift}, status: :created
    else
      render json: { error: @gift.errors }, status: :unprocessible_entity
    end
  end

  # put '/gifts/:giftid', to: 'gifts#update'
  def update
    if @gift.user == @current_user
      if @gift.update(gift_params)
        render json: @gift, include: :ages
      else
        render json: @gift.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  # destroy '/gifts/:id', to: 'gifts#destroy'
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
    end

    # Only allow a trusted parameter "white list" through.
    def gift_params
      params.require(:gift).permit(:name, :image_url, :amazon_url, :for_girls, :for_boys, :price_range)
    end
end