class Api::MessagesController < ApplicationController

  def index
    @newids = Message.where(id > params[:message_id]) || []
    @group = Group.find(params[:group_id])
  end

end
