import addDarkModeListener from './util/addDarkModeListener.js';
import fetchNavers from './util/fetchNavers.js';
import renderNavers from './util/renderNavers.js';

window.onload = async () => {
  addDarkModeListener();
  const navers = await fetchNavers();
  renderNavers(navers);
};
