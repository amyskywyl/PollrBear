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
    # @question = User.find_by_username(params[:username]).questions.where(active: true)
    @question = Question.find(params[:id])
    if @question
      if @question[:active] == true || current_user.questions.find_by(id: params[:id])
        render :show
      else
        render json: {question: {id: params[:id], unaccessible: true}}
      end
    else
      render json: ["question not found"], status: 404
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      render 'api/questions/show'
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
