class LinksController < ApplicationController
  # before_action :set_links, only: %i[show edit update destroy]

  inertia_share flash: -> { flash.to_hash }

  def create
    @link = Link.new(link_params)
    if @link.save
      redirect_to root_path, notice: 'Link was successfully created.'
    else
      redirect_to root_path, inertia: { errors: @link.errors }
    end
  end

  private

  def set_links
    @links = Links.find(params[:id])
  end

  def serialize_link(link)
    link.as_json(only: %i[
      value1  value3  value5  value7  value9  link2  link4  link6  link8  link10
    ])
  end

  def link_params
    params.require(:link).permit(:value1, :value3, :value5, :value7, :value9, :link2, :link4, :link6, :link8, :link10)
  end
end
