import Api from "./api";

// Async Await
async function asyncAwait() {
  console.log("Async await");
  const api = new Api();
  const server = await api.getServer();
  const versions = await api.getVersions(server.id);
  const latest = versions[0];
  console.log("Async await", `${server.host} @ ${latest.version}`);
  return { server, latest };
}

// Async Await Parallel
async function asyncAwaitParallel() {
  console.log("Async await parallel");
  const api = new Api();
  const server = await api.getServer();
  const versions = await api.getVersions(server.id);
  const promises = versions.map(({ version }) => api.getVersionCount(version));
  const count = await Promise.all(promises);
  console.log("Async await parallel", count);
}

export { asyncAwait, asyncAwaitParallel };
