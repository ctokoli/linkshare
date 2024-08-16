class LinksController < ApplicationController
  # before_action :set_links, only: %i[show edit update destroy]

  inertia_share flash: -> { flash.to_hash }

  def index
    links = Link.all
    render inertia: 'Dashboard/links', props: {
      links: links.map do |link|
        serialize_link(link)
      end
    }
  end

  def create
    @links = Link.new(link_params)
    if @links.save
      redirect_to link_path, notice: 'User was successfully created.'

    else
      redirect_to root_path, inertia: { errors: links.errors }
    end
  end

  private

  def set_links
    @links = Links.find(params[:id])
  end

  def serialize_link(link)
    link.as_json(only: %i[
      value link
    ])
  end

  def link_params
    params.require(:link).permit(:value, :link)
  end
end
