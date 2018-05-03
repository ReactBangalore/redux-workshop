import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { middleware as reduxPack } from "redux-pack";
import rootReducer from "./redux/reducers";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, reduxPack))
  );
  return store;
}
