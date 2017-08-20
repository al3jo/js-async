import Api from "./api";

// Promise Chain
export default function callbackHell() {
  const api = new Api();

  api
    .getServer()
    .then(server => {
      return api.getVersions(server.id);
    })
    .then(versions => {
      let latest = versions[0];
      console.log(`${server.host} @ ${latest.version}`);
      return { server, latest };
    });
}
