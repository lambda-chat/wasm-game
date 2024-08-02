import init, { main_js } from "../pkg/wasm_puzzle.js";

init().then(() => {
  main_js();
}).catch(console.error);
