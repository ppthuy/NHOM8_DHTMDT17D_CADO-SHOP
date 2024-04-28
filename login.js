// Hàm kiểm tra đăng nhập
function checkLogin(email, password) {
    // Mô phỏng việc kiểm tra từ cơ sở dữ liệu
    const users = [
        { email: "example@gmail.com", password: "password123", username: "user1" },
        { email: "test@gmail.com", password: "test123", username: "user2" }
        // Thêm thông tin người dùng khác nếu cần
    ];

    // Tìm người dùng có email và mật khẩu khớp
    const user = users.find(user => user.email === email && user.password === password);

    // Nếu tìm thấy người dùng, đăng nhập thành công và lưu thông tin người dùng vào sessionStorage
    if (user) {
        // Lưu thông tin người dùng vào sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }

    // Nếu không tìm thấy người dùng, đăng nhập thất bại
    return false;
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Thực hiện kiểm tra đăng nhập
    if (!checkLogin(email, password)) {
        alert("Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.");
        return;
    }

    // Chuyển hướng đến trang chính sau khi đăng nhập thành công
    window.location.href = "Cado_Shop.html";
});
