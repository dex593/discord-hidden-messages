# Hướng dẫn cài đặt

Repo này có hai cách sử dụng trên Discord web: một tiện ích trình duyệt và một Tampermonkey userscript. Có thể dùng một hoặc cả hai, nhưng cần giữ chung khóa dùng chung.

## Tính năng
- Mã hóa tin nhắn bằng ký tự zero-width và tự động giải mã cho người có công cụ.
- Giữ mention người dùng, role, kênh, và hỗ trợ `@everyone`, `@here`.
- Hỗ trợ mã hóa payload bằng khóa dùng chung (tùy chọn).
- Mã hóa/giải mã đính kèm ảnh và tệp `.txt` thông qua `.dhi`.
- Các đuôi tệp đính kèm được hỗ trợ: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.bmp`, `.txt`.
- Xử lý tin nhắn quá dài bằng tệp `.dni` trong khi vẫn giữ mention.
- "Show more..." giúp mở rộng nội dung dài để đọc thuận tiện hơn.
- Chỉ hoạt động trên Discord web (không hỗ trợ app desktop/mobile).
- Popup extension để bật/tắt và đặt khóa dùng chung.

## Tiện ích trình duyệt (Chrome hoặc Edge)
1. Mở `chrome://extensions` (hoặc `edge://extensions`).
2. Bật Developer mode.
3. Bấm "Load unpacked" và chọn thư mục `discord-invisible-extension`.
4. Ghim extension và mở popup.
5. Đặt Shared key và reload Discord.

## Tampermonkey Userscript
1. Cài Tampermonkey từ Chrome Web Store (hoặc Edge Add-ons).
2. Mở Tampermonkey dashboard.
3. Tạo script mới và dán nội dung từ `discord-invisible.user.js`, hoặc import file trực tiếp.
4. Lưu và bật script.
5. Sửa `SHARED_KEY` trong `discord-invisible.user.js` trùng với khóa trong extension.

## Sử dụng
- Mở `https://discord.com/channels/*` và reload.
- Tin nhắn gửi đi sẽ được mã hóa và sẽ giải mã với người dùng có cùng khóa và script/extension.

## Cập nhật
- Thay thế thư mục extension và load lại trên trang Extensions.
- Import lại userscript mới và save.
