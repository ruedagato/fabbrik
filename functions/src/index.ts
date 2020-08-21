import * as admin from "firebase-admin";
export * from "./createUser.function";
export * from "./login.function";

const certificate = {
  type: "service_account",
  project_id: "fabbrik-5e7c4",
  private_key_id: "b3ce29a2448b650df65e345041b697403d7f2485",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDA8QpU8HIPr6J4\nvKaP3zUGx+DqnDuMdVj+c67aUsN9sNM8/zZzP8oh+FVu7auE+cxMqJW79H/2Mp2+\n+3OKB+46LZYUe64wBThhYOQhogPNedtvaNDxcAD8KKLC3UJGs8jaZpKFp0Vt76BR\na9YeD33XgTjHPDUo6H1i07ZviGQ8FeUhJeyOPdsxVqE8nubjWgI8Q4/0lNadrHU1\nwCEc+9i8RojUZvqq6PtecMN1lhrhBIZRLiPgwEt0YVEXC9613kHh5Im87TeTlxn6\nFaxELWuF0JkBDHBQD5sLIsADLMWR2RUfTEHhTBtXyfWnmDq1JUDJlwaS3F0cPL3V\njSokpUJRAgMBAAECggEAAZEjlJeEUaDLSMA9eQ8mwtiWOMmOiUA9uglN+vtvl4J7\nYLQw6MQ0m8yEwxseiLyvnlLDLozYijMUiWPI5y7TzjinDqEHg9/S+qV7DNPgRIew\nEspO4hsXAvVAhyUdX+4fXDi3iWrXm0I2MtsVmNZm3vxvbdzNELk8pXQTN/orWDqQ\nrBHfIRs7de7QyGylLacW5GF+bYxokFDRKo47mUg7eq4o8RjUAPc4M+fKCya13vGN\n/Rq/tDClDDV5enHIrMa/nJolu38HFv0zC8vdTFSrPiSRPglogc+V5NcZxYP4p4qG\nmyAIDgBiL3m2H/TMto7PtKJt30r1QIOP8CO34mmqnQKBgQDwa8oBoD3QcCWymhLv\nJwy82rpdQWU9yRyQ6JEC6JF6nushzxpfMqF3JAW+Wkzpj468VrYHYKiL+XfOlBCC\nZ9ftIrgtcvjzC+LYtA/9W2dWl0GoE33b4Jbhpxc5aqljD1Ah0z53UyKbIiCe0cPV\nFepRWZUeO+J6186/ZqPrz4RghQKBgQDNcaP37TmbVDy7iTW0A9awSt1XO9yx2oLq\nA6SkgqfOlcZcb5XoZ7LQSF7HkfcOIf/cqPMX1xoopN3gV1PNi78zRT3BWGDtWE8c\n13DGgOYICTlDH/yz1YOwKu5+PjaWVEZDqvsRH3JmLzfHyMJmK+d6tNey2DM4A9Pd\nJhaQZXUKXQKBgDXR+2u3wn65zEaaJSjyVfClClk7/X0CW2m5FlVPWNnZX4u3ABFV\nlT3Fi5+cOWGDqJFS2/b01WZYV1CgZr26n2TPg+lwtng6LfMTBA1Ue+Kvg5wrmN4y\n/bPQIuvQi9DIKckYsAAoVTPjROgozy0Rdd32LuKQx1d2nirMwF9Wmiy9AoGBAIW8\nYka0UHnC3j4eVa03inv8YBW3TDUiz3HSqUzGGMKsURI/OVCuoIJhegFkDXVPwKU9\n/fEY/1hR6nVto4n8XJzdiBPimkYm5Gkb/bfalOPKTVJa8j+G0FDPwazAhvxZI9xM\n418EH45RUnhlQdcM4YTJUFiF0OG37CTb9HhO81+pAoGACKFam3PivV7lHL7HyY2w\ni5MzYp75/btKWKFxuroDhlD7Mx9fF05aTSek+PdfE55cJ6frH7Owkd5Ss9Gp/lBt\nUk2Y1+/lefrLbTVA+cSop6IDU4cBt44FbKbTN/ZbtCnipPsZ113bRAQjjlmzyMdU\nuykK+PvxMzwdBxw26xIM9M4=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-dh0sj@fabbrik-5e7c4.iam.gserviceaccount.com",
  client_id: "100646495979984693022",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dh0sj%40fabbrik-5e7c4.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(certificate as any),
  databaseURL: "https://fabbrik-5e7c4.firebaseio.com",
});
