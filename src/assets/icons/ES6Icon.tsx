import React from 'react';
import { TIconProps } from './types'; 

export default ({ width = 20, height = 20, fill = '#004E7B' }: TIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256" style={{ pointerEvents: "none"}} role="img" aria-labelledby="title"><title id="title">ES6 Icon</title><path fill={fill} d="M0 0h256v256H0z"/><path d="M105.536 159.959h39.157v-10.653h-27.064v-16.507h24.953v-10.653h-24.953v-15.452h27.064V96.041h-39.157v63.918zm91.462-17.371c0-12.765-.864-15.548-18.043-19.675-11.037-2.687-11.229-2.879-11.229-10.173 0-5.566 1.44-7.294 9.598-7.294 5.566 0 11.804.768 17.083 1.92l1.344-10.173c-6.335-1.44-13.053-2.112-18.62-2.112-16.219 0-21.497 5.759-21.497 17.371 0 13.533 2.111 16.508 17.563 19.963 11.517 2.495 11.709 3.07 11.709 10.173 0 6.142-1.44 7.966-10.174 7.966-6.334 0-12.092-1.152-18.042-2.976l-2.112 9.502c4.223 2.015 12.669 3.839 19.963 3.839 18.906 0 22.457-6.239 22.457-18.331zm22.266-23.801c0-9.79 4.703-11.71 16.027-11.71 2.016 0 6.239.289 9.022.865l.768-9.79c-2.88-.671-7.486-1.151-11.037-1.151-17.467 0-26.489 5.374-26.489 22.265v23.322c0 11.037 3.263 18.33 19.77 18.33 15.068 0 19.675-7.485 19.675-17.466v-4.607c0-11.037-4.703-15.836-16.315-15.836-4.127 0-8.062.576-11.421 1.728v-5.95zm9.597 14.3c4.223 0 6.43 1.44 6.43 6.046v4.703c0 4.894-1.92 7.006-7.965 7.006-6.047 0-8.062-1.728-8.062-7.006v-8.734c2.687-1.152 6.142-2.015 9.597-2.015z" fill="#fff"/></svg>
);
