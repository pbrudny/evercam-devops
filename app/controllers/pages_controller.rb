class PagesController < ApplicationController
  before_filter :authenticate_user!
  skip_before_action :authenticate_user!, only: [:swagger]
  include SessionsHelper
  include ApplicationHelper
  layout "forswagger", only: [:swagger]

  def dev
    current_user
  end

  def add_android
    current_user
  end

  def widgets
    current_user
  end

  def widgets_new
    current_user
    load_cameras_and_shares
  end

  def swagger
    response.headers["X-Frame-Options"] = "ALLOWALL"
    current_user
  end
end