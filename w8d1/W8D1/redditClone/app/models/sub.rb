# == Schema Information
#
# Table name: subs
#
#  id           :bigint           not null, primary key
#  description  :text             not null
#  title        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  moderator_id :integer          not null
#
# Indexes
#
#  index_subs_on_moderator_id  (moderator_id)
#
class Sub < ApplicationRecord

  validates :title, :description, presence: true
  validates :title, uniqueness: true

  belongs_to :moderator, 
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: :User


  has_many :posts,
    foreign_key: :sub_id,
    class_name: :Post
    
  has_many :associated_posts,
    foreign_key: :post_id,
    class_name: :PostSub


end
