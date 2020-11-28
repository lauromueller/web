declare module '*.svg' {
  import React = require('react');

  const src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default src;
}

declare module '*.png';
declare module '*.jpg';
