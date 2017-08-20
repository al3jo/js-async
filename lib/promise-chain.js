import Api from "./api";

// Promise Chain
export default function callbackHell() {
  const api = new Api();

  console.log("Promise chain");
  let server;
  api
    .getServer()
    .then(s => {
      server = s;
      return api.getVersions(server.id);
    })
    .then(versions => {
      let latest = versions[0];
      console.log("Promise chain", `${server.host} @ ${latest.version}`);
      return { server, latest };
    });
}
