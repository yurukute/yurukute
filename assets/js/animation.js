const trigger = (window.innerHeight / 5) * 4;
const main = document.getElementsByTagName("main")[0]

main.addEventListener("scroll", () => {
    if (window.innerWidth <= 770)
        showContent(".details", "animate__fadeInRight");
    else
        showContent(".details", ["animate__fadeInRight", "animate__fadeInLeft"]);
    showContent(".project-item", "animate__fadeInUp")
}, false);

function showContent(selector, animations) {
    if (Array.isArray(animations) && animations.length == 2) {
        var odd_animation = animations[0];
        var even_animation = animations[1];
    }
    else odd_animation = even_animation = animations;

    let boxes = document.querySelectorAll(selector);
    let delay = 200;

    boxes.forEach((box, idx) => {
        let top = box.getBoundingClientRect().top;
        let animation = (idx % 2) ? odd_animation : even_animation;
        if (top < trigger) {
            setTimeout(() => {
                box.classList.add("animate__animated", animation);
            }, delay);
            delay += 200;
        }
    });
}