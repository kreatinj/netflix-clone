import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import searchWords from "../data/search-words.json" with { type: "json" };

const app = express();
const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use(cors());          // 모든 요청 허용
app.use(express.json());  // JSON 파싱

app.get("/api/search", (req, res) => {
  const q = req.query.q?.toString().toLowerCase() || "";
  const items = searchWords.filter(word => word.split(" ").some(part => part.toLowerCase().startsWith(q)));
  res.json({ items, total: items.length });
});

app.listen(PORT, () => {
  console.log(` Server on http://localhost:${PORT}`);
});
