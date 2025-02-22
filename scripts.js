document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing");

    const texts = ["Hello!", "I'm an engineer."]; // 출력할 문구 배열
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            typingElement.textContent += currentText.charAt(charIndex);
            charIndex++;

            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, 1000); // 1초 유지 후 삭제 시작
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // 다음 문구로 이동 (무한 반복)

                setTimeout(typeEffect, 500); // 0.5초 후 다음 문구 출력
                return;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100); // 삭제는 빠르게, 타이핑은 느리게
    }

    typeEffect();
});
