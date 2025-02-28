enum AppRoute {
  Finalize = "/finalize/:id",
  Results = "/results/:id",
  Main = "/",
  NotFound = "*",
}

enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

enum SortTypes {
  NAME = "NAME",
  TYPE = "TYPE",
  STATUS = "STATUS",
  SITE = "SITE",
}

enum ProcessTypes {
  Finalize = "Finalize",
  Results = "Results",
}

export { AppRoute, Type, Status, SortTypes, ProcessTypes };
