gsap.registerPlugin(TextPlugin);
gsap.to('#myskill-1', {
  duration: 1.5,
  delay: 1.2,
  text: "Cloud & Back-End Developer",
});

gsap.from('header', { duration: 1.5, y: '-100%', ease: 'bounce', opacity: 0 });
gsap.from('#say-hello', { duration: 1.5, x: '-100%', ease: 'bounce', opacity: 0 });
