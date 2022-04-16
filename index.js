console.log("Hello World");

async function geniusSearch(event) {
  event.preventDefault();
  const searchValue = document.getElementById("search").value;
  sParameter = encodeURIComponent(searchValue.trim());
  const searchUrl = `https://api.genius.com/artists/16775`;
  const response = await fetch(searchUrl, {
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
      Authorization:
        "Bearer JaCSoPYc_QdpfOK7xRTmopHP1Im6B-NtzF_o-4VxlPNo1dOcoI3puM7ZlnF4zIXS",
    },
  });
  const data = await response.json();
  console.log(data);
  return true;
}
