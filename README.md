Day4:

+ Database là gì?
  - Database là từ được sử dụng phổ biến trong các lĩnh vực thuộc công nghệ thông tin, dữ liệu, lập trình và phần mềm… .Database là cơ sở dữ liệu, là một bộ sưu tập dữ liệu được tổ chức bày bản và thường được truy cập từ hệ thống máy tính hoặc tồn tại dưới dạng tập tin trong hệ quản trị cơ sở dữ liệu. Database còn có thể được lưu trữ trên thiết bị có chức năng ghi nhớ như: thẻ nhớ, đĩa cứng, CD
+ Collection là gì?
  - Collection là thuật ngữ chỉ các cấu trúc dữ liệu dùng để lưu trữ, quản lý và thao tác với tập hợp các đối tượng. Collection giúp dễ dàng thêm, xoá, sắp xếp và tìm kiếm dữ liệu.
+ Document là gì?
  - Document là đối tượng đại diện cho toàn bộ nội dung của trang web. Nó là một phần của mô hình DOM (Document Object Model), giúp lập trình viên có thể truy cập và thao tác với các phần tử HTML bằng JavaScript.
+ Schema là gì?
  - Schema là một cấu trúc hoặc mô hình dùng để định nghĩa và tổ chức dữ liệu trong nhiều lĩnh vực khác nhau, đặc biệt là trong cơ sở dữ liệu, NoSQL, GraphQL, XML, JSON.
+ Model là gì?
  - Model là một mô hình hoặc cấu trúc đại diện cho dữ liệu và logic xử lý dữ liệu trong nhiều lĩnh vực khác nhau:
    Trong lập trình (MVC): Model quản lý dữ liệu và tương tác với cơ sở dữ liệu.
    Trong cơ sở dữ liệu: Model là cách tổ chức và lưu trữ dữ liệu.
    Trong AI/ML: Model là hệ thống học từ dữ liệu để đưa ra dự đoán.
    Trong thiết kế phần mềm: Model mô phỏng cấu trúc và hành vi của hệ thống.
+ Indexing là gì?
  - Indexing là kỹ thuật tạo chỉ mục trong cơ sở dữ liệu để tăng tốc truy vấn dữ liệu, giúp tìm kiếm nhanh hơn nhưng có thể làm chậm các thao tác chèn, cập nhật, xóa. 
+ Các loại index phổ biến?
  - Primary Index – Chỉ mục chính, thường áp dụng trên khóa chính (Primary Key).
  - Unique Index – Đảm bảo giá trị trong cột là duy nhất.
  - Clustered Index – Lưu trữ dữ liệu theo thứ tự vật lý của index (chỉ có một Clustered Index trên mỗi bảng).
  - Non-clustered Index – Chỉ lưu chỉ mục, không ảnh hưởng đến cách dữ liệu được lưu trữ.
  - Full-Text Index – Dùng cho tìm kiếm văn bản trong dữ liệu lớn.
  - Composite Index – Chỉ mục trên nhiều cột để tối ưu hóa truy vấn kết hợp.
  - Hash Index – Dùng trong NoSQL hoặc cơ sở dữ liệu In-Memory để tra cứu nhanh.
+ Performance Optimization?
  - Performance Optimization (Tối ưu hiệu suất) là quá trình cải thiện tốc độ, hiệu quả và khả năng xử lý của hệ thống, ứng dụng hoặc cơ sở dữ liệu để đảm bảo hoạt động nhanh hơn, sử dụng tài nguyên tối ưu hơn.
+ Transaction là gì?
  - Transaction (Giao dịch) trong cơ sở dữ liệu là một tập hợp các thao tác được thực hiện như một đơn vị duy nhất, đảm bảo tính toàn vẹn dữ liệu. Nếu một phần của transaction thất bại, toàn bộ transaction sẽ bị hủy để tránh dữ liệu sai lệch.
+ Cách sử dụng transactions trong Mongoose?
  - Bắt đầu một session để quản lý transaction.
  - Bắt đầu transaction trong session.
  - Thực hiện các thao tác CRUD (Create, Read, Update, Delete) với tùy chọn session.
  - Commit transaction nếu mọi thao tác thành công.
  - Rollback transaction nếu có lỗi xảy ra.
  - Kết thúc session để giải phóng tài nguyên.
