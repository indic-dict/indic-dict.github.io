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

$( document ).ready(function() {
    if (pageSource == "shabda-details.md") {
        shabdaId = "अ";
        if (getQueryVariable("shabda")) {
            shabdaId = getQueryVariable("shabda");
        }
    }
});


import handleIncludes from "./handleIncludes";
$( document ).ready(handleIncludes);

import {redirectToRandomPage, redirectToPage} from "./redirect";
// So that these can be used like module_main.default.redirectToPage(..).
export default {
    redirectToRandomPage: redirectToRandomPage,
    redirectToPage: redirectToPage
}

