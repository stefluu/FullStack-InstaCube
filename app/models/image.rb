class Image < ApplicationRecord
  validates :user_id, :date, presence:true

  belongs_to :user
  has_one_attached :photo

end
