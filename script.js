
const tl = gsap.timeline();

// Animation for ".navUp" and ".navDown" elements
tl.from(".navUp, .navDown", {
  opacity: 0,
  y: 20,
  duration: 1,
});

// Animation for ".heading > h1" element
tl.from(".heading > h1", {
  opacity: 0,
  scale: 1.3,
  duration: 1.5,
});

// Animation for ".butt > button" element
tl.from(".butt > button", {
  // opacity: 0,
  y: 20,
  // delay: 3,
  // ease: "power2.out",
});
tl.from(["#purse", ".cosmetics"], {
  x: -60,
  duration: 1,
  opacity: 0,
  scale: 1.6,
});
tl.from(["#bhaloo", ".coffee"], {
  x: 60,
  duration: 1,
  opacity: 0,
  scale: 1.6,
  delay: "-1",
});
tl.from("#arrow", {
  y: 20,
  opacity: 0,
  delay:'-1',
  repeat: -1,
  yoyo: true,
});
