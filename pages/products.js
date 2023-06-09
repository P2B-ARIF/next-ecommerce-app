import Link from "next/link";
import Layout from "../components/Layout";

const products = () => {
	return (
		<Layout>
			<Link
				className='bg-blue-900 text-white rounded-md py-1 px-2'
				href={"/products/new"}
			>
				Add new product
			</Link>
		</Layout>
	);
};

export default products;
