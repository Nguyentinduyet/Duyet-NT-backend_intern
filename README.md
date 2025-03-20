<<<<<<< HEAD
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
=======
# p85diary-backend



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/izisoftware2020/p85diary-backend.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/izisoftware2020/p85diary-backend/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
# base-projects
>>>>>>> 659f933 (DB-ecommerce)
