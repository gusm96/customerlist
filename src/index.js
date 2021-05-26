import "dotenv/config";
import "./db";
import "./models/List";

import app from "./server";

const PORT = 5000;

const handleLitten = () => {
  console.log(`👍 Server Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleLitten);
