require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'twitter'
# require_relative './.twitter_credentials.rb'

key = File.read('./.key')
secret = File.read('./.secret')

twitter = Twitter::REST::Client.new do |config|
  config.consumer_key = key
  config.consumer_secret = secret
end

get '/' do
	File.read('./test.html')
end

get '/tweets' do 

	tweets = twitter.user_timeline('kanyewest', :count => 20)
	data = []
	
	tweets.each do |tweet|

		value = 0
				# ADDING VALUE FOR CHAR # AND @
				tweet.text.split('').each do |char|
					if char == '#' || char == '@'
						value += 3
					end
				end

				# ADDING VALUE FOR LINKS
				if text.include?('http')
					value +=5
				end

				time = Time.new(text.created_at)

				#ADDING COLOR CODE
				if time.hour == 0 && time.hour < 8
					color_code = 0
				elsif time.hour == 8 && time.hour < 16
					color_code = 1
				else
					color_code = 3
				end

				# CREATING TWEET OBJECT
				tweet_hash ={
					user_id: user.id,
					tweet_created_at: tweet.created_at,
					text: tweet.text,
					value: value, 
					color_code: color_code
					}

					data.push(tweet_hash)
			end

	data.to_json
end








