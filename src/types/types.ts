import { SortTypes, Status, Type } from "const";

interface Site {
  id: number;
  url: string;
}

interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
  link: string;
}

type State = {
  tests: Test[];
  sites: Site[];
  loading?: boolean;
  error?: null | Error;
  dispatch?: (action: Action) => void;
  sortType: SortTypes | "DEFAULT";
};

type Action = { type: "SET_TESTS"; payload: Test[] } | { type: "SET_SITES"; payload: Site[] } | { type: "SET_SORT"; payload: any };

export type { Site, Test, State, Action };
