import Api from "./api";
import p from "./util";
import { BG_BLACK, BG_MAGENTA, BLACK, MAGENTA } from "./ansi-colors";

// Callback Hell
export function callbackHell() {
  const api = new Api();

  p(BG_BLACK, MAGENTA, "Callback hell");
  api.getServer().then(function(server) {
    api.getVersions(server.id).then(function(versions) {
      let latest = versions[0];
      p(
        BG_BLACK,
        MAGENTA,
        "Callback hell",
        `${server.host} @ ${latest.version}`
      );
      return { server, latest };
    });
  });
}

export function callbackHellError() {
  const api = new Api();

  p(BG_MAGENTA, BLACK, "Callback hell");
  api
    .getServer()
    .then(function(server) {
      api
        .getVersions(server.id)
        .then(function(versions) {
          return api.throwError();
        })
        .catch(e => p(BG_MAGENTA, BLACK, "Error thrown"));
    })
    .catch(e => p(BG_MAGENTA, BLACK, "Error thrown"));
}
