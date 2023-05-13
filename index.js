const counterE1 = document.querySelector(".counter")

const barE1 = document.querySelector(".loading-bar-front")

let index = 0;

updateNum()

function updateNum() {
    counterE1.innerText = index + "%"
    barE1.style.width = index + "%"
    index++
    if (index < 101) {
        setTimeout(updateNum, 20)
    }
}

