import { BG_DEFAULT, DEFAULT } from "./ansi-colors";

export default function p(bg, fg, msg) {
  console.log(bg, fg, msg, BG_DEFAULT, DEFAULT);
}
