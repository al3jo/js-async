import Api from "./api";
import p from "./util";
import {
  BG_BLACK,
  BG_GREEN,
  BG_YELLOW,
  BLACK,
  GREEN,
  YELLOW
} from "./ansi-colors";

// Async Await
async function asyncAwait() {
  p(BG_BLACK, YELLOW, "Async await");
  const api = new Api();
  const server = await api.getServer();
  const versions = await api.getVersions(server.id);
  const latest = versions[0];
  p(BG_BLACK, YELLOW, "Async await", `${server.host} @ ${latest.version}`);
  return { server, latest };
}

async function asyncAwaitError() {
  try {
    p(BG_YELLOW, BLACK, "Async await error");
    const api = new Api();
    const server = await api.getServer();
    const versions = await api.throwError();
    // the rest of the code wont execute...
    return { server, latest };
  } catch (e) {
    p(BG_YELLOW, BLACK, "Error thrown");
  }
}

// Async Await Parallel
async function asyncAwaitParallel() {
  p(BG_BLACK, GREEN, "Async await parallel");
  const api = new Api();
  const server = await api.getServer();
  const versions = await api.getVersions(server.id);
  const promises = versions.map(({ version }) => api.getVersionCount(version));
  const count = await Promise.all(promises);
  p(BG_BLACK, GREEN, "Async await parallel", count);
}

async function asyncAwaitParallelError() {
  try {
    p(BG_GREEN, BLACK, "Async await parallel error");
    const api = new Api();
    const server = await api.getServer();
    const versions = await api.getVersions(server.id);
    const promises = versions.map(({ version }) => api.throwError());
    const count = await Promise.all(promises);
    p(BG_GREEN, BLACK, "Async await parallel error", count);
  } catch (e) {
    p(BG_GREEN, BLACK, "Error thrown");
  }
}

export {
  asyncAwait,
  asyncAwaitError,
  asyncAwaitParallel,
  asyncAwaitParallelError
};
