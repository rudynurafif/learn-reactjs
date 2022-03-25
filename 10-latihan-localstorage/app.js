// Menyimpan data di local storage
localStorage.setItem('token', 'kodetoken')
sessionStorage.setItem('data', 'kodetoken1')

// Get atau mengambil data dari local storage
const token = localStorage.getItem('token')
// console.log(token);

// // Remove data di local storage
localStorage.removeItem('token')