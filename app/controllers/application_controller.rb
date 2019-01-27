class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end
  
  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  def group_ord(group) #technically input can be a task or a column.
    all_questions = group.questions
    question_hash = {}
    head, tail = nil
    all_questions.length.times do |idx|
      current_question = all_questions[idx]
      question_hash[current_question.id] = current_question
      head = current_question if current_question.prev_id == nil
      tail = current_question if current_question.next_id == nil
    end
    return [] if head == nil

    ord = [head.id]

    until ord[-1] == tail.id
      last = question_hash[ord[-1]]
      next_question = question_hash[last.next_id]
      if next_question != nil
        question_hash[next_question.id] = next_question
        ord << next_question.id
      end
    end

    ord
  end
end
