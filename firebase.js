import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
const firebaseConfig = {
  // Bổ sung firebase config cá nhân để dự án hoạt động.
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const subscriptions = [];
