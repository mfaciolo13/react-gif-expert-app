export const getGifs = async (category) => {
  const apiKey = "Z7nIgZwi4EtFZSiSKptpFWBYbg2hE6W4";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id: id,
    title: title,
    url: images?.downsized_medium.url,
  }));
  return gifs;
};
