import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDxzycVWR6sQhy2V3thdUyvKqrlyK2WUsQ",
	authDomain: "discord-clone-8a812.firebaseapp.com",
	databaseURL: "https://discord-clone-8a812.firebaseio.com",
	projectId: "discord-clone-8a812",
	storageBucket: "discord-clone-8a812.appspot.com",
	messagingSenderId: "393369005169",
	appId: "1:393369005169:web:5d2dd93500ea4065f93fd0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;