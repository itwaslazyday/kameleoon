const API_URL = "http://localhost:3100";

const getSites = async () => {
  const r = await fetch(`${API_URL}/sites`);
  const sites = await r.json();

  return sites;
};

const getTests = async () => {
  const r = await fetch(`${API_URL}/tests`);
  const tests = await r.json();

  return tests;
};

export { getTests, getSites };
