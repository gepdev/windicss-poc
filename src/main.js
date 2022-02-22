import App from "./App.svelte"
// eslint-disable-next-line import/no-unresolved
import "virtual:windi.css";
// eslint-disable-next-line import/no-unresolved
import "virtual:windi-devtools";
// import "./sass/main.scss";

const app = new App({
  target: document.getElementById('app')
})

export default app
