// Countdown Timer
const countdown = () => {
    const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = christmasDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

setInterval(countdown, 1000);

// Tạo hiệu ứng tuyết rơi
const createSnow = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    document.getElementById('snowflakes').appendChild(snowflake);
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 6}s`;
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
    // Xóa tuyết khi animation kết thúc
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
};



(function () {
    function r(a) {
         gsap.killTweensOf(a,
             { opacity: !0 }); gsap.fromTo(a, { opacity: 1 }, { duration: .07, opacity: Math.random(), repeat: -1 }) 
            } function t(a) {
        e && (a = l[d], gsap.set(a, { x: gsap.getProperty(".pContainer", "x"), y: gsap.getProperty(".pContainer", "y"), scale: m() }), gsap.timeline().to(a, {
            duration: gsap.utils.random(.61, 6), physics2D: { velocity: gsap.utils.random(-23, 23), angle: gsap.utils.random(-180, 180), gravity: gsap.utils.random(-6, 50) }, scale: 0, rotation: gsap.utils.random(-123, 360), ease: "power1", onStart: r, onStartParams: [a],
            onRepeat: function (b) { gsap.set(b, { scale: m() }) }, onRepeatParams: [a]
        }), d++, d = 201 <= d ? 0 : d)
    } MorphSVGPlugin.convertToPath("polygon"); document.querySelector(".pContainer"); var u = document.querySelector(".mainSVG"); document.querySelector("#star"); var c = document.querySelector(".sparkle"); document.querySelector("#tree"); var e = !0, n = "#E8F6F8 #ACE8F8 #F6FBFE #A2CBDC #B74551 #5DBA72 #910B28 #910B28 #446D39".split(" "), p = ["#star", "#circ", "#cross", "#heart"], l = [], d = 0; gsap.set("svg", { visibility: "visible" }); gsap.set(c,
        { transformOrigin: "50% 50%", y: -100 }); c = function (a) { var b = [], f = MotionPathPlugin.getRawPath(a)[0]; f.forEach(function (v, g) { var h = {}; h.x = f[2 * g]; h.y = f[2 * g + 1]; g % 2 && b.push(h) }); return b }; c(".treePath"); var q = c(".treeBottomPath"); c = gsap.timeline({ delay: 0, repeat: 0 }); var k, m = gsap.utils.random(.5, 3, .001, !0); (function () {
            for (var a = 201, b; -1 < --a;)b = document.querySelector(p[a % p.length]).cloneNode(!0), u.appendChild(b), b.setAttribute("fill", n[a % n.length]), b.setAttribute("class", "particle"), l.push(b), gsap.set(b, {
                x: -100,
                y: -100, transformOrigin: "50% 50%"
            })
        })(); 
})();

setInterval(createSnow, 400);
