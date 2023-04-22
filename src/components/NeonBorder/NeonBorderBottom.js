import React from "react";

function NeonBorderBottom({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      data-inlinesvg=".inlineSvgFile-1"
      data-name="corner-top-left"
      version="1.1"
      className={className}
    >
      <defs>
        <linearGradient x1="0%" x2="100%" y1="0%" y2="100%">
          <stop className="gradient1" offset="0"></stop>
          <stop className="gradient2" offset="0.5"></stop>
          <stop className="gradient1" offset="1"></stop>
        </linearGradient>
        <filter
          id="filter6463"
          width="2"
          height="2"
          x="-0.5"
          y="-0.5"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodColor="#F3004B"
            floodOpacity="1"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="5"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="SourceGraphic"
            in2="offset"
            operator="over"
            result="fbSourceGraphic"
          ></feComposite>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feFlood
            floodColor="#F3004B"
            floodOpacity="1"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="fbSourceGraphic"
            operator="in"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="10"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="fbSourceGraphic"
            in2="offset"
            operator="over"
            result="fbSourceGraphic"
          ></feComposite>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feFlood
            floodColor="#F3004B"
            floodOpacity="1"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="fbSourceGraphic"
            operator="in"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="20"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="fbSourceGraphic"
            in2="offset"
            operator="over"
            result="fbSourceGraphic"
          ></feComposite>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feFlood
            floodColor="#F3004B"
            floodOpacity="0.118"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="fbSourceGraphic"
            operator="in"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="160"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="fbSourceGraphic"
            in2="offset"
            operator="over"
            result="fbSourceGraphic"
          ></feComposite>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feFlood
            floodColor="#F3004B"
            floodOpacity="0.588"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="fbSourceGraphic"
            operator="out"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="5"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="offset"
            in2="fbSourceGraphic"
            operator="atop"
            result="fbSourceGraphic"
          ></feComposite>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feFlood
            floodColor="#F3004B"
            floodOpacity="0.588"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="fbSourceGraphic"
            operator="out"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="5"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="offset"
            in2="fbSourceGraphic"
            operator="atop"
            result="fbSourceGraphic"
          ></feComposite>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feFlood
            floodColor="#F3004B"
            floodOpacity="0.078"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="fbSourceGraphic"
            operator="out"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="50"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="offset"
            in2="fbSourceGraphic"
            operator="atop"
            result="fbSourceGraphic"
          ></feComposite>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feFlood
            floodColor="#F3004B"
            floodOpacity="0.078"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="fbSourceGraphic"
            operator="out"
            result="composite1"
          ></feComposite>
          <feGaussianBlur
            in="composite1"
            result="blur"
            stdDeviation="50"
          ></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offset"></feOffset>
          <feComposite
            in="offset"
            in2="fbSourceGraphic"
            operator="atop"
            result="composite2"
          ></feComposite>
        </filter>
      </defs>
      <g className="layer">
        <path
          fill="#f5f6f7"
          fillOpacity="1"
          d="M105 105h292l-20 20H122a5 5 0 00-5 5v255l-20 20V113a8 8 0 018-8z"
          filter="url(#filter6463)"
          transform="rotate(-180 247 255)"
        ></path>
      </g>
    </svg>
  );
}

export default NeonBorderBottom;
