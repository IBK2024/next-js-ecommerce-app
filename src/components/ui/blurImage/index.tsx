import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

// !Props
type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  "data-cy"?: string;
};

// !Image component with blur placeholder for dynamic images
async function BlurImage({ alt = "image", src, ...props }: Props) {
  let base64 = "";
  try {
    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
    const result = await getPlaiceholder(buffer);
    base64 = result.base64;
  } catch (_error) {
    console.warn("Error fetching image placeholder:", _error);
    base64 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="; // *1x1 pixel transparent gif
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
