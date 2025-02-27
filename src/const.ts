enum AppRoute {
  Test = "/test/:id",
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

export { AppRoute, Type, Status, SortTypes };
