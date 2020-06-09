const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();



const firebaseConfig = nextEnv({
  apiKey: NEXT_APP_FIREBASE_KEY,
  authDomain: NEXT_APP_FIREBASE_DOMAIN,
  databaseURL: NEXT_APP_FIREBASE_DATABASE,
  projectId: NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_APP_FIREBASE_SENDER_ID,
  appId: NEXT_APP_APP_ID,
  measurementId: NEXT_APP_MEASURENENT_ID
});

module.exports = firebaseConfig({
  NEXT_APP_FIREBASE_KEY,
  NEXT_APP_FIREBASE_DOMAIN,
  NEXT_APP_FIREBASE_DATABASE,
  NEXT_APP_FIREBASE_PROJECT_ID,
  NEXT_APP_FIREBASE_STORAGE_BUCKET,
  NEXT_APP_FIREBASE_SENDER_ID,
  NEXT_APP_APP_ID,
  NEXT_APP_MEASURENENT_ID,
});



