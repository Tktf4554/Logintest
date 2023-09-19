function login() {
  var username = document.querySelector('#txt_username');
  var password = document.querySelector('#txt_password');
  var remember = document.querySelector('#txt_remember');
  var form = document.querySelector('.form-control');

  form.classList.remove('is-invalid');
  password.classList.remove('is-invalid');

  if (username.value.length <= 0) {
    alert('ลืมเขียนนะ');
    username.classList.add('is-invalid');
  } else if (password.value.length <= 0) {
    alert('ลืมเขียนนะ');
    password.classList.add('is-invalid');
  } else {
    // Send request to server
    // Simulate
    if ((username.value === 'test1' && password.value === '4554') || (username.value === 'bearbug' && password.value === '1234')) {
      // ล็อกอินสำเร็จ, เพิ่ม kein_token ลงใน localStorage
      localStorage.setItem('kein_token', 'your_token_value_here');

      // เปลี่ยนเส้นทางการเข้าถึงไปยังหน้า welcome.html หลังจากล็อกอินสำเร็จ
      window.location.href = 'https://tktf4554.github.io/Logintest/welcome.html';
    } else {
      // ถ้า username หรือ password ไม่ถูกต้อง
      // แสดงข้อความผิดพลาดหรือทำอื่นตามต้องการ
      alert('ผิดครับ');
    }
  }
}
