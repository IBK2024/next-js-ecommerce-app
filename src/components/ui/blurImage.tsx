import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

// !Props
interface Props {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}

// !Image component with blur placeholder for dynamic images
async function BlurImage({ alt = "image", src, ...props }: Props) {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      alt={alt} // *Default alt text if not provided
      placeholder="blur"
      blurDataURL={base64}
      {...props}
    />
  );
}

export default BlurImage;
