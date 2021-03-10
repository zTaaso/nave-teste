const createElementWithAttrs = (tagName, attributes = {}) => {
  // Cria um objeto HTMLElement e adiciona os atributos passados por parâmetro ao mesmo
  const element = Object.assign(document.createElement(tagName), attributes);
  return element;
};

const createCards = (navers = []) => {
  const cards = navers.map((naver) => {
    const cardElement = createElementWithAttrs('div', { className: 'card' });

    const profileImg = createElementWithAttrs('img', {
      src: naver.image_url,
      alt: naver.name,
    });
    const name = createElementWithAttrs('b', {
      innerText: naver.name,
    });
    const role = createElementWithAttrs('span', {
      innerText: naver.job_role,
    });

    cardElement.append(profileImg, name, role);

    return cardElement;
  });

  return cards;
};

const renderNavers = (navers) => {
  const cardsContainer = document.querySelector('.cards');
  const cards = createCards(navers);

  cards.forEach((card) => cardsContainer.append(card));

  // Descomentar trecho de código abaixo caso queira repetir os cards
  // cards.forEach((card) => cardsContainer.append(card.cloneNode(true)));
  // cards.forEach((card) => cardsContainer.append(card.cloneNode(true)));
  // cards.forEach((card) => cardsContainer.append(card.cloneNode(true)));
};

export default renderNavers;
