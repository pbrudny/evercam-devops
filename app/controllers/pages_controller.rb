class PagesController < ApplicationController
  before_filter :authenticate_user!
  skip_before_action :authenticate_user!, only: [:swagger]
  include SessionsHelper
  include ApplicationHelper
  layout "forswagger", only: [:swagger]

  def dev
    load_cameras_and_shares
    current_user
  end

  def add_android
    current_user
  end

  def location
    @user    = current_user
    @cameras = []
    begin
      @page    = (params[:page].to_i - 1) || 0
      @page = 0 if @page < 0

      output = get_evercam_api.get_public_cameras(thumbnail: true)

      @cameras = output[:cameras]
      @pages = output[:pages]

      @cameras.delete_if do |camera|
        (camera["short"].nil? || camera["short"]["jpg_url"].nil?)
      end
    rescue => error
      env["airbrake.error_id"] = notify_airbrake(error)
      Rails.logger.error "Exception caught fetching a list of public cameras.\nCause: #{error}\n" +
                           error.backtrace.join("\n")
      flash[:error] = "An error occurred fetching the public camera details. Please try "\
                      "again and, if the problem persists, contact support."
    end
  end


  def swagger
    response.headers["X-Frame-Options"] = "ALLOWALL"
    current_user
  end
end
