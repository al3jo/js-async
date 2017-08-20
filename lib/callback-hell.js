import Api from "./api";
import { MAGENTA } from "./ansi-colors";

// Callback Hell
export default function callbackHell() {
  const api = new Api();

  console.log(MAGENTA, "Callback hell");
  api.getServer().then(function(server) {
    api.getVersions(server.id).then(function(versions) {
      let latest = versions[0];
      console.log(
        MAGENTA,
        "Callback hell",
        `${server.host} @ ${latest.version}`
      );
      return { server, latest };
    });
  });
}
