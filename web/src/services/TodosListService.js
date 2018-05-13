import todoService from './todoService';
// import todosListDAO from '../dao/todosListDAO';


export default class TodosListService {
  constructor(todosListDAO) {
    this.todosListDAO = todosListDAO;
  }

  // eslint-disable-next-line no-unused-vars
  findTodoIndex(todoId) {
    // todo
  }

  /**
   * @param {Object} data
   * @param {string} data.title
   * @param {string} data.description
   */
  createTodoItem(data) {
    let todoId;

    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const todo = todoService.createTodo(data);
        todoId = todo.id;
        const result = [...todos, todo];
        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }

  /**
   * @param {string} todoId
   * @param {TodoChange} change
   */
  updateTodoItem(todoId, change) {
    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const index = this.todosListDAO.findTodoIndex(todoId, todos);
        const target = todos[index];
        const result = [...todos];

        result.splice(index, 1, todoService.updateTodo(change, target));

        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }

    // removeTodoItem(todoId) {
    //     return this.todosListDAO.getAllTodos()
    //         .then((todos) => {
    //             const index = this.todosListDAO.findTodoIndex(todoId, todos);
    //             const result = [...todos];
    //             const removedItems = result.splice(index, 1);
    //             return this.todosListDAO.saveAllTodos(result).then(() => removedItems.length);
    //         });
    // }


  /**
   * @param {string} todoId
   * @param {string} commentText
   */
  addItemComment(todoId, commentText) {
    this.updateTodoItem(todoId, { comment: commentText });
  }

  /**
   * @param {string} todoId
   */
  likeItem(todoId) {
    this.updateTodoItem(todoId, { isLiked: true });
  }
}
