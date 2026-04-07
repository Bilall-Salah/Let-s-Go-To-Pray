let menu = document.getElementById("menu");
let city = document.getElementById("city");
let search = document.getElementById("Search");
let dayName = document.getElementById("dayName");
let date = document.getElementById("date");
let dateHijri = document.getElementById("dateHijri");
let fajrTime = document.getElementById("fajrTime");
let sunTime = document.getElementById("sunTime");
let dhuhrTime = document.getElementById("dhuhrTime");
let asrTime = document.getElementById("asrTime");
let maghribTime = document.getElementById("maghribTime");
let ishaTime = document.getElementById("ishaTime");
let userDate;
let currentDate = document.getElementById("currentDate");
let today = new Date();
if (!userDate) {
    currentDate.innerText = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    userDate = currentDate.innerText;
    axios.get(`https://api.aladhan.com/v1/timingsByAddress/${userDate}?address=${userCity}&method=8`)
            .then((response) => {
                const data = response.data.data;
                city.innerText = data.meta.timezone;
                date.innerText = data.date.readable;
                dayName.innerText = data.date.hijri.weekday.en;
                dateHijri.innerText = data.date.hijri.month.en + " " + data.date.hijri.month.days;
                fajrTime.innerText = data.timings.Fajr;
                sunTime.innerText = data.timings.Sunrise;
                dhuhrTime.innerText = data.timings.Dhuhr;
                asrTime.innerText = data.timings.Asr;
                maghribTime.innerText = data.timings.Maghrib;
                ishaTime.innerText = data.timings.Isha;
                userCity.value = "";
                day.value = "";
                month.value = "";
                year.value = "";
            })
            .catch(err => {
                console.log(err);
            });
}
menu.addEventListener("click", () => {
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.remove("hidden");
    let close = document.getElementById("close");
    close.addEventListener("click", () => {
        sideMenu.classList.add("hidden");
    })
});
search.addEventListener("click", () => {
    let day = document.getElementById("day").value.padStart(2, '0');
    let month = document.getElementById("month").value.padStart(2, '0');
    let year = document.getElementById("year").value;
    let userCity = document.getElementById("userCity").value.trim();
    let error = document.getElementById("error");
    userDate = `${day}-${month}-${year}`;
    if (!userCity || !day || !month || !year) {
        error.innerText = "please complete the data!";
        error.classList.add("text-red-500");
    } else {
        error.innerText = "Thanke you for complete the data!";
        error.classList.remove("text-red-500");
        error.classList.add("text-green-500");
        setTimeout(() => {
            sideMenu.classList.add("hidden");
        }, 1000);
    }
    axios.get(`https://api.aladhan.com/v1/timingsByAddress/${userDate}?address=${userCity}&method=8`)
            .then((response) => {
                const data = response.data.data;
                city.innerText = data.meta.timezone;
                date.innerText = data.date.readable;
                dayName.innerText = data.date.hijri.weekday.en;
                dateHijri.innerText = data.date.hijri.month.en + " " + data.date.hijri.month.days;
                fajrTime.innerText = data.timings.Fajr;
                sunTime.innerText = data.timings.Sunrise;
                dhuhrTime.innerText = data.timings.Dhuhr;
                asrTime.innerText = data.timings.Asr;
                maghribTime.innerText = data.timings.Maghrib;
                ishaTime.innerText = data.timings.Isha;
                userCity.value = "";
                day.value = "";
                month.value = "";
                year.value = "";
            })
            .catch(err => {
                console.log(err);
            });
})

    

