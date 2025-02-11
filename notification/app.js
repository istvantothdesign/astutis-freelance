if (document.body.id === "page-my-index") {
  const header = document.querySelector(
    ".page-context-header .page-header-headings",
  );
  if (header) {
    const message = document.createElement("p");
    message.innerHTML =
      "*Please note that the site will be unavailable on <strong>13th February</strong> during our upgrade.";
    header.appendChild(message);
  }
}
