import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://abhishek:abhishek@cluster0.gikozxp.mongodb.net/mychatApp"
    )
    .then(() => {
      console.log("Sucessfully connected  to database");
    })
    .catch((err) => {
      console.log(`Error in connecting ${err}`);
    });
};

export default connectDatabase;
