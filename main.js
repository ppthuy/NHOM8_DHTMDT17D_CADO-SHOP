function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Kiểm tra xác thực thông tin đăng nhập ở đây
    // Nếu đăng nhập thành công:
    const userData = { email: email, password: password }; // Thông tin người dùng
    sessionStorage.setItem('currentUser', JSON.stringify(userData)); // Lưu thông tin người dùng vào sessionStorage

    // Chuyển hướng đến trang chính hoặc trang mà bạn muốn sau khi đăng nhập thành công
    window.location.href = "Cado_Shop.html";
}
