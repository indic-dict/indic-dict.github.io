
import handleIncludes from "./handleIncludes";
$( document ).ready(handleIncludes);

import {redirectToRandomPage, redirectToPage} from "./redirect";
// So that these can be used like module_main.default.redirectToPage(..).
export default {
    redirectToRandomPage: redirectToRandomPage,
    redirectToPage: redirectToPage
}

