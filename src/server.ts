import express, { Router } from "express";
import path from 'path'; 
import childProcess from "child_process";

const app = express();
const router = Router();

router.post("/", async (req, res) => {
  try {
    childProcess.exec(
      `${path.join('c:', 'inetpub', 'wwwroot', 'NWsys-VPASP-Ecommerce', 'pull-script.sh')}`,
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
