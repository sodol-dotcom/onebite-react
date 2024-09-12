// 단락 평가
function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("Trut 함수");
    return true;
}

console.log(returnFalse() && returnTrue());   
// 'returnFalse' 함수의 콘솔로그 까지만 찍히고 false가 찍힌다.
// 'returnTrue'의 콘솔로그는 찍히지 않음 
// => 단락평가가 적용되어서 그런 것. 'returnTrue()' 함수는 호출조차 되지 않음
