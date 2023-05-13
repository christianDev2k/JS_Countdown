const selectDay = document.querySelector('#seclectDay');
const newyearDay = new Date('2024-01-01');
const christmasDay = new Date('2023-12-25');
const halloweenDay = new Date('2023-10-31');
const valentineDay = new Date('2024-02-14');
const countDownBg = document.querySelector('.countdown');
const showExpired = document.querySelector('#showExpired');
const showResult = document.querySelectorAll('.showDay');

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

        // Điều kiện dừng và show kết quả
        count -= 1000;
        if (count <= 0) {
            clearInterval(x);
            showExpired.innerText = 'EVENT EXPIRED';
            showResult.forEach(function (item) {
                item.innerHTML = '---';
            })
        }
        selectDay.addEventListener('change', function () {
            clearInterval(x);
        });

        // Quy đổi thời gian từ mili giây - ngày / giờ / phút / giây
        let time = [];
        time[0] = Math.floor(count / 86400000);
        time[1] = Math.floor(count % 86400000 / 3600000);
        time[2] = Math.floor(count % 3600000 / 60000);
        time[3] = Math.floor(count % 60000 / 1000);

        // Inner vào HTML 
        if (count > 0) {
            showResult.forEach(function (item, index) {
                item.innerHTML = time[index];
            });
        }
    }, 1000);
}

selectDay.addEventListener('change', function () {
    selectDay.value === 'newYear' ? countDown(newyearDay) :
        selectDay.value === 'christmas' ? countDown(christmasDay) :
            selectDay.value === 'halloween' ? countDown(halloweenDay) :
                countDown(valentineDay);
})