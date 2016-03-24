"use strict";

//import agGrid from "ag-grid";
import d3 from "d3";
import Q from "q";
import _ from "lodash";

// TODO: move this to corresponding file
////import "./../styles/vendor/ag-grid.css";
////import "./../styles/vendor/theme-fresh.css";

import * as utils from "./utils";


export function setup() {
    return Q()
        .then(utils.propagateResult);
}
