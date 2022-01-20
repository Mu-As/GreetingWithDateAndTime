const myNameLabel = document.getElementById("myName");
const myClock = document.getElementById("myClock");
myNameLabel.textContent = prompt("Adınızı giriniz:");

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

if (
  myNameLabel.textContent.length < 1 ||
  myNameLabel.textContent == null ||
  myNameLabel.textContent.trim() == ""
) {
  alert("Lütfen geçerli bir isim giriniz!");
  function reload() {
    setTimeout("window.location.reload()", 500);
  }
  reload();
} else {
  function refresh() {
    setTimeout("showTime()", 1000);
  }

  function showTime() {
    const newDate = new Date();

    const year = newDate.getFullYear();
    const monthInfo = newDate.getMonth(); // 0-11
    let month;
    const dayInMonth = newDate.getUTCDate(); // 1-31
    const dayInfo = newDate.getDay(); // 0-6
    let day;
    let hours = newDate.getHours();
    if (hours < 10) {
      let tempHour = hours.toString();
      let zero = "0";
      tempHour = zero.concat(tempHour);
      hours = tempHour;
    }
    let minutes = newDate.getMinutes();
    if (minutes < 10) {
      let tempMin = minutes.toString();
      let zero = "0";
      tempMin = zero.concat(tempMin);
      minutes = tempMin;
    }
    let seconds = newDate.getSeconds();
    if (seconds < 10) {
      let tempSec = seconds.toString();
      let zero = "0";
      tempSec = zero.concat(tempSec);
      seconds = tempSec;
    }

    switch (monthInfo) {
      case 0:
        month = "Ocak";
        break;
      case 1:
        month = "Şubat";
        break;
      case 2:
        month = "Mart";
        break;
      case 3:
        month = "Nisan";
        break;
      case 4:
        month = "Mayıs";
        break;
      case 5:
        month = "Haziran";
        break;
      case 6:
        month = "Temmuz";
        break;
      case 7:
        month = "Ağustos";
        break;
      case 8:
        month = "Eylül";
        break;
      case 9:
        month = "Ekim";
        break;
      case 10:
        month = "Kasım";
        break;
      case 11:
        month = "Aralık";
        break;

      default:
        break;
    }
    if (dayInfo == 0) {
      day = "Pazar";
    } else if (dayInfo == 1) {
      day = "Pazartesi";
    } else if (dayInfo == 2) {
      day = "Salı";
    } else if (dayInfo == 3) {
      day = "Çarşamba";
    } else if (dayInfo == 4) {
      day = "Perşembe";
    } else if (dayInfo == 5) {
      day = "Cuma";
    } else {
      day = "Cumartesi";
    }

    myClock.textContent = `Bugün ${dayInMonth} ${month} ${year} günlerden ${day}, saat ${hours}:${minutes}:${seconds}`;
    refresh();
  }

  showTime();
}
