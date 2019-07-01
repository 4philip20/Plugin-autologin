// ==UserScript==
// @name         New Userscript
// @namespace    https://reifen.leaseplan.ch/
// @version      0.2
// @description  try to take over the world!
// @author       Esa
// @match        https://reifen.leaseplan.ch/
// @grant        none
// @require      http://testintranet.esa.ch/plugin/esa.js
// ==/UserScript==

(function() {
    // LeasePlan Code
    document.getElementsByName("j_id2030916047_790d510c:j_id2030916047_790d50d1")[0].value = "3107741";
    document.getElementsByName("j_id2030916047_790d510c:j_id2030916047_790d50f7")[0].value = "GS-01";
    document.getElementsByName("j_id2030916047_790d510c:j_id2030916047_790d509d")[0].value = "Burgdorf_2019";

})();