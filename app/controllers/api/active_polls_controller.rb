class Api::ActivePollsController < ApplicationController

  def create
    @active_poll = ActivePoll.new(active_poll_params)
    if @active_poll.save
      render 'api/active_polls/index'
    else
      render json: @active_poll.errors.full_messages, status: 422
    end
  end

  def update
    question = Question.find(params[:id])
    @active_poll = nil
    if question.active
      @active_poll = question.active_poll
      question.active = false
      question.active_poll.destroy!
      question.save!
      @active_poll = { id: 0, question_id: 0, user_id: 0 }
    else
      question.active = true
      question.save!
      if question.active == true
        question.user.questions.select{|ques| ques.id != question.id}.map! do |ques| 
          ques.active = false
          ques.save!
        end
      end
      ActivePoll.destroy_all
      @active_poll = ActivePoll.new
      @active_poll.user_id = current_user.id
      @active_poll.question_id = question.id
      unless @active_poll.save
        render json: @active_poll.errors.full_messages, status: 422
      end
    end
    Pusher.trigger('answer_channel', 'new-active', {
      message: 'active_polls active'
    })
    render 'api/active_polls/index'
  end

  def index
    user = User.find_by_username(params[:username] || current_user.username)
    @active_poll = user.active_poll
    if @active_poll
      render 'api/active_polls/index'
    else
      render json: ["User has no active question"]
    end
  end

  private

  def active_poll_params
    params.require(:active_polls).permit(:question_id)
  end

end
