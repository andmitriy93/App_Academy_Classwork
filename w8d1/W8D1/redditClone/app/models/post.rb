# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  content    :text
#  title      :string           not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  sub_id     :integer          not null
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#  index_posts_on_sub_id     (sub_id)
#  index_posts_on_title      (title)
#
class Post < ApplicationRecord
  validates :title, presence: true

  belongs_to :sub, 
    foreign_key: :sub_id,
    class_name: :Sub

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :associated_subs,
    foreign_key: :sub_id,
    class_name: :PostSub


end
