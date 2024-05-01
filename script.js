function toggleMenu() {
  var navbar = document.querySelectorAll("nav a");
  navbar.forEach(function (link) {
    link.style.display = link.style.display === "block" ? "none" : "block";
  });
}

var tl = gsap.timeline();
if (window.innerWidth > 480) {
  tl.from("nav a", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    delay: 0.2,
    stagger: 0.2,
  });
}

tl.from(".page1 h1", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".download-cv a", {
  opacity: 0,
  y: 10,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.2,
});

window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 6,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0)",
      duration: 6,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true,
});
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    const targetId = this.getAttribute("href").substring(1);

    scroll.scrollTo(`#${targetId}`);
  });
});
