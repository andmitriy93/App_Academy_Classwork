require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

# users questions question_follows replies question_likes
class User

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users")
        data.map { |datum| User.new(datum) }
    end
    
    def self.find_by_id(id)
        user = QuestionsDatabase.instance.execute(<<-SQL, id)
          SELECT
             *
          FROM
             users
          WHERE
             id = ?
        SQL
        return nil unless user.length > 0
    
        User.new(user.first) # user is stored in an array!
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end
end