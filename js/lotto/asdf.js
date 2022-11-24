//내 로또 번호, 컴 로또 번호 배열 선언
var mylot = new Array();
var comlot = new Array();
var bonus = 0;
var bonus_win = 0;

//자동 내 로또 번호 6자리 뽑기
for (var i = 0; i < 6; i++) {
    mylot[i] = Math.floor(Math.random() * 45 + 1);
    for (var j = 0; j < 6; j++) {
        if (i != j && mylot[i] == mylot[j]) {
            i--;
            // alert("중복 숫자");
            break;
        }
    }
}
dw("내 로또 번호: " + mylot);hr();

//자동 컴 로또 번호 6자리 뽑기
for (var i = 0; i < 6; i++) {
    comlot[i] = Math.floor(Math.random() * 45 + 1);
    for (var j = 0; j < 6; j++) {
        if (i != j && comlot[i] == comlot[j]) {
            i--;
            break;
        }
    }
}
dw("자동 로또 번호: " + comlot);hr();

//보너스 번호 뽑기
var bonus = Math.floor(Math.random() * 45 + 1);
if (bonus == comlot) {
    // alert("컴 로또 보너스 중복")
} else {
    dw("보너스 번호: " + bonus);hr();
}

//당첨 숫자 확인
var win = 0;
for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
        if (mylot[i] == comlot[j]) {
            win++;
        }
    }
}
document.write("당첨 개수: " + win + "개");hr();

//보너스 당첨여부 확인
for (var i = 0; i < 6; i++) {
        if (mylot[i] == bonus) {
            bonus_win++;
        }
    }

//개수에 따른 등수 확인
if(win <=2 ){
    dw("낙첨");
}else if(win == 3){
    dw("5등 입니다.");
}else if(win == 4 ){
    dw("4등입니다.")
}else if(win == 5 && bonus_win == 0){
    dw("3등입니다.")
}else if(win == 5 && bonus_win == 1){
    dw("2등입니다.")
}else{ 
    dw("1등입니다.")
}




