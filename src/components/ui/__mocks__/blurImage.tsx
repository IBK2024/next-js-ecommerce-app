// !Props
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

// !Mock blurImage component
function blurImage({ src, alt, ...props }: Props) {
  return <img src={src} alt={alt} {...props} aria-label={alt} />;
}

export default blurImage;
