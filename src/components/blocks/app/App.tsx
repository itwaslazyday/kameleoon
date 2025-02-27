import { Route, Routes } from "react-router-dom";
import { AppRoute } from 'const';
import { JSX, useEffect, useReducer, createContext } from "react";
import { State, Action, Site, Test } from "types/types";
import { getSites, getTests } from "api";
import MainPage from "pages/main/MainPage";
import TestPage from "pages/test/TestPage";

const initialState: State = {
  tests: [],
  sites: [],
  loading: true,
  error: null,
  sortType: 'DEFAULT'
};

export const Context = createContext(initialState);

export default function App(): JSX.Element {

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "SET_SITES":
        return { ...state, sites: action.payload };
      case "SET_TESTS":
        return { 
          ...state, 
          tests: action.payload, 
          loading: false, 
          dispatch: (action: Action) => dispatch(action)
        };
      case "SET_SORT":
        return { 
          ...state,
          sortType: action.payload
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const sites = await getSites();
      if (sites) {
        dispatch({ type: "SET_SITES", payload: sites});
        const tests = await getTests();

        if (tests) {
          tests.forEach((item: Test) => { 
            item.link = sites.find((site: Site) => +site.id === item.siteId)?.url;
          });
          dispatch({ type: "SET_TESTS", payload: tests });
        }
      }
    })();
  }, []);

  return (
    <Context.Provider value={state}>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route
            path={AppRoute.Test}
            element={<TestPage />}
          />
        </Route>
      </Routes>
    </Context.Provider>
  );
}
