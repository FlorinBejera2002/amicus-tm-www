import React from "react";

const CustomHeroBg = () => {
  return (
    <div className="custom-hero-bg loaded">
      <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
        <defs>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="0.441602%"
            fy="50%"
            id="Gradient1"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              repeatCount="indefinite"
              values="0%;3%;0%"
            ></animate>
            <stop offset="0%" stopColor="rgba(251, 193, 5, 1)"></stop>
            <stop offset="100%" stopColor="rgba(251, 193, 5, 0)"></stop>
          </radialGradient>
        </defs>
        <rect
          fill="url(#Gradient1)"
          height="100%"
          transform="rotate(334.41 50 50)"
          width="100%"
          x="13.744%"
          y="1.18473%"
        >
          <animate
            attributeName="x"
            dur="20s"
            repeatCount="indefinite"
            values="25%;0%;25%"
          ></animate>
          <animate
            attributeName="y"
            dur="21s"
            repeatCount="indefinite"
            values="0%;25%;0%"
          ></animate>
          <animateTransform
            attributeName="transform"
            dur="7s"
            from="0 50 50"
            repeatCount="indefinite"
            to="360 50 50"
            type="rotate"
          ></animateTransform>
        </rect>
      </svg>
    </div>
  );
};

export default CustomHeroBg;
