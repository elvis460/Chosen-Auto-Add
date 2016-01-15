class CandidateController < ApplicationController
	skip_before_filter :verify_authenticity_token , only: [:update]
	def edit
		@candidate = Candidate.find(params[:id])
		@country = Country.all
	end
	
	def update
		@candidate = Candidate.find(params[:candidate_id])
		@candidate.country_id = params[:country_id]
		@candidate.save
		render text:'ok'
	end

end
