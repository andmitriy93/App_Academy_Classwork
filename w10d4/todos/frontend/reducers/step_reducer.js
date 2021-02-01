import RECEIVE_STEPS from "../actions/step_actions";
import RECEIVE_STEP from "../actions/step_actions";
import REMOVE_STEP from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState;

  switch (action.type) {
    case RECEIVE_STEPS:
      nextState = Object.assign({}, state);
      action.steps.forEach((step) => {
        [(action.step.id = step)];
      });
      return nextState;

    case RECEIVE_STEP:
      nextState = Object.assign({}, state);
      return (nextState[action.step.id] = action.step);

    case REMOVE_STEP:
      nextState = Object.assign({}, state);
      delete nextState[action.step.id];
      return nextState;

    default:
      return state;
  }
};

export default stepsReducer;