class Api::GroupsController < ApplicationController
  before_action :require_logged_in

  def index
    @groups = current_user.groups
    render :index
  end

  def create
    @group = Group.new(group_params)
    @group.user_id = current_user.id
    if @group.save
      @groups = current_user.groups
      render :index
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      @groups = current_user.groups
      render :index
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])
    if @group.id == current_user.groups.first.id
      if @group.questions
        @group.questions.each do |question|
          question.destroy
        end
        @groups = current_user.groups
        render :index
      else
        render plain: "You didn't select anything"
      end
    elsif @group.destroy
      @groups = current_user.groups
      render :index
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def group_params
    params.require(:group).permit(:title)
  end
end
