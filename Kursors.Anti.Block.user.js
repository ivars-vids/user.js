// ==UserScript==
// @name         Kursors.lv Anti-AdBlock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Kursors.lv Anti-AdBlock
// @author       Ivars Vids
// @match        https://kursors.lv/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    unsafeWindow.eval = function(){};
})();
