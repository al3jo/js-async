import Api from "./api";
import p from "./util";
import { BG_BLACK, BG_CYAN, BLACK, CYAN } from "./ansi-colors";

// Promise Chain
export function promiseChain() {
  const api = new Api();

  p(BG_BLACK, CYAN, "Promise chain");
  let server;
  api
    .getServer()
    .then(s => {
      server = s;
      return api.getVersions(server.id);
    })
    .then(versions => {
      let latest = versions[0];
      p(BG_BLACK, CYAN, "Promise chain", `${server.host} @ ${latest.version}`);
      return { server, latest };
    });
}

export function promiseChainError() {
  const api = new Api();

  p(BG_CYAN, BLACK, "Promise chain error");
  let server;
  api
    .getServer()
    .then(s => {
      server = s;
      return api.getVersions(server.id);
    })
    .then(versions => {
      return api.throwError();
    })
    .catch(e => {
      p(BG_CYAN, BLACK, "Error thrown");
    });
}
