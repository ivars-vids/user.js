// ==UserScript==
// @name         DOJO YesWeHack no login
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Makes DOJO usable without login
// @author       Ivars Vids
// @include      https://dojo-yeswehack.com/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    let fetch = unsafeWindow.fetch;
    unsafeWindow.fetch = function(url, init) {
        if (url === '/_check_ip') {
            url = 'data:text/plain,596f75206c6f766520746f206861636b3f205265676973746572207769746820757321';
        }
        return fetch.call(unsafeWindow, url, init);
    };
})();
