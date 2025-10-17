import {gsap} from "gsap";
import {RefObject} from "react";

export const animationMes1 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(ref.current, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut",
    })


  return tl;
}

export const animationMes2 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.1 })
    .to(ref.current, {
      scale: 1,
      opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })


  return tl;
}

export const animationMes3 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.2 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
    })



  return tl;
}

export const animationMes4 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.3 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })


  return tl;
}

export const animationMes5 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.4 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })

  return tl;
}

export const animationMes6 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.5 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })

  return tl;
}


export const animationMes7 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.6 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })

  return tl;
}

export const animationMes8 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.7 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })

  return tl;
}

export const animationMes9 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.8 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })

  return tl;
}

export const animationMes10 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 0.9 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })


  return tl;
}

export const animationMes11 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 1.0 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })


  return tl;
}

export const animationMes12 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 1.1 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.inOut",
  })


  return tl;
}