// ==UserScript==
// @name         Mensaar
// @namespace    Violentmonkey Scripts
// @match        https://mensaar.de/
// @grant        none
// @version      0.2.0
// @author       Alexander Ikonomou
// @description  13/04/2025, 23:29:17
// ==/UserScript==

(() => {
  "use strict";

  const navbar = document.querySelector('[class="mr-auto navbar-nav"]');
  const mensaarUrl = "https://mensaar.de/#/menu/";

  addMensa("UdS", "sb");
  addMensa("HTW", "htwcas");

  if (navbar != null) {
    return;
  }

  function addMensa(title, location) {
    const mensa = document.createElement("a");

    var titleNode = document.createTextNode(title);
    mensa.appendChild(titleNode);

    // Just for consistency
    mensa.href = mensaarUrl + location;
    mensa.classList.add("nav-link", "active");
    mensa.addEventListener("click", () => goToMenu(location));

    navbar.appendChild(mensa);
  }

  function goToMenu(location) {
    window.location.href = mensaarUrl + location;
    window.location.reload();
  }
})();
