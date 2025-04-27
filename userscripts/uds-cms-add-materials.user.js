// ==UserScript==
// @name             CMS Navbar Materials
// @namespace        https://github.com/ikelax/userscripts
// @match            https://cms.sic.saarland/*
// @exclude-match    https://cms.sic.saarland/system/*
// @grant            none
// @version          0.3.1
// @author           Alexander Ikonomou
// @description      A userscript that adds a link to the materials of the current course to the navigation bar
// @license          MIT
// @supportURL       https://github.com/ikelax/userscripts/issues
// @updateURL        https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/master/userscripts/uds-cms-add-materials.user.js
// @downloadURL      https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/master/userscripts/uds-cms-add-materials.user.js
// @copyright        2025, Alexander Ikonomou (https://github.com/ikelax)
// @homepageURL      https://github.com/ikelax/userscripts
// @homepage         https://github.com/ikelax/userscripts
// @contributionURL  https://github.com/ikelax/userscripts
// @collaborator     ikelax
// @icon             https://cms.sic.saarland/system/theme/Sic/img/favicon.png
// ==/UserScript==

(() => {
  "use strict";

  const navbar = document.querySelector("#navbar-main");

  const lecture = window.location.pathname.replace(/^\/(.*?)(\/.*)/, "$1");

  if (navbar == null) {
    return;
  }

  const item = document.createElement("li");
  item.classList.add("nav-item");

  const link = document.createElement("a");
  link.href = `/${lecture}/materials`;
  link.classList.add("nav-link");

  const text = document.createTextNode("Materials");

  link.appendChild(text);
  item.appendChild(link);
  navbar.appendChild(item);
})();
