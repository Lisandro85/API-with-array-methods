import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import routerUser from "./routes/usersRouter";

const PORT = process.env.PORT ?? 3001;

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", routerUser);

app.listen(3001, () => {
  console.log(`Server Up on port:${PORT} 🚀`);
});
