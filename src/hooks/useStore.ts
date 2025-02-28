import { useEffect, useReducer, createContext } from "react";
import { State, Action, Site, Test } from "types/types";
import { getSites, getTests } from "api";

const initialState: State = {
  tests: [],
  sites: [],
  loading: true,
  error: null,
  sortType: "DEFAULT",
};

export const Context = createContext(initialState);

export default function useStore() {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "SET_SITES":
        return { ...state, sites: action.payload };
      case "SET_TESTS":
        return {
          ...state,
          tests: action.payload,
          loading: false,
          dispatch: (action: Action) => dispatch(action),
        };
      case "SET_SORT":
        return {
          ...state,
          sortType: action.payload,
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const sites = await getSites();

        if (sites) {
          dispatch({ type: "SET_SITES", payload: sites });
          const tests = await getTests();

          if (tests) {
            tests.forEach((item: Test) => {
              item.link = sites.find((site: Site) => +site.id === item.siteId)?.url;
            });
            dispatch({ type: "SET_TESTS", payload: tests });
          }
        }
      } catch (error) {
        console.error((error as Error).message || "Error");
        dispatch({ type: "SET_ERROR", payload: error as Error });
      } finally {
        /*  */
      }
    })();
  }, []);

  return state;
}
