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
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/ca6cfe4a-6e5b-4680-85ea-142e02dc4023" />

### Kịch bản 2: Đăng nhập thất bại
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/33de1b76-1ef1-4d8e-8901-152fbe1573df" />

### Kịch bản 3: Thêm sản phẩm vào giỏ hàng
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/d34fb322-8ebb-410c-9692-89617f74fe7b" />

### Kịch bản 4: Sắp xếp sản phẩm theo giá
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/188080e9-c775-4e2b-b5ed-d32d2b2ce512" />

### Kịch bản 5: Xóa sản phẩm khỏi giỏ hàng
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/f9f623ad-0ca6-4645-91e5-69550dbb981c" />  
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/c19eda75-2daf-488b-bc60-413ae66417a3" />

### Kịch bản 6: Quy trình thanh toán
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/21e828a9-86b8-4f60-b2cd-984093654258" />  
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/2fa6d9ce-3a13-4be2-a0e8-f55750501f09" />  
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/daaead9a-c145-4e30-b8a5-228cad95c3ff" />


### Tổng quan kết quả
*[Chèn ảnh tổng quan các test cases tại đây]*

## Tài liệu tham khảo
- [Cypress Documentation](https://docs.cypress.io)
- [SauceDemo - Test Website](https://www.saucedemo.com)

## Ghi chú
- Tất cả các test cases đã được thực hiện theo yêu cầu bài tập
- Các test cases bổ sung (xóa sản phẩm và thanh toán) đã được hoàn thành
- Kết quả kiểm thử sẽ được cập nhật với ảnh chụp màn hình
