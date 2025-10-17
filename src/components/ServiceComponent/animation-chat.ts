import {gsap} from "gsap";
import {RefObject} from "react";

export const animationMes1 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(ref.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    })


  return tl;
}

export const animationMes2 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 1 })
    .to(ref.current, {
      scale: 1,
      opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  })


  return tl;
}

export const animationMes3 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 2 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
    })



  return tl;
}

export const animationMes4 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 3 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })


  return tl;
}

export const animationMes5 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 4 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })

  return tl;
}

export const animationMes6 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 5 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })

  return tl;
}


export const animationMes7 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 6 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })

  return tl;
}

export const animationMes8 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 7 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })

  return tl;
}

export const animationMes9 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 8 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })

  return tl;
}

export const animationMes10 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 9 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })


  return tl;
}

export const animationMes11 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 10 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })


  return tl;
}

export const animationMes12 = (ref: RefObject<HTMLDivElement | null>) => {
  const tl = gsap.timeline({ paused: true });

  tl.to({}, { duration: 11 }).to(ref.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  }).to({}, { duration: 0.5 })


  return tl;
}