import React from "react";

const Title = ({title}) => {
  return (
    <div className="title-box z-50 mb-6">
      <svg className="svg-title w-full h-36 " viewBox="0 0 960 300">
        <symbol id={`${title}-text`}>
          <text textAnchor="middle" x="50%" y="80%">
            {title}
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref={`#${title}-text`} className="text-copy"></use>
          <use xlinkHref={`#${title}-text`} className="text-copy"></use>
          <use xlinkHref={`#${title}-text`} className="text-copy"></use>
          <use xlinkHref={`#${title}-text`} className="text-copy"></use>
          <use xlinkHref={`#${title}-text`} className="text-copy"></use>
        </g>
      </svg>
    </div>
  );
};

export default Title;
