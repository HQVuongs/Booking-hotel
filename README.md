# Hệ Thống Đặt Phòng Khách Sạn

## Giới thiệu

Hệ thống đặt phòng khách sạn là một ứng dụng web cho phép người dùng tìm kiếm, xem thông tin và đặt phòng khách sạn trực tuyến. Hệ thống được xây dựng với kiến trúc RESTful API, sử dụng Node.js, Express.js và MongoDB.

## Tính năng chính

- 🔐 Xác thực người dùng với JWT và mã hóa mật khẩu bằng bcrypt
- 🏨 Quản lý thông tin khách sạn và phòng
- 🔍 Tìm kiếm khách sạn theo nhiều tiêu chí (giá, địa điểm, loại hình)
- 📅 Đặt phòng và quản lý lịch đặt
- 💰 Quản lý hóa đơn và thanh toán
- 👥 Phân quyền người dùng (Admin/User)

## Công nghệ sử dụng

- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT, bcrypt
- API: RESTful

## Cài đặt và chạy dự án

### Yêu cầu hệ thống

- Node.js (v14 trở lên)
- MongoDB
- npm hoặc yarn

### Các bước cài đặt

1. Clone dự án

```bash
git clone [URL_Dự_Án]
```

2. Cài đặt dependencies

```bash
cd api
npm install
```

3. Tạo file .env và cấu hình các biến môi trường

```
MONGO=your_mongodb_connection_string
JWT=your_jwt_secret
```

4. Chạy dự án

```bash
npm start
```

## API Endpoints

### Authentication

- POST /api/auth/register - Đăng ký tài khoản
- POST /api/auth/login - Đăng nhập

### Hotels

- GET /api/hotels - Lấy danh sách khách sạn
- GET /api/hotels/:id - Lấy thông tin chi tiết khách sạn
- POST /api/hotels - Tạo khách sạn mới (Admin)
- PUT /api/hotels/:id - Cập nhật thông tin khách sạn (Admin)
- DELETE /api/hotels/:id - Xóa khách sạn (Admin)

### Rooms

- GET /api/rooms - Lấy danh sách phòng
- GET /api/rooms/:id - Lấy thông tin chi tiết phòng
- POST /api/rooms - Tạo phòng mới (Admin)
- PUT /api/rooms/:id - Cập nhật thông tin phòng (Admin)
- DELETE /api/rooms/:id - Xóa phòng (Admin)

### Bills

- GET /api/bills - Lấy danh sách hóa đơn
- POST /api/bills - Tạo hóa đơn mới
- GET /api/bills/user/:id - Lấy hóa đơn theo người dùng

## Bảo mật

- Mật khẩu được mã hóa bằng bcrypt với salt rounds
- Sử dụng JWT cho xác thực người dùng
- Phân quyền truy cập API theo role người dùng

## Tác giả

Ha Quoc Vuong

## License

MIT
