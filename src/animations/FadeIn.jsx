
  // import { useEffect, useRef } from "react";
  // import gsap from "gsap";
  // import { ScrollTrigger } from "gsap/ScrollTrigger";

  // gsap.registerPlugin(ScrollTrigger);

  // const FadeIn = ({
  //   children,
  //   blur = false,
  //   duration = 800,
  //   easing = "ease-out",
  //   initialOpacity = 0,
  // }) => {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     if (!ref.current) return;

  //     const ctx = gsap.context(() => {
  //       gsap.fromTo(
  //         ref.current,
  //         {
  //           opacity: initialOpacity,
  //           filter: blur ? "blur(8px)" : "none",
  //         },
  //         {
  //           opacity: 1,
  //           filter: blur ? "blur(0px)" : "none",
  //           ease: easing,
  //           duration: duration / 1000,
  //           scrollTrigger: {
  //             trigger: ref.current,
  //             start: "top 90%",
  //             end: "top 5%",
  //             // scrub: true,
  //             onLeave: () =>
  //               gsap.to(ref.current, {
  //                 opacity: initialOpacity,
  //                 filter: blur ? "blur(8px)" : "none",
  //                 duration: duration / 1000,
  //                 ease: easing,
  //               }),
  //             onEnterBack: () =>
  //               gsap.to(ref.current, {
  //                 opacity: 1,
  //                 filter: blur ? "blur(0px)" : "none",
  //                 duration: duration / 1000,
  //                 ease: easing,
  //               }),
  //           },
  //         }
  //       );
  //     }, ref);

  //     return () => ctx.revert();
  //   }, [blur, duration, easing, initialOpacity]);

  //   return <div ref={ref}>{children}</div>;
  // };

  // export default FadeIn;

import React, { useEffect, useRef, useState } from "react";

export const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  initialOpacity = 0,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fade IN when sufficiently visible
        if (entry.intersectionRatio >= 0.3) {
          setVisible(true);
        }

        // Fade OUT when mostly out of view
        if (entry.intersectionRatio <= 0.2) {
          setVisible(false);
        }
      },
      {
        threshold: [0, 0.1, 0.3, 1],
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : initialOpacity,
        filter: blur
          ? visible
            ? "blur(0px)"
            : "blur(8px)"
          : "none",
        transition: `
          opacity ${duration}ms ${easing},
          filter ${duration}ms ${easing}
        `,
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
