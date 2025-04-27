// ==UserScript==
// @name             Mensaar Show Next Day
// @namespace        https://github.com/ikelax/userscripts
// @match            https://mensaar.de/
// @grant            none
// @version          0.2.1
// @author           Alexander Ikonomou
// @description      A userscript that switches to the meal plans for the next day when the canteen has already closed for today
// @license          MIT
// @supportURL       https://github.com/ikelax/userscripts/issues
// @updateURL        https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/main/userscripts/mensaar-show-next-day-when-closed.user.js
// @downloadURL      https://raw.githubusercontent.com/ikelax/userscripts/refs/heads/main/userscripts/mensaar-show-next-day-when-closed.user.js
// @copyright        2025, Alexander Ikonomou (https://github.com/ikelax/userscripts)
// @homepageURL      https://github.com/ikelax/userscripts
// @homepage         https://github.com/ikelax/userscripts
// @contributionURL  https://github.com/ikelax/userscripts
// @collaborator     ikelax
// @icon             https://mensaar.de/img/icon.png
// ==/UserScript==

waitForKeyElements("div.active", switchToNextDay);

function switchToNextDay(activeTab) {
  let activeTabDate = new Date(activeTab);
  let closeDate = new Date(
    activeTabDate.getFullYear(),
    activeTabDate.getMonth(),
    activeTabDate.getDay(),
    14,
    30,
  );

  let now = new Date();

  if (now - closeDate >= 0) {
    activeTab.nextSibling?.click();
  }
}

// The code was copied from https://github.com/CoeJoder/waitForKeyElements.js.
/**
 * A utility function for userscripts that detects and handles AJAXed content.
 *
 * @example
 * waitForKeyElements("div.comments", (element) => {
 *   element.innerHTML = "This text inserted by waitForKeyElements().";
 * });
 *
 * waitForKeyElements(() => {
 *   const iframe = document.querySelector('iframe');
 *   if (iframe) {
 *     const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
 *     return iframeDoc.querySelectorAll("div.comments");
 *   }
 *   return null;
 * }, callbackFunc);
 *
 * @param {(string|function)} selectorOrFunction - The selector string or function.
 * @param {function}          callback           - The callback function; takes a single DOM element as parameter.
 *                                                 If returns true, element will be processed again on subsequent iterations.
 * @param {boolean}           [waitOnce=true]    - Whether to stop after the first elements are found.
 * @param {number}            [interval=300]     - The time (ms) to wait between iterations.
 * @param {number}            [maxIntervals=-1]  - The max number of intervals to run (negative number for unlimited).
 */
function waitForKeyElements(
  selectorOrFunction,
  callback,
  waitOnce,
  interval,
  maxIntervals,
) {
  if (typeof waitOnce === "undefined") {
    waitOnce = true;
  }
  if (typeof interval === "undefined") {
    interval = 300;
  }
  if (typeof maxIntervals === "undefined") {
    maxIntervals = -1;
  }
  if (typeof waitForKeyElements.namespace === "undefined") {
    waitForKeyElements.namespace = Date.now().toString();
  }
  var targetNodes =
    typeof selectorOrFunction === "function"
      ? selectorOrFunction()
      : document.querySelectorAll(selectorOrFunction);

  var targetsFound = targetNodes && targetNodes.length > 0;
  if (targetsFound) {
    targetNodes.forEach(function (targetNode) {
      var attrAlreadyFound = `data-userscript-${waitForKeyElements.namespace}-alreadyFound`;
      var alreadyFound = targetNode.getAttribute(attrAlreadyFound) || false;
      if (!alreadyFound) {
        var cancelFound = callback(targetNode);
        if (cancelFound) {
          targetsFound = false;
        } else {
          targetNode.setAttribute(attrAlreadyFound, true);
        }
      }
    });
  }

  if (maxIntervals !== 0 && !(targetsFound && waitOnce)) {
    maxIntervals -= 1;
    setTimeout(function () {
      waitForKeyElements(
        selectorOrFunction,
        callback,
        waitOnce,
        interval,
        maxIntervals,
      );
    }, interval);
  }
}
