import { createStore } from "redux";
import reducers from "./reducers";

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState,
    window.devToolsExtension && process.env.NODE_ENV !== "production" ?
      window.devToolsExtension() : undefined
  );

  return store;
}
