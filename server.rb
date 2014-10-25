require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require_relative './connection'

# API = File.read('./.apikey')

# query = JSON.parse(HTTParty.get("http://api.change.org/v1/petitions/132448/reasons?api_key=#{API}&page_size=50&sort=time_desc"))['reasons']

# # reasons = []

# query.each do |reason|
# 	time = reason["created_at"]
# 	content = reason["content"]
# 	author = reason["author_name"]

# 	# reasons.push({
# 	# 	time: time,
# 	# 	content: content,
# 	# 	author: author
# 	# 	})

# 	Reason.create({
# 		time: time,
# 		content: content,
# 		author: author
# 		})

# end

# reasons = JSON.parse(Reason.all.to_json)

get '/' do
	File.read('./index.html')
end

get '/reasons' do 
	content_type :json
	reasons = Reason.all
	data = {
		name: 'Reasons',
		children: reasons
	}

	data.to_json
	# binding.pry
	# reasons.to_json
end








