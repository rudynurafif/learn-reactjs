API
"API (Application Programming Interface) adalah sekumpulan perintah, fungsi, serta protokol yang digunakan untuk menghubungkan dua atau lebih aplikasi"

Restful API
- Representational State Transfer
- Salah satu jenis API yang menggunakan protokol HTTP sebagai media untuk berkomunikasi

HTTP Methods and Their Meaning
GET = Read data
POST = Insert data
PUT or PATCH = Update data, or insert if a new id
DELETE = Delete data

HTTP Status codes
1xx informational
2xx success
3xx redirection
4xx client error
5xx server error

Authentication : proses untuk memverifikasi identitas user
Authorization : proses untuk memverifikasi apa saja yang bisa user lakukan

Biasanya keduanya menggunakan JWT (JSON Web Token)

Cara konsumsi API di frontend (client-side)
- AJAX
- Fetch
- Library : JQuery, axios, superagents

Local Storage, saat browser diclose data tetap ada
Session Storage, saat browser/tab diclose / session habis data akan terhapus
Keduanya digunakan untuk menyimpan token yang didapat dari respon saat login/register.
