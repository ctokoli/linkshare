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
    link_params.each do |selection|
      @links = Link.new(selection)
      if @links.save
        Rails.logger.debug 'Value Saved into Database'
      else
        redirect_to root_path, inertia: { errors: links.errors }
      end
    end
    redirect_to link_path, notice: 'Link was successfully created.'
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
    params.require(:link).map do |link|
      permitted = link.permit(:value, :link)
      permitted
    end
  end
end
