"use strict";

require("./styles/vendor/bootstrap.min.css");
require("./styles/style.css");

import * as utils from "./scripts/utils";
import { setup } from "./scripts/setup";


setup()
    .then(MAIN_HANDLER)
    .catch(utils.errorHandler);
