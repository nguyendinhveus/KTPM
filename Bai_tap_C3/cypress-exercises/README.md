# Bài tập thực hành kiểm thử tự động End-to-End với Cypress

## Thông tin bài tập
- **Mục tiêu**: Hiểu và thực hành các kịch bản kiểm thử tự động end-to-end bằng Cypress
- **Trang web kiểm thử**: https://www.saucedemo.com
- **Framework**: Cypress

## Cài đặt

### Yêu cầu
- Node.js (phiên bản 14 hoặc cao hơn)
- Visual Studio Code
- Cypress

### Các bước cài đặt
```bash
# Khởi tạo npm
npm init -y

# Cài đặt Cypress
npm install cypress --save-dev

# Mở Cypress
npx cypress open
```

## Các kịch bản kiểm thử đã thực hiện

### 1. Kiểm tra đăng nhập thành công (login_spec.cy.js)
**Mục tiêu**: Kiểm tra người dùng có thể đăng nhập thành công với thông tin hợp lệ

**Các bước**:
- Truy cập trang https://www.saucedemo.com
- Nhập tên người dùng: `standard_user`
- Nhập mật khẩu: `secret_sauce`
- Nhấn nút "Login"
- Xác minh trang được chuyển hướng đến `/inventory.html`

### 2. Kiểm tra đăng nhập thất bại (login_spec.cy.js)
**Mục tiêu**: Kiểm tra hệ thống hiển thị thông báo lỗi khi đăng nhập với thông tin không hợp lệ

**Các bước**:
- Truy cập trang https://www.saucedemo.com
- Nhập tên người dùng không hợp lệ: `invalid_user`
- Nhập mật khẩu sai: `wrong_password`
- Nhấn nút "Login"
- Xác minh thông báo lỗi hiển thị: "Username and password do not match"

### 3. Kiểm tra thêm sản phẩm vào giỏ hàng (cart_spec.cy.js)
**Mục tiêu**: Kiểm tra người dùng có thể thêm sản phẩm vào giỏ hàng

**Các bước**:
- Đăng nhập với thông tin hợp lệ
- Nhấn nút "Add to cart" của sản phẩm đầu tiên
- Xác minh số lượng sản phẩm trong giỏ hàng là 1

### 4. Kiểm tra sắp xếp sản phẩm theo giá (cart_spec.cy.js)
**Mục tiêu**: Kiểm tra bộ lọc sản phẩm hoạt động đúng khi chọn "Price (low to high)"

**Các bước**:
- Đăng nhập với thông tin hợp lệ
- Chọn bộ lọc "Price (low to high)" từ dropdown
- Xác minh sản phẩm đầu tiên có giá thấp nhất ($7.99)

### 5. Kiểm tra xóa sản phẩm khỏi giỏ hàng (Bài tập bổ sung)
**Mục tiêu**: Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng

**Các bước**:
- Đăng nhập và thêm sản phẩm vào giỏ hàng
- Nhấn nút "Remove"
- Xác minh số lượng sản phẩm trong giỏ hàng trở về 0

### 6. Kiểm tra quy trình thanh toán (Bài tập bổ sung)
**Mục tiêu**: Kiểm tra quy trình thanh toán hoàn chỉnh

**Các bước**:
- Đăng nhập và thêm sản phẩm vào giỏ hàng
- Đi đến trang thanh toán
- Điền thông tin:
  - First Name: John
  - Last Name: Doe
  - Zip Code: 12345
- Nhấn "Continue"
- Xác minh chuyển đến trang xác nhận `/checkout-step-two.html`

## Cấu trúc dự án
```
cypress-exercises/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js       # Kiểm thử đăng nhập
│   │   └── cart_spec.cy.cy.js     # Kiểm thử giỏ hàng và thanh toán
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## Cách chạy kiểm thử

### Chạy với giao diện Cypress
```bash
npx cypress open
```
Sau đó chọn các file test để chạy từ giao diện.

### Chạy chế độ headless (command line)
```bash
npx cypress run
```

### Chạy một file test cụ thể
```bash
npx cypress run --spec "cypress/e2e/login_spec.cy.js"
```

## Kết quả kiểm thử

### Kịch bản 1: Đăng nhập thành công
*[Chèn ảnh kết quả tại đây]*

### Kịch bản 2: Đăng nhập thất bại
*[Chèn ảnh kết quả tại đây]*

### Kịch bản 3: Thêm sản phẩm vào giỏ hàng
*[Chèn ảnh kết quả tại đây]*

### Kịch bản 4: Sắp xếp sản phẩm theo giá
*[Chèn ảnh kết quả tại đây]*

### Kịch bản 5: Xóa sản phẩm khỏi giỏ hàng
*[Chèn ảnh kết quả tại đây]*

### Kịch bản 6: Quy trình thanh toán
*[Chèn ảnh kết quả tại đây]*

### Tổng quan kết quả
*[Chèn ảnh tổng quan các test cases tại đây]*

## Tài liệu tham khảo
- [Cypress Documentation](https://docs.cypress.io)
- [SauceDemo - Test Website](https://www.saucedemo.com)

## Ghi chú
- Tất cả các test cases đã được thực hiện theo yêu cầu bài tập
- Các test cases bổ sung (xóa sản phẩm và thanh toán) đã được hoàn thành
- Kết quả kiểm thử sẽ được cập nhật với ảnh chụp màn hình
