import RECEIVE_TODOS from '../actions/todo_actions';
import RECEIVE_TODO from '../actions/todo_actions';

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

//   action.todo = { id: 3, title: "study", body: "js", done: false}
  
  const todosReducer = (state = initialState, action) => {
      Object.freeze(state);
      const newState = {};

        switch(action.type) {
            case RECEIVE_TODOS:
                //todos is an array
                //itterate throught it and assign 
                action.todos.forEach(todo => {
                    newState[todo.id] = todo;
                });
                return newState;
            case RECEIVE_TODO:

                newState[action.todo.id] = action.todo;
                return [...state, newState]
            default: 
                return state;
            }
  };



export default todosReducer;