import gsap from "gsap";

export default (trigger, opts) =>
  gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top center",
      once: true,
      ...opts,
    },
  });
