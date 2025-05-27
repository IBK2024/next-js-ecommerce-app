import BlurImage from "@/components/ui/blurImage";
import type { CategoryType } from "@/features/categories/types/categoriesTypes";
import Link from "next/link";

// !Props
interface Props {
  category: CategoryType;
}

// !Category card
function CategoryCard({ category: { name, numberOfItems, description, image } }: Props) {
  return (
    <Link
      href={`/categories/${name.toLowerCase()}`}
      className="group block overflow-hidden rounded-lg border-4 border-gray-200 shadow-sm transition-shadow duration-200 hover:shadow-md"
      data-testid="category-card"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <BlurImage
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={300}
          height={300}
          src={image}
          alt={`${name} image`}
        />
      </div>
      <div className="p-4" data-testid="category-card-content">
        <h1 className="font-medium text-lg">{name}</h1>
        <p className="text-gray-600 text-sm">
          {description}
          <br />
          {numberOfItems} items
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;
