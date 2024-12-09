require('dotenv').config()
const mongoose = require('mongoose');

const dbState = [
  { value: 0, label: "disconnected" },
  { value: 1, label: "connected" },
  {value: 2,label: "connecting"},
  {value: 3, label: "disconnecting"}
  ];


  const connection = async () => {
    const options = {
      // user: process.env.DB_USER,   // Nếu có
      // pass: process.env.DB_PASSWORD // Nếu có
      dbName: process.env.DB_NAME

    };
  
    try {
      await mongoose.connect(process.env.DB_HOST, options);
      const state = mongoose.connection.readyState;
      console.log('Database connection state:', state === 1 ? 'Connected' : 'Disconnected');
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;  // Ném lỗi để có thể bắt được trong phần gọi connection
    }
  };

module.exports = connection;


//Chưa cài root và mk cho mongodb 
// Bước 1: Kết nối vào mongoDB sử dụng URL:
// mongodb://localhost:27017
// Bước 2: Sử dụng database admin với câu lệnh sau:
// use admin
// Kiểm tra xem đã tạo user nào chưa với câu lệnh:
// db.getUsers()
// Bước 3: Tạo user để đăng nhập vào database
// db.createUser(
// {
// user: "root",
// pwd: "123456",
// roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
// }
// )
// Sau câu lệnh ở trên, chúng ta sẽ có username/password là: root/123456
// Bước 4: Kiểm tra kết quả
// db.getUsers()
// Bước 5: Kiểm tra kết nối
// Sử dụng URL với username và password sau:
// mongodb://root:123456@localhost:27017/hoidanit?authSource=admin
// Với đường link URL trên, chúng ta gồm các tham số:
// root:123456 => username = root ; password = 123456
// localhost:27017 => nơi database MongoDB chạy
// authSource=admin => role admin