import appConfigDev from "@/config/config.dev.js";
import appConfigProd from "@/config/config.prod.js";

let appConfig = {};
appConfig = process.env.NODE_ENV === "production" ? [...appConfig, ...appConfigProd] : [...appConfig, ...appConfigDev];

export default appConfig;