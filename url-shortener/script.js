const form = document.querySelector("form");
const shortUrlParagraph = document.getElementById("short");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const longUrl = form.elements["long"].value;
  
  if (longUrl.trim() === "") {
    shortUrlParagraph.textContent = "Error: Please enter a URL";
    return;
  }

  const shortUrl = generateShortUrl();

  shortUrlParagraph.textContent = `Short URL: ${shortUrl}`;

  localStorage.setItem(shortUrl, longUrl);

  form.reset();
});

function generateShortUrl() {
  let randomString = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  if (localStorage.getItem(randomString) === null) {
    return randomString;
  } else {
    return generateShortUrl();
  }
}

const shortUrl = window.location.pathname.substring(1); 
const longUrl = localStorage.getItem(shortUrl); 

if (longUrl) {
  // Display the long URL
  console.log(`Long URL: ${longUrl}`);
} else {
  
  console.log(`Short URL ${shortUrl} does not exist`);
}
