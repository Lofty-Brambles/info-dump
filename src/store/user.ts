import { persistentAtom } from "@nanostores/persistent";
import { action, atom, task } from "nanostores";

export const isLoggedIn = atom<boolean>(false);
export const authToken = persistentAtom<string>("authToken", "");

export const setIsLoggedIn = action(
	isLoggedIn,
	"setIsLoggedIn",
	(store, val: boolean) => {
		store.set(val);
		return store.get();
	}
);

export const attemptLogin = async () => {
	await task(async () => {
		// login
	});
};

export const attemptLogOut = async () => {
	await task(async () => {
		// logout
	});
};
