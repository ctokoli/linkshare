class DashboardController < ApplicationController

  def index
    links = Link.where(user_id: current_user.id)

    render inertia: 'Dashboard/links', props: {
      links: links.map do |link|
          Rails.logger.debug "links value #{link.inspect}"
        serialize_link(link)
      end
    }
  end

  private
  def serialize_link(link)
    link.as_json(only: %i[
                   id value link
                 ])
  end

end
