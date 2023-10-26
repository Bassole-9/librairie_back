import { connect } from "mongoose";

export const connecterDb = async () => {
  const secret = process.env.mongoo_uri;
  console.log(secret);
  if (!secret) throw new Error("url n'existe pas");
  await connect(secret, {
    dbName: "librairie"
  });
};
