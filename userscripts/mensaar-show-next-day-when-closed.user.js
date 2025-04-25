// ==UserScript==
// @name         Show next day when Mensa has closed
// @namespace    Violentmonkey Scripts
// @match        https://mensaar.de/
// @grant        none
// @version      0.1.0
// @author       Alexander Ikonomou
// @description  25/04/2025, 15:32:45
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.3/waitForKeyElements.js
// ==/UserScript==

// eslint-disable-next-line no-undef
waitForKeyElements("div.all-counters-closed", showNextDay);

function showNextDay() {
  document.querySelector("div.active").nextSibling.click();
}
