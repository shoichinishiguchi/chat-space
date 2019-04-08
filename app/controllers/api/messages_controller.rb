class Api::MessagesController < ApplicationController

  def index
    @messages = Message.where('id > ?',params[:id]).where('group_id = ?',params[:group_id])
    @group = Group.find(params[:group_id])
    respond_to do |format|
        format.html {
          redirect_to group_messages_path(@group), notice: 'メッセージが送信されましたよ'
        }
        format.json
    end
  end

end
