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
  let base64 = "";
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const result = await getPlaiceholder(buffer);
    base64 = result.base64;
  } catch (error) {
    console.warn(
      "⚠️ Failed to generate blurDataURL:",
      error instanceof Error ? error.message : String(error)
    );
  }

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
