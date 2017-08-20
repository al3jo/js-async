import {
  asyncAwait,
  asyncAwaitError,
  asyncAwaitParallel,
  asyncAwaitParallelError
} from "./async-await";
import { callbackHell, callbackHellError } from "./callback-hell";
import { promiseChain, promiseChainError } from "./promise-chain";

callbackHell();
callbackHellError();
promiseChain();
promiseChainError();
asyncAwait();
asyncAwaitError();
asyncAwaitParallel();
asyncAwaitParallelError();
