const addDarkModeListener = () => {
  const darkModeCheck = document.querySelector('#darkmode');
  const html = document.querySelector('html');
  const logo = {
    img: document.querySelector('#logo'),
    white_src: '../../../assets/logo.png',
    dark_src:
      'https://nave.rs/static/a534b1a1b091cca710d559ef070e9711/3d1ac/logo-white.png',
  };

  darkModeCheck.addEventListener('click', () => {
    const isDarkModeOn = darkModeCheck.checked;
    if (isDarkModeOn) {
      logo.img.src = logo.dark_src;
      html.setAttribute('class', 'dark-mode');
      return;
    }

    html.removeAttribute('class');
    logo.img.src = logo.white_src;
  });
};

const fetchNavers = async () => {
  const api = 'https://my-json-server.typicode.com/naveteam/fake-api/navers';
  const response = await fetch(api);
  const navers = await response.json();

  console.log(navers);
};

window.onload = () => {
  addDarkModeListener();
  fetchNavers();
};
