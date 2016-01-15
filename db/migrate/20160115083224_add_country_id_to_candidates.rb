class AddCountryIdToCandidates < ActiveRecord::Migration
  def change
    add_column :candidates, :country_id, :integer
  end
end
