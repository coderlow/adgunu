function updateCountdown() {
    const eventDate = new Date('2024-09-29T00:00:00'); // Tədbir tarixi
    const now = new Date();
    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = 'Tədbir artıq başladı!';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

function showResponse(responseType) {
    const thankYouResponse = document.getElementById('thank-you-response');
    const notThankYouResponse = document.getElementById('not-thank-you-response');

    if (responseType === 'thank-you') {
        thankYouResponse.style.display = 'block';
        notThankYouResponse.style.display = 'none';
    } else {
        thankYouResponse.style.display = 'none';
        notThankYouResponse.style.display = 'block';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

