import './static.js';

import('./dynamic.js').then(({ load }) => {
  const btn = app.appendChild(document.createElement('button'));
  btn.innerText = 'Trigger dynamic load of static.js';
  btn.onclick = async () => {
    await load();
    const h2 = app.appendChild(document.createElement('h2'));
    h2.innerText = 'Background should still be green!';
  };
});
