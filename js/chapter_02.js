// if, switch

console.log(new Date().getDay());

let day;
switch (new Date().getDay()) {
  case 0:
    day = "일요일";
    break;
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  default:
    day = "주 후반";
}

console.log(day);

let day2;
if (new Date().getDay() == 0) {
  day2 = "일요일";
} else if (new Date().getDay() == 1) {
  day2 = "월요일";
} else if (new Date().getDay() == 2) {
  day2 = "화요일";
} else if (new Date().getDay() == 3) {
  day2 = "수요일";
} else {
  day2 = "주 후반";
}
console.log(day2);
