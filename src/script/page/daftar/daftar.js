import risetPages from"../../utils/risetPage";import formDaftar from"./formDaftar.js";const daftar=()=>{const a=document.querySelector(".content-project");risetPages(),a.innerHTML='\n    <div class="container-login-daftar">\n        <div class="container-box-login-daftar">\n            <div class="container-form" id="form-daftar">\n                <div class="judul-login-daftar">\n                    <h1 class="daftar">Hai, Selamat Datang!</h1>\n                    <p class="daftar">PENTAS SENI INDONESIA</p>\n                </div>\n                <div class="form-login"></div>\n            </div>\n            <div class="gambar-login-daftar" id="gambar-daftar">\n                <div class="container-gambar-login-daftar">\n                    <div class="box-1"><img src="../../../src/public/aset/login-section/Hobbies.webp" alt=""></div>\n                </div>\n            </div>\n        </div>\n    </div>',formDaftar()};export default daftar;