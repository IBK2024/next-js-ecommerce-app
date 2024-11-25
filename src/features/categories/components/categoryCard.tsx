import type { CategoriesType } from "@/types/categories";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

// !Props
interface Props {
  category: CategoriesType;
}

// !Category card
function CategoryCard({ category }: Props) {
  return (
    <div className="group flex h-fit w-full flex-row items-center justify-center rounded-lg bg-secondary bg-opacity-10 p-2 transition-all duration-300 ease-in hover:scale-90 hover:cursor-pointer ">
      <div className="relative aspect-square w-1/2">
        <div className="absolute top-10 left-3">
          <h1 className="mb-1 font-bold text-xl">{category.name}</h1>
          <p className="font-normal text-sm">{category.numberOfItems} items</p>
        </div>
        <div className="absolute bottom-10 left-3">
          <Link href={`/categories/${category.name}`} className="mt-4 block">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="size-5 rounded-full bg-secondary p-1 text-primary transition-all group-hover:bg-tertiary"
            />
          </Link>
        </div>
      </div>
      <div className="aspect-square w-1/2">
        <Image
          src={JSON.parse(JSON.stringify(require(`@/assets/images/${category.name.toLowerCase()}.png`)))}
          alt={`${category.name} image`}
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

export default CategoryCard;
