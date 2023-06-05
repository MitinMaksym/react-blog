declare module '*.module.css'
declare module '*.module.scss'

declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.webp'

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
