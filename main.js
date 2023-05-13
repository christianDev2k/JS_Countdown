const selectDay = document.querySelector('#seclectDay');
const newyearDay = new Date('2024-01-01');
const christmasDay = new Date('2023-12-25');
const halloweenDay = new Date('2023-10-31');
const valentineDay = new Date('2024-02-14');
const countDownBg = document.querySelector('.countdown');

function countDown(day) {
    // Khởi tạo về 00h00p00s mặc định 07h00p00s
    day.setHours(0);
    day.setMinutes(0);
    day.setSeconds(0);
    const eventDay = day.getTime();

    day === newyearDay ? countDownBg.style.background = "url('./img/new-year.jpg')" :
        day === valentineDay ? countDownBg.style.background = "url('./img/valenteen.jpeg')" :
            day === christmasDay ? countDownBg.style.background = "url('./img/christmas.jpeg')" :
                countDownBg.style.background = "url('./img/halloween.jpeg')";

    const x = setInterval(function () {
        let currentDay = new Date().getTime();
        let count = eventDay - currentDay;

        // Điều kiện dừng 
        count--;
        count < 0 ? clearInterval(x) : null;
        selectDay.addEventListener('change', function () {
            clearInterval(x);
        })


        //Quy đổi thời gian từ mili giây - ngày / giờ / phút / giây
        let days = Math.floor(count / 86400000);
        let hours = Math.floor(count % 86400000 / 3600000);
        let minutes = Math.floor(count % 3600000 / 60000);
        let seconds = Math.floor(count % 60000 / 1000);

        // Inner vào HTML 
    }, 1000);
}

selectDay.addEventListener('change', function () {
    selectDay.value === 'newYear' ? countDown(newyearDay) :
        selectDay.value === 'christmas' ? countDown(christmasDay) :
            selectDay.value === 'halloween' ? countDown(halloweenDay) :
                countDown(valentineDay);
})