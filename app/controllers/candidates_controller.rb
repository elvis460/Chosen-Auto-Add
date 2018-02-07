class CandidatesController < ApplicationController
	skip_before_filter :verify_authenticity_token
	def index
		@candidate = Candidate.first
		@country = Country.all
	end
	
	def update
		@candidate = Candidate.find(params[:candidate_id])
		@candidate.country_id = params[:country_id]
		@candidate.save
		render text:'ok'
	end

	def auto_add_country
		@country = Country.new
		@country.name = params[:name]
		@country.save
		render json: @country
	end

end
