class AddLocationController < ApplicationController
	skip_before_filter :verify_authenticity_token

	def auto_add
		@country = Country.new
		@country.name = params[:name]
		@country.save
		render json: @country
	end
end
