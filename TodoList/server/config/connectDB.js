// Import the required modules
import mongoose from "mongoose";

const connectDB = () => {
  const mongoURI =
    "mongodb+srv://rishi:vQKWGLzbNMHG94uF@cluster0.0re099s.mongodb.net/?retryWrites=true&w=majority";
  // Create a connection to the MongoDB Atlas cluster
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Get the default connection
  const db = mongoose.connection;

  // Event handlers for the connection
  db.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  db.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });

  db.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });
};

// Export the MongoDB connection
export default connectDB;
