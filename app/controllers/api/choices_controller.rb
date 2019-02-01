class Api::ChoicesController < ApplicationController
  def create
    @choice = Choice.new(choice_params)
    @choice.question_id = params[:choice][:questionId]
    if @choice.save
      render :show
    else
      render json: @choice.errors.full_messages, status: 422
    end
  end

  def update
    @choice = Choice.find(params[:id])
    if @choice.update(choice_params)
      question = @choice.question

      render json: question, include: [:choices]
    else
      render json: @choice.errors.full_messages, status: 422
    end
  end

  def show
    @choice = Choice.find_by(id: params[:id])
    if(@choice)
      render :show
    else
      render json: ["choice not found"], status: 404
    end
  end

  def destroy
    @choice = Choice.find(params[:id])
    @choice.destroy
  end

  private

  def choice_params
    params.require(:choice).permit(:body, :question_id)
  end
end
