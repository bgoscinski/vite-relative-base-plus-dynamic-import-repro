import './dynamic.css';

export const load = async () => {
  await import('./static.js');
};
