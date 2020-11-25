import swStorage from "./storage.js";

const prefix = "HX.icc.";

const storage = {
   setToken(value) {
      swStorage.set(prefix + "token", value);
   },
	getToken() {
		return swStorage.get(prefix + "token");
	},
	removeToken() {
		swStorage.remove(prefix + "token");
	}
};

export default storage;