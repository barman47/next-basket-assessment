import { notFound } from 'next/navigation';
import Products from '@/app/(products)/Products';
import { Metadata } from 'next';
import Partners from './Partners';
import ProductDescription from './ProductDescription';
import ProductDetail from './ProductDetail';
import { Product } from '@/interfaces';
import { ApiResponse } from '@/utils/constants';

interface Props {
    params: {
        id: string;
    }
}

export const dynamicParams = true; // Will generate a page if it does not exist. True is the default

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products/${id}`);

    if (!res.ok) {
        return notFound();
    }

    const product: Product = await res.json();

    const { title, description, thumbnail } = product;
   
    return {
        title: `Bandage | ${title}`,
        description: description,
        openGraph: {
            images: [thumbnail],
        },
        twitter: {
            title: title,
            card: "summary",
            description: description,
            creator: 'Bandage',
            images: {
                url: thumbnail,
                alt: title
            }
        }
    }
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products`);

    const productData: ApiResponse = await res.json();
    const products: Product[] = productData.products;

    return products.map((product: Product) => ({ id: product.id.toString() }))
}

async function getProduct (id: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products/${id}`, { next: { 
        revalidate: 60 * 60 * 24 
    } });
   
	if (!res.ok) {
	    notFound();
	}
	return res.json();
}

const ProductDetailsPage: React.FC<Props> = async ({ params }) => {
    const product: Product = await getProduct(params.id);

	return (
		<main>
            <ProductDetail product={product} />
            <ProductDescription description={product.description} image={product.thumbnail} />
			<Products />
            <Partners />
		</main>
	);
}

export default ProductDetailsPage;
