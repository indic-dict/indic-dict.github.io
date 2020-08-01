function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function loadShabdaDetailsHandler() {
    let shabda = $("#shabdaSearchInputBox").val();
    window.location = baseURL + `/shabda-details?shabda=${shabda}`;
}

function setCanonicalUrl() {
    // Set canonical URL so that Google does not exclude this page from the index. See https://github.com/ashtadhyayi/ashtadhyayi.github.io/issues/11 .
    var link = !!document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']") : document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', location.protocol + '//' + location.host + "/shabda-details/?shabda=" + shabdaId);
    document.head.appendChild(link);
}


import handleIncludes from "./handleIncludes";

$( document ).ready(function() {
    if (pageSource.endsWith("shabda-details.md")) {
        shabdaId = "अ";
        if (getQueryVariable("shabda")) {
            shabdaId = getQueryVariable("shabda");
        }
    }
    setCanonicalUrl();
    document.getElementById("shabdaSearchInputBox").value = shabdaId
    console.log(shabdaId);
    $("#shabdaSearchInputBox").change(loadShabdaDetailsHandler);
    handleIncludes();
});

import {redirectToRandomPage, redirectToPage} from "./redirect";
// So that these can be used like module_main.default.redirectToPage(..).
export default {
    redirectToRandomPage: redirectToRandomPage,
    redirectToPage: redirectToPage
}

