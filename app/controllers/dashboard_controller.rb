class DashboardController < ApplicationController

  def index
    links = Link.all
    render inertia: 'Dashboard/data', props: {
      links: links.map do |link|
        serialize_link(link)
      end
    }
  end

  private
  def serialize_link(link)
    link.as_json(only: %i[
      value1  value3  value5  value7  value9  link2  link4  link6  link8  link10
    ])
  end
end
