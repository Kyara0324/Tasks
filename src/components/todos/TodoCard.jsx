function TodoCard({ todo, markAsDone, deleteTodo, isDone }) {
  return (
    <>
      {todo && (
        <div className="list__card__items">
          <div className="card__items__info">
            <div className="items__info__words">
              <span>{todo.title}</span>
              <p>{todo.content}</p>
            </div>

            <div className="items__info__btns">
              <button
                type="button"
                className="info__btns--del"
                onClick={deleteTodo}
              >
                삭제하기
              </button>

              {isDone ? ( // isDone이 true면 취소, false면 완료텍스트로 toggle
                <button
                  type="button"
                  className="info__btns--done"
                  onClick={markAsDone}
                >
                  취소
                </button>
              ) : (
                <button
                  type="button"
                  className="info__btns--done"
                  onClick={markAsDone}
                >
                  완료
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoCard;
