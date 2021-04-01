import express, { Router } from "express";
import childProcess from "child_process";

const app = express();
const router = Router();

router.post("/", async (req, res) => {
  try {
    childProcess.exec(
      "cd ${FOLDER-LOCATION} && ${SCRIPT-NAME}",
      function (err, stdout, stderr) {
        if (err) {
          console.error(err);
          return res.status(500).send();
        }
        return res.status(200).send();
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
});

app.use(express.json());
app.use(router);

app.listen("3333", () => {
  console.log("server started on 3333");
});
