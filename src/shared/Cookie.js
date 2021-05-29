const getCookie = (name) =>{
let value = "; "+document.cookie;
let parts = value.split(`; ${name}=`);
if(parts.length === 2){
    return parts.pop().split(";").shift();

}

}

// 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    // 날짜를 만들어줍니다.
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    // 저장!
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

const deleteCookie = (name) =>{
    let date = new Date("2020-01-01").toUTCString();
    console.log(date);
    document.cookie = name+"=; expires="+date;

}

export {getCookie, setCookie, deleteCookie};