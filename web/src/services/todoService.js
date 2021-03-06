import { ACCOUNT_ID } from '../constants';
import { guid } from '../utils';
// import { data } from './components/form/form'

export default {
  createTodo: (data) => {
      const now = new Date();
      return {
          comment: null,
          createdDate: now,
          createdByUserId: ACCOUNT_ID,
          id: guid(),
          isLiked: false,
          lastUpdateDate: now,
          lastUpdateByUserId: ACCOUNT_ID,
          ...data,
      };
  },

  updateTodo: (change, todo) => ({
    ...todo,
    ...change,
    lastUpdateDate: new Date(),
    lastUpdateByUserId: ACCOUNT_ID,
    createdDate: todo.createdDate,
    createdByUserId: todo.createdByUserId,
  }),
};
