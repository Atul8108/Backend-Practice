import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandlers";
import userRouter from "./user/userRouter";

const app = express();

app.use(express.json());

//Routes

//http methods

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

//user routes
app.use('/api/users',userRouter)

//global Error Hndler
app.use(globalErrorHandler);

export default app;
