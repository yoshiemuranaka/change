require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :host => "localhost",
  :username => "yoshiemuranaka",
  :database => "dd"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)

class Reason < ActiveRecord::Base

end