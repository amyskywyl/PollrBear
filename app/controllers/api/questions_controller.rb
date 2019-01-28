class Api::QuestionsController < ApplicationController
  before_action :require_logged_in

  def create
    question_params[:next_id] = question_params[:next_id] == 'false' ? nil : question_params[:next_id]
    question_params[:prev_id] = question_params[:prev_id] == 'false' ? nil : question_params[:prev_id]
    @question = Question.new(question_params)
    @question.user_id = current_user.id
    group = Group.find(question_params[:group_id])
    @user = group.user
    @groups = @user.gorups.includes(:questions)
    head = group.head
    if @question.save
      if head != nil
        head.prev_id = question.id
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
    @group = Group.find(@question.group_id)
    if @question
      render :show
    else
      render json: @question.errors.full_messages, status: 404

  def update
    @question = Question.find(params[:id])
    @group = Group.find(@question.group_id)
    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update_order
    question_idx = params[:orderInfo][:index].to_i
    future_ord = params[:orderInfo][:future_ord]

    @question = Question.find(params[:orderInfo][:question_id])
    @prev_group = Group.find(@question.group_id)
    @next_group = Group.find(params[:orderInfo][:future_group].to_i)
    arr = [@question]
    unless @question.prev_id.nil?
      @prev_question = Question.find(@question.prev_id)
      arr << @prev_question
    end
    unless @question.next_id.nil?
      @next_question = Question.find(@question.next_id)
      arr << @next_question
    end
    if (question_idx - 1) >= 0
      @future_prev = Question.find(future_ord[question_idx - 1].to_i)
      arr << @future_prev
    end
    unless future_ord[question_idx + 1].nil?
      @future_next = Question.find(future_ord[question_idx + 1].to_i)
      arr << @future_next
    end

    update_related_questions

    begin
      Question.transaction do
        arr.each do |question|
          question.save!
        end
      end
      render :order
    rescue ActiveRecord::RecordInvalid
      render json: @question.errors.full_messages, status: 401
    end
  end

   def destroy
    @question = Question.find(params[:id])
    if @question.prev_id
      @prev_question = Question.find(@question.prev_id)
    end

    if @question.next_id
      @next_question = Question.find(@question.next_id)
    end

    if @prev_question
      @prev_question.next_id = @question.next_id
    end
    if @next_question
      @next_question.prev_id = @question.prev_id
    end

    begin
      Question.transaction do
        @question.destroy
        @prev_question.save if @prev_question
        @next_question.save if @next_question
      end
      @group = Group.find(@question.group_id)
      render :index
    rescue ActiveRecord::RecordInvalid
      render json: @question.errors.full_messages, status: 401
    end
  end

  private

  def question_params
    params.require(:question).permit(:group_id, :body, :question_type, :active, :prev_id, :next_id)
  end

  def update_related_questions
    @prev_question.next_id = @question.next_id if @prev_question
    @next_question.prev_id = @question.prev_id if @next_question

    @future_prev.next_id = @question.id if @future_prev
    @future_next.prev_id = @question.id if @future_next
    @future_next ? @question.next_id = @future_next.id : @question.next_id = nil
    @future_prev ? @question.prev_id = @future_prev.id : @question.prev_id = nil
    @question.group_id = params[:orderInfo][:future_group].to_i
  end

end
