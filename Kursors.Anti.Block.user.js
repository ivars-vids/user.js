// ==UserScript==
// @name         Kursors.lv Anti-AdBlock
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Kursors.lv Anti-AdBlock
// @author       Ivars Vids
// @match        https://kursors.lv/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    unsafeWindow.eval = function(){};
    Object.defineProperty(unsafeWindow, 'td_ad_background_click_link', {
        get() { return undefined; }
    });
    document.addEventListener("DOMContentLoaded", function(){
        document.body.className = document.body.className.replace('td-background-link','')
        document.body.style.background = 'initial';
    }, false);
})();
