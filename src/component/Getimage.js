function Getimage() {
  return fetch(`https://660a5b500f324a9a2884c26b.mockapi.io/items`)
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.description;
        const url = c?.image?.url;

        images.push({ title, url });
      });
      return images.slice(0, images.length); // remove the extra cats
    });
}
export default Getimage;
