class Age < ApplicationRecord
  has_and_belongs_to_many :gifts
end
