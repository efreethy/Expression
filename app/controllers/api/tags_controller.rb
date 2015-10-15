class Api::TagsController < ApplicationController
  validates :name, presence: true
  validates :name, uniqueness: true

  def create

  end
end
