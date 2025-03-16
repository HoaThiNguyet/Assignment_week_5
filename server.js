// Import Express
const express = require("express");

// Khởi tạo ứng dụng Express
const app = express();

// Cấu hình cổng
const PORT = 3000;

// Định nghĩa một route đơn giản
app.get("/", (req, res) => {
    res.send("Hello, Users Management API is running!");
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
