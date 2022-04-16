console.log("Hello World");

async function geniusSearch(event) {
  event.preventDefault();
  const searchValue = document.getElementById("search").value;
  sParameter = encodeURIComponent(searchValue.trim());
  const searchUrl = `https://genius.com/search?q=${sParameter}`;
  const response = await fetch(searchUrl, {
    headers: {
      mode: "no-cors",

      Authentication:
        "Bearer xAX6kOkO7h-32Gdwa0Q1g3QzUjs5BfsOs-fmv1FsX98XFVp3rXJB7iwGIfBpZxdlMJ-AQ_nZmd4PjuvMi7jSZg",
    },
  });
  const data = await response.json();
  console.log(data);
  return true;
}
