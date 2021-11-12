// 初始化
const time = g('#time')
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1

time.textContent = `${year}年 ${month}月`

// 帮助函数
function g(selector) {
    return document.querySelector(selector)
}

function gs(selector){
    return document.querySelectorAll(selector)
}