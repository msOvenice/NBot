let flag = 0;
const animItems = document.querySelectorAll('.develop__pie');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    if (i == 0) {
                        const circle = document.getElementById('circleF');
                        circle.style.animation = 'pie 1.5s linear forwards';
                        circle.style.animationDelay = '.5s';
                    }
                    if (i == 1) {
                        const circle = document.getElementById('circleS');
                        circle.style.animation = 'pieSecond 1.5s linear forwards';
                        circle.style.animationDelay = '.5s';
                    }
                    if (flag != 2)
                        numberCount();
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }


    setTimeout(() => {
        animOnScroll();
    }, 300);
}
// number

function numberCount() {
    flag++;
    let number = document.querySelectorAll('#number');
    for (let i = 0; i < number.length; i++) {
        if (i == 0) {
            setTimeout(() => {
                drawPie(number[i], 70, 23);
            }, 400);
        } else if (i == 1) {
            setTimeout(() => {
                drawPie(number[i], 49, 31);
            }, 400);
        }
    }
}

function drawPie(number, stop, time) {
    let counter = 0;
    setInterval(() => {
        if (counter === stop) {
            clearInterval();
        } else {
            counter++;
            number.innerHTML = counter + '%';
        }
    }, time)
}