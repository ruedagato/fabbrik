import * as firebase from "firebase/app"
import "firebase/database"

export const userNameRef = (company:string) => firebase.database().ref('userName').child(company)