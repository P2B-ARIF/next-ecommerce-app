import { useState } from "react";
import Layout from "../../components/Layout";
import { axios } from "axios";

export default function NewProduct() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");

	const createProduct = async () => {
		const data = { title, description, price };
		await axios.post("/api/products", data);
	};

	return (
		<Layout>
			<form onSubmit={createProduct}>
				<h1>New Products</h1>

				<label>Product Name</label>
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
					placeholder='product name'
				/>

				<label>Description</label>
				<textarea
					value={description}
					onChange={e => setDescription(e.target.value)}
					placeholder='description'
				></textarea>

				<label>Price (in USD)</label>
				<input
					value={price}
					onChange={e => setPrice(e.target.value)}
					type='text'
					placeholder='price'
				/>

				<button type='submit' className='btn-primary'>
					Save
				</button>
			</form>
		</Layout>
	);
}
