// Inisialisasi Database User Dummy di LocalStorage
function initUsersDatabase() {
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            {
                email: 'admin@perpus.com',
                password: 'admin123',
                name: 'Admin Perpus',
                role: 'admin'
            },
            {
                email: 'siswa@perpus.com',
                password: 'siswa123',
                name: 'Siswa Perpus',
                role: 'siswa'
            }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
}

// Jalankan inisialisasi database saat file dimuat
initUsersDatabase();

// Fungsi temukanAkun() dipanggil saat tombol Login diklik (onclick)
function temukanAkun() {
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value;
    const pesanBox = document.getElementById('pesan');

    // Validasi jika input kosong
    if (!emailInput || !passwordInput) {
        if (pesanBox) pesanBox.innerText = 'Email dan password wajib diisi!';
        return;
    }

    // 1. Ambil data users dari localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 2. Cek apakah kombinasi email & password cocok
    const foundUser = users.find(
        (user) => user.email === emailInput && user.password === passwordInput
    );

    if (foundUser) {
        // 3. Simpan session user yang aktif
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(foundUser));

        if (pesanBox) pesanBox.innerText = '';
        alert(`Login berhasil! Selamat datang, ${foundUser.name}`);
        
        // Arahkan ke halaman utama/dashboard perpus
       window.location.href = 'homePage.html';
    } else {
        // 4. Tampilkan pesan error di elemen <p id="pesan">
        if (pesanBox) {
            pesanBox.innerText = 'Email atau password salah!';
        } else {
            alert('Email atau password salah!');
        }
    }
}