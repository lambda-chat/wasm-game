import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import init, { greet } from '../pkg'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button class="greet" type="button">Greet</button> <!-- Added greet button -->
    </div>
  </div>
`

init();

const greetButton = document.querySelector<HTMLButtonElement>('.greet')!;
greetButton.addEventListener('click', () => {
  greet()
});
