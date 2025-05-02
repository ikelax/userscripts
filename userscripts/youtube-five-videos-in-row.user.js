// ==UserScript==
// @name             YouTube Five Videos in Row
// @namespace        https://github.com/ikelax/userscripts
// @match            https://www.youtube.com/
// @grant            none
// @version          0.1.0
// @author           Alexander Ikonomou
// @description      A userscript that changes the style of YouTube's homepage such that five videos are shown in a row instead of three
// @license          MIT
// @supportURL       https://github.com/ikelax/userscripts/issues
// @updateURL        https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/master/userscripts/youtube-five-videos-in-row.user.js
// @downloadURL      https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/master/userscripts/youtube-five-videos-in-row.user.js
// @copyright        2025, Alexander Ikonomou (https://github.com/ikelax)
// @homepageURL      https://github.com/ikelax/userscripts
// @homepage         https://github.com/ikelax/userscripts
// @contributionURL  https://github.com/ikelax/userscripts
// @collaborator     ikelax
// @icon             https://img.icons8.com/bubbles/100/youtube-squared.png
// @grant            GM_addStyle
// @run-at           document-start
// ==/UserScript==

(() => {
  "use strict";

  GM_addStyle(
    `
      div {
        --ytd-rich-grid-items-per-row: 5 !important;
        --ytd-rich-grid-posts-per-row: 5 !important;
    }
    `,
  );
})();
