// Ambil elemen form, error box, dan error message
const form = document.getElementById('loginForm');
const errorBox = document.getElementById('errorBox');
const errorMessage = document.getElementById('errorMessage');

// Tambahkan event listener untuk form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Cegah form submission default
    
    // Ambil nilai username dan password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validasi login
    if (isValidLogin(username, password)) {
        // Jika login valid, redirect ke halaman selanjutnya
        window.location.href = 'index.html';
    } else {
        // Jika login tidak valid, tampilkan pesan error
        errorMessage.textContent = 'Username atau password salah.';
        errorBox.classList.remove('hidden');
    }
});

// Fungsi untuk memvalidasi login
function isValidLogin(username, password) {
    // Contoh sederhana, Anda dapat menambahkan logika validasi yang lebih kompleks sesuai kebutuhan
    return username === 'admin@gmail.com' && password === '12345';
}