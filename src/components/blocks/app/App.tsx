import { Route, Routes } from "react-router-dom";
import { AppRoute } from 'const';
import { JSX } from "react";
import MainPage from "pages/main/MainPage";
import TestPage from "pages/test/TestPage";
import useStore, { Context } from "hooks/useStore";

export default function App(): JSX.Element {

  const state = useStore();

  return (
    <Context.Provider value={state}>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route
            path={AppRoute.Finalize}
            element={<TestPage />}
          />
          <Route
            path={AppRoute.Results}
            element={<TestPage />}
          />
        </Route>
      </Routes>
    </Context.Provider>
  );
}
