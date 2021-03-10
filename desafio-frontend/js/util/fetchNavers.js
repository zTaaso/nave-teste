const fetchNavers = async () => {
  const api = 'https://my-json-server.typicode.com/naveteam/fake-api/navers';
  const response = await fetch(api);
  const navers = await response.json();

  return navers;
};

export default fetchNavers;
