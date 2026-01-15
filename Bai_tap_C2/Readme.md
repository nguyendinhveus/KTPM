# Student Score Analyzer – JUnit Practice

## 1. Giới thiệu
Bài tập này thực hành kiểm thử đơn vị (Unit Test) bằng JUnit trong Java. Mục tiêu:
- Rèn luyện phân tích yêu cầu và viết mã theo yêu cầu chức năng.
- Viết kiểm thử tự động với JUnit 5.
- Quản lý công việc và lịch sử bằng Git/GitHub.

Bài toán: phân tích danh sách điểm số học sinh và xử lý dữ liệu hợp lệ (điểm trong khoảng 0–10).

---

## 2. Mô tả chức năng
Lớp `StudentAnalyzer` cung cấp hai chức năng chính:
- Đếm số học sinh đạt loại **Giỏi** (điểm ≥ 8.0).
- Tính **điểm trung bình** của các điểm hợp lệ (loại bỏ giá trị < 0 hoặc > 10).

Quy tắc:
- Bỏ qua các giá trị không hợp lệ (<0 hoặc >10 hoặc null).
- Nếu danh sách rỗng hoặc không có điểm hợp lệ, trả về 0.

---

## 3. Chi tiết triển khai
### 3.1 `countExcellentStudents(List<Double> scores)`
- Kiểm tra null/empty.
- Lọc điểm hợp lệ (0–10).
- Đếm phần tử có giá trị >= 8.0.

### 3.2 `calculateValidAverage(List<Double> scores)`
- Kiểm tra null/empty.
- Lọc điểm hợp lệ và tính trung bình trên các phần tử hợp lệ.
- Trả về 0 nếu không có phần tử hợp lệ để tránh chia cho 0.

---

## 4. Kiểm thử đơn vị (JUnit 5)
Các test case được viết bằng JUnit 5 và bao gồm các tình huống:
- Trường hợp bình thường (có cả điểm hợp lệ và không hợp lệ).
- Toàn bộ điểm hợp lệ.
- Biên (0 và 10).
- Danh sách rỗng.
- Giá trị không hợp lệ (<0, >10).

---

## 5. Cài đặt JUnit 5
Nếu bạn dùng Maven hoặc Gradle, thêm dependency sau vào cấu hình dự án.

Maven (pom.xml):

```xml
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter</artifactId>
  <version>5.9.3</version>
  <scope>test</scope>
</dependency>
```

Gradle (build.gradle):

```groovy
testImplementation 'org.junit.jupiter:junit-jupiter:5.9.3'

test {
    useJUnitPlatform()
}
```

---

## 6. Hướng dẫn chạy test
- IntelliJ/Eclipse: Import project (Maven/Gradle) hoặc thêm JUnit library rồi chạy class `StudentAnalyzerTest` bằng Test Runner.

- Maven (command line):
  mvn test

- Gradle (command line):
  ./gradlew test

---

## 7. Cấu trúc thư mục
```
unit-test/
├── src/
│   └── StudentAnalyzer.java
├── test/
│   └── StudentAnalyzerTest.java
└── README.md
```

---

## 8. Quy trình làm việc (tóm tắt)
1. Phân tích yêu cầu
2. Tạo Issue trên GitHub cho từng nhiệm vụ
3. Triển khai mã cho mỗi issue
4. Viết và chạy kiểm thử đơn vị
5. Commit và liên kết với issue

---

## 9. Ghi chú
- Đảm bảo môi trường JDK và IDE đã cấu hình đúng.
- Nếu cần, tôi có thể giúp thêm một file cấu hình Maven/Gradle mẫu để tự động hoá việc chạy test.
