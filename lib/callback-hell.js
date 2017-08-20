import Api from "./api";

// Callback Hell
export default function callbackHell() {
  const api = new Api();

  console.log("Callback hell");
  api.getServer().then(function(server) {
    api.getVersions(server.id).then(function(versions) {
      let latest = versions[0];
      console.log("Callback hell", `${server.host} @ ${latest.version}`);
      return { server, latest };
    });
  });
}
