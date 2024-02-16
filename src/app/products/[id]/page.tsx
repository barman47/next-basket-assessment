import Products from '@/app/(products)/Products';
import { Metadata } from 'next';
import Partners from './Partners';
import ProductDescription from './ProductDescription';

export const metadata: Metadata = {
    title: "Bandage"
};

const ProductDetailsPage: React.FC<{}> = () => {
	return (
		<main>
            <ProductDescription />
			<Products />
            <Partners />
		</main>
	);
}

export default ProductDetailsPage;
