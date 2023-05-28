var count = 2;

function validate ()
{
var user = document.login.username.value;
var passwordInput = document.login.password.value;
var valid = false;
var usernameArray = ["kachion"]
var passwordArray = ["kachion"]
for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray[i])
if (passwordInput == passwordArray [i])
{
valid = true;
break;
}

// tách


if(valid)
{
alert("Đăng nhập thành công");
window.location = "http://www.hbwsvision.com/yifang/uploadfile/file/20230419/20230419174229_49891.html"
return false ;
}
var again = "tries";
if (count ==1)
{
again = "try"
}
if(count >= 1)
{
alert("Tài khoản hoặc mật khẩu không đúng")
count--;
}
}


const passwordInput = document.getElementById('passwordInput');
const showHidePassword = document.querySelector('.showHidePassword');

showHidePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showHidePassword.classList.remove('fa-eye-slash');
        showHidePassword.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        showHidePassword.classList.remove('fa-eye');
        showHidePassword.classList.add('fa-eye-slash');
    }
});
