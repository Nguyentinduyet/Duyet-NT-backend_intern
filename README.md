+ Primitive Types?
  - Primitive Types là các kiểu dữ liệu nguyên thủy trong TypeScript, bao gồm: string, number, boolean, bigint, symbol, null, và undefined. Đây là các kiểu cơ bản và không thể thay đổi sau khi được gán giá trị.
+ Object types?
  - Object Types là các kiểu dữ liệu phức tạp bao gồm object, array, function và class. Chúng giúp mô tả cấu trúc của dữ liệu một cách rõ ràng và có thể mở rộng.
+ Union Types?
  - Union Types cho phép một biến có thể có nhiều kiểu dữ liệu khác nhau. Nó hữu ích khi một giá trị có thể thuộc nhiều loại, chẳng hạn như một ID có thể là number hoặc string.
+ Intersection Types?
  - Intersection Types kết hợp nhiều kiểu dữ liệu lại với nhau, tạo ra một kiểu mới chứa tất cả thuộc tính của các kiểu đã kết hợp. Nó thường được sử dụng để hợp nhất các đặc điểm của nhiều đối tượng.
+ Interface vs Type Alias?
  - Interface chủ yếu được sử dụng để định nghĩa cấu trúc của object và có thể được mở rộng (extends).
  - Type Alias có thể định nghĩa bất kỳ kiểu dữ liệu nào, bao gồm cả union và intersection.
+ Generics là gì?
  - Generics là một cơ chế cho phép sử dụng kiểu dữ liệu một cách linh hoạt mà không bị ràng buộc vào một kiểu cụ thể. Nó giúp tái sử dụng code và đảm bảo tính an toàn về kiểu dữ liệu khi làm việc với các cấu trúc như mảng, danh sách hoặc hàm.
+ Decorators là gì?
  - Decorators là một tính năng của TypeScript (thường dùng với class) cho phép thêm metadata hoặc sửa đổi hành vi của class, phương thức, thuộc tính hoặc tham số. Nó thường được sử dụng trong các framework như Angular để xác định các service, component, hoặc middleware.
+ Optional & Readonly Properties?
  - Optional (?) được sử dụng để chỉ ra rằng một thuộc tính không bắt buộc phải có trong object.
  - Readonly giúp bảo vệ một thuộc tính không thể thay đổi sau khi đã được gán giá trị ban đầu.
+ Enum & Tuples?
  - Enum là một tập hợp các giá trị đặt tên, giúp định nghĩa các nhóm hằng số một cách dễ đọc hơn.
  - Tuple là một loại mảng có số lượng phần tử cố định và mỗi phần tử có thể có kiểu dữ liệu khác nhau.
