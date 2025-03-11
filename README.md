Day1:
+ Backend Developer là gì vì sao nó lại quan trọng trong phát triển ứng dụng?
  - Là phần quan trọng của một ứng dụng web, chịu trách nhiệm lưu trữ và xử lý dữ liệu người dùng một cách an toàn. Đây là thành phần đảm bảo rằng tất cả các logic và quy trình ẩn bên trong hệ thống hoạt động hiệu quả, cung cấp năng lượng cho các ứng dụng mà người dùng tương tác hàng ngày.
+ Các thành phần chính của một hệ thống backend?
 - BackEnd của một Website được xây dựng từ 3 thành phần là máy chủ, ứng dụng và cơ sở dữ liệu. Nhờ có các thành phần này mà Website hoạt động hiệu quả, các vấn đề như lưu trữ dữ liệu, truy xuất thông tin chính xác khớp với lệnh đưa ra, giúp người dùng nhanh chóng có được thông tin mình cần.
+ Sự khác biệt giữa backend và frontend?
 -  Frontend là phần giao diện người dùng thấy và tương tác, sử dụng HTML, CSS, JavaScript (React, Vue, Angular...). Nó hiển thị nút bấm, form nhập liệu và gửi yêu cầu đến backend.

  -  Backend là phần xử lý phía máy chủ, gồm server, database, API (Node.js, Python, Java...). Nó nhận yêu cầu từ frontend, xử lý logic, lưu trữ dữ liệu và trả kết quả về.
+ TypeScript là gì?
  - TypeScript (viết tắt là TS) là một ngôn ngữ lập trình mã nguồn mở (OOP) được phát triển và duy trì bởi Microsoft vào năm 2012. TypeScript được xem là một phần mở rộng của JavaScript, sử dụng cú pháp của JavaScript và bổ sung thêm các tính năng mạnh mẽ như kiểu tĩnh và hướng đối tượng để hỗ trợ Type (các kiểu dữ liệu).
+ Redis là gì?
  - Redis (REmote DIctionary Server) là một mã nguồn mở được dùng để lưu trữ dữ liệu có cấu trúc, có thể sử dụng như một database, bộ nhớ cache hay một message broker.
+ NestJS là gì? 
  - NestJS là một framework mã nguồn mở để phát triển ứng dụng server-side (backend applications) bằng ngôn ngữ TypeScript hoặc JavaScript. Nó được xây dựng trên cơ sở của Node.js và sử dụng các khái niệm từ TypeScript để tạo ra một môi trường phát triển hiện đại và mạnh mẽ cho việc xây dựng các ứng dụng web và API.
+ Eslint là gì?
  - ESLint là công cụ phân tích code JavaScript và TypeScript, nhằm phát hiện các lỗi cú pháp, lỗi logic, đảm bảm code tuân thủ quy tắc được thiết lập trước. ESLint được xây dựng với mục đích:
  - Tự động phát hiện lỗi trong quá trình phát triển.
  - Đảm bảo tính nhất quán trong code của các dự án lớn.
+ Prettier là gì?
  - Prettier là một là một thư viện định dạng code mã nguồn mở, tự động sắp xếp và định dạng code theo chuẩn thống nhất, giúp đảm bảo mọi developer trong nhóm đều tuân thủ một quy tắc định dạng chung, tăng tính nhất quán và chất lượng cho mã nguồn.
+  package.json là gì?
  - package.json là phần cốt lõi của hệ sinh thái Node.js, đóng vai trò quan trọng trong việc quản lý thông tin ứng dụng, các modules và thư viện. Để làm việc hiệu quả với Node.js và JavaScript.
+ dependencies vs devDependencies?
  - Dependency là một phần của dự án cần thiết để chạy dự án, devDependencies chỉ cần thiết cho quá trình phát triển trong khi peerDependencies chỉ định các phiên bản tương thích của các gói sẽ được sử dụng trong dự án.
+ Sự khác biệt giữa git merge và git rebase?
  - Git Merge: Kết hợp hai nhánh bằng cách tạo một commit mới, giữ nguyên lịch sử commit của cả hai nhánh. Dễ theo dõi nhưng có thể tạo nhiều commit merge không cần thiết.
  - Git Rebase: Di chuyển toàn bộ commit của nhánh hiện tại lên đầu nhánh đích, giúp lịch sử commit gọn gàng hơn, nhưng có thể gây xung đột khó xử lý nếu không cẩn thận.
+ Sự khác nhau giữa git reset, git checkout và git revert?
  - git reset quay lại một commit trước đó và có thể thay đổi lịch sử (--soft, --mixed, --hard).
  - git checkout dùng để chuyển nhánh hoặc xem trạng thái commit cũ mà không thay đổi lịch sử.
  - git revert tạo một commit mới để đảo ngược một commit cũ mà vẫn giữ nguyên lịch sử commit.
