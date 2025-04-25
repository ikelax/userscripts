// ==UserScript==
// @name           CMS Materials
// @namespace      Violentmonkey Scripts
// @match          https://cms.sic.saarland/*
// @exclude-match  https://cms.sic.saarland/system/*
// @grant          none
// @version        0.1.0
// @author         Alexander Ikonomou
// @description    14/04/2025, 17:27:34
// ==/UserScript==

() => {
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
};
