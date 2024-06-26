import type {MouseEventHandler} from 'react';

// !X-Marks icon props
interface XmarkProps {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

// !X-Marks icon
export default function Xmark(props: XmarkProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='0.75em' height='1em' viewBox='0 0 384 512' {...props}>
      <title>X Mark</title>
      <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z' />
    </svg>
  );
}
