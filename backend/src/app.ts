import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());          // 모든 요청 허용
app.use(express.json());  // JSON 파싱

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(PORT, () => {
  console.log(` Server on http://localhost:${PORT}`);
});
