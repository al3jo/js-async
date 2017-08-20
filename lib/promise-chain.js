import Api from "./api";
import { CYAN } from "./ansi-colors";

// Promise Chain
export default function callbackHell() {
  const api = new Api();

  console.log(CYAN, "Promise chain");
  let server;
  api
    .getServer()
    .then(s => {
      server = s;
      return api.getVersions(server.id);
    })
    .then(versions => {
      let latest = versions[0];
      console.log(CYAN, "Promise chain", `${server.host} @ ${latest.version}`);
      return { server, latest };
    });
}
