import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as crypto from "crypto";

export const createUser = functions.https.onCall(async (data) => {
  const { user, password, company, name } = data;
  const userNameRef = admin.database().ref(company).child("userName").child(user);
  await checkUser(userNameRef, company);
  const hash = crypto.createHash("sha256");
  hash.update(`${user}:${password}`);
  const userData = await admin.auth().createUser({ displayName: name });
  await Promise.all([
    userNameRef.set(true),
    admin.database().ref("userHash").child(userData.uid).set(hash.digest("base64")),
  ]);
});

/**
 * Check if the user name is available
 * @param user User name to be register
 * @param company Name of the company where the user will be register
 */
async function checkUser(userNameRef: admin.database.Reference, company: string) {
  const snap = await userNameRef.once("value");
  if (snap.exists()) {
    throw new functions.https.HttpsError("invalid-argument", "user exist");
  }
}
