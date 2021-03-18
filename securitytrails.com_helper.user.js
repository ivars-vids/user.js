// ==UserScript==
// @name         securitytrails.com SurfaceBrowser helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        https://securitytrails.com/app/sb/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        [...document.getElementsByClassName('link')].forEach(l => {
            if (!(l.nextSibling && l.nextSibling.className === 'userscript')) {
                var a = document.createElement('a');
                a.innerText = ' [link]';
                a.href = '//' + l.innerText;
                a.target = '_blank';
                a.rel='oopener noreferrer';
                a.className = 'userscript';
                l.after(a);
            }
        });
    }, 500);
})();
