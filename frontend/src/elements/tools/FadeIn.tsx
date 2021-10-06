import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function FadeIn(props:any) {
  return (
    <ScrollAnimation  animateOnce={true} className={props.className} animateIn="fadeIn" duration={0.4} delay={0}>
{props.children}

    </ScrollAnimation >
  );
}

export default FadeIn;
