import Api from "./api";

// Callback Hell
export default function callbackHell() {
  const api = new Api();

  api.getServer().then(function(server) {
    api.getVersions(server.id).then(function(versions) {
      let latest = versions[0];
      console.log(`${server.host} @ ${latest.version}`);
      return { server, latest };
    });
  });
}
