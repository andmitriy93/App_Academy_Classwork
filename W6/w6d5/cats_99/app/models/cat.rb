require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
     
    def age
        time_ago_in_words(birth_date)
    end

    validates_inclusion_of :color, :in => %w(  Grey Black White  Brown Orange)
    validates_inclusion_of :sex, in => %w( M F)
    validates :birth_date, :color, :name, :sex, presence: true
end
# def age
#     time_ago_in_words(birth_date)
#   end