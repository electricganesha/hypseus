import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount.serviceAccountKey),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
