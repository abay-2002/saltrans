// === Contoh aplikasi jaringan komputer ===
// Contoh aplikasi jaringan komputer menggunakan Javascript Runtime NodeJS dan Web framework ExpressJS
// Membuat web server sederhana menggunakan NodeJS dan Web framework ExpressJS.
// oleh: Akbar Angkasa 32220036 | Kel.2 | Saltrans

// Third party module/NPM
const express = require('express');
const app = express();
const port = 8080;

const expressLayouts = require('express-ejs-layouts');
// === EJS view engine ===
app.set('view engine', 'ejs');

// === EJS-layout ===
app.use(expressLayouts);

app.get('/', (req, res) => {
    const halaman = [
        {
            ke: '/', 
            page: 'Home'
        },
        {
            ke: '/contact',
            page: 'Contact'
        },
    ];
    res.render('index',{
        layout: 'layout/main-layout',
        title:"Utama",
        halaman: halaman
    });
})

app.get('/contact', (req, res) => {
    const halaman = [
        {
            ke: '/', 
            page: 'Home'
        },
        {
            ke: '/contact',
            page: 'Contact'
        },
    ];
    const mahasiswa = [
        {
            nama: "Akbar Angkasa",
            nim: "32220036",
            url: "angkasaportfolio.netlify.app",
            detail: "akbarangkasa.com"
        },
        {
            nama: "Muh Hamid",
            nim: "32220000",
            url: "https://www.instagram.com/angkasa_akbar/followers/?hl=en",
            detail: "Hamid"
        }
    ];
    res.render('contact',{
        layout: 'layout/main-layout',
        title:"contact",
        halaman: halaman,
        mahasiswa : mahasiswa
    });
})

// routes
app.use('/', (req, res) => {
    res.status(404);
    res.send('404 Not found :(');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})