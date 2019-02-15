class Api::AnswersController < ApplicationController
  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      Pusher.trigger('my-channel', 'my-event', {message: 'create an answer'})
      render 'api/answers/show'
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = Answer.where(choice_id: params[:choice_id]).first
    if @answer
      @answer.delete
      Pusher.trigger('my-channel', 'my-event', {})
      render 'api/answers/show'
    else
      render ['Nothing to delete'], status: 422
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:choice_id, :body)
  end
end
