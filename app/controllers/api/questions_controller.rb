class Api::QuestionsController < ApplicationController
  before_action :require_logged_in

  def index
    @questions = Question.all
    render :index
  end

  def create
    @question = Question.new(question_params)
    @question.user = current_user
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
    if @question
      render :show
    else
      render json: @question.errors.full_messages, status: 404
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      if @question.active == true
        @question.user.questions.select{|question| question.id != @question.id}.map!{|question| question.active = false}
      end
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
      @questions = current_user.questions
      render :show
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def question_params
    params.require(:question).permit(:body, :question_type, :active, :group_id, :id)
  end
end
