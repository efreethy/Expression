class PagesController < ApplicationController
  before_filter :ensure_logged_in, only: [:home]

  def ensure_logged_in
    unless signed_in?
      redirect_to pages_front_url
    end
  end

  def home
  end

  def front
  end
end
