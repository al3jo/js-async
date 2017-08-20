import Api from "./api";

// Async Await
export default async function asyncAwait() {
  const api = new Api();
  const server = await api.getServer();
  const versions = await api.getVersions(server.id);
  const latest = versions[0];
  console.log(`${server.host} @ ${latest.version}`);
  return { server, latest };
}
