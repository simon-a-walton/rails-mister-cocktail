require 'open-uri'
require 'json'

class CocktailsController < ApplicationController

  def index
    @cocktails = Cocktail.all
  end

  def show
    @cocktail = Cocktail.find(params[:id])
    @doses = @cocktail.doses
    @dose = Dose.new
  end

  def new
    @cocktail = Cocktail.new
    # @doses = Dose.all
  end

  def create
    @cocktail = Cocktail.new(strong_params)
    # random_url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    # picture = open(random_url).read
    # json = JSON.parse(picture)
    # json["drinks"].each do |image|
    #   @random_url = image["strDrinkThumb"]
    # end
    # return @random_url
    # @url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=#{@cocktail.name}".downcase
    if @cocktail.save
      redirect_to @cocktail
    else
      render :new
    end
  end



  private

  def strong_params
    params.require(:cocktail).permit(:name)
  end
end
