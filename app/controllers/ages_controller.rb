class AgesController < ApplicationController

  def index
    @ages = Age.all
    render json: @ages, status: :ok
  end

end