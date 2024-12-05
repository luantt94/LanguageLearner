const express = require("express");
const app = express();

// Route chính
app.get("/", (req, res) => {
  res.send("Chào mừng bạn đến với ứng dụng Node.js và Express!");
});

// Server lắng nghe trên cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
