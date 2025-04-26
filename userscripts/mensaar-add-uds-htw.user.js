// ==UserScript==
// @name             Mensaar Navbar UdS HTW
// @namespace        https://github.com/ikelax/userscripts
// @match            https://mensaar.de/
// @grant            none
// @version          0.3.0
// @author           Alexander Ikonomou
// @description      A userscript that adds links to the meal plans of the UdS and HTW to the navigation bar
// @license          MIT
// @supportURL       https://github.com/ikelax/userscripts/issues
// @updateURL        https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/main/userscripts/mensaar-add-uds-htw.user.js
// @downloadURL      https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/main/userscripts/mensaar-add-uds-htw.user.js
// @copyright        2025, Alexander Ikonomou (https://github.com/ikelax/userscripts)
// @homepageURL      https://github.com/ikelax/userscripts
// @homepage         https://github.com/ikelax/userscripts
// @contributionURL  https://github.com/ikelax/userscripts
// @collaborator     ikelax
// @icon             https://mensaar.de/img/icon.png
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
