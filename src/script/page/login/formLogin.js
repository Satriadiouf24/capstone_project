import fungsiLogin from"./fungsiLogin";const formLogin=()=>{document.querySelector("form").innerHTML='                  \n    <div class="email">\n        <div class="input-email">\n            <input type="email" placeholder="Email" autocomplete="email" id="email" required>\n            <div class="simbol-email">\n                <i class="fa-regular fa-user" ></i>\n            </div>\n        </div>\n    </div>\n    <div class="password">\n        <div class="input-password">\n            <input type="password" placeholder="Password" autocomplete="current-password" id="password" required>\n            <div class="simbol-password">\n                <i class="fa-solid fa-lock" aria-describedby="passwordHelpInline"class="form-control"></i>\n            </div>\n        </div>\n    </div>\n    <div class="login">\n        <button type="submit" id="btn">Masuk</button>\n        <p class="daftar">Belum punya akun? <a href="#daftar">Daftar</a></p>\n    </div>',document.getElementById("btn").addEventListener("click",(()=>{const n=document.getElementById("email").value,e=document.getElementById("password").value;fungsiLogin(n,e)}))};export default formLogin;