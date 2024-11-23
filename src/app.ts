import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandlers";

const app = express();

//Routes

//http methods

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});




//global Error Hndler
app.use(globalErrorHandler);

export default app;
