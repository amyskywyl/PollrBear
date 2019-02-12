class Api::ChoicesController < ApplicationController
  def create
    fail = [];
    params["choices"].values.each do |choice_in|
      @choice = Choice.new(choice_in)
      @choice.question_id = params[:questionId]
      if @choice.save
        next
      else
        fail << @choice
      end
    end
    if fail.length >= 1
      render json: @choice.errors.full_messages, status: 422
    else
      render :show
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
