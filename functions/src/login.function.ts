import { database, auth } from "firebase-admin";
import { https } from "firebase-functions";
import * as crypto from "crypto";

export const login = https.onCall(async (data) => {
  const { user, password } = data;
  const hash = crypto.createHash("sha256");
  hash.update(`${user}:${password}`);
  const snap = await database().ref("userHash").orderByValue().equalTo(hash.digest("base64")).once("value");
  if (!snap.exists()) {
    throw new https.HttpsError("permission-denied", "invalid credentials");
  }
  const uid = Object.keys(snap.val())[0];
  return auth().createCustomToken(uid);
});
