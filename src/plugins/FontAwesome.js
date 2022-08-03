import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleExclamation);

export default (app) => {
  app.component("fa-icon", FontAwesomeIcon);
};
