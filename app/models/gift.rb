class Gift < ApplicationRecord
  has_and_belongs_to_many :ages
  belongs_to :user
end
