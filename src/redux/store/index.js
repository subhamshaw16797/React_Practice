import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
// import { userReducer } from "../reducers/userDetailsReduces";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger, thunk];

export default createStore(
    rootReducer,
    // userReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);
