import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
library.add(faGoogle);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
