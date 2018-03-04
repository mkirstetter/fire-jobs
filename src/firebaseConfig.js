import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDYQv8C6BjWZm-dPjkTrb8czu46X2HiWi4',
  authDomain: 'fire-jobs-7def7.firebaseapp.com',
  databaseURL: 'https://fire-jobs-7def7.firebaseio.com',
  projectId: 'fire-jobs-7def7',
  storageBucket: '',
  messagingSenderId: '630021554258',
};

export const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbJobsRef = db.ref('jobs');
