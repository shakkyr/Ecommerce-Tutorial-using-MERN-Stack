import React from 'react';
import Card from './Card';
// redux
import { useSelector } from 'react-redux'; //! selector helps us to pull state properties from redux

const AdminBody = () => {
	const { products } = useSelector(state => state.products);

	return (
		<div className='container'>
			<div className='row'>
				<div className='card-deck'>
					{products &&
						products.map(product => (
							<Card
								key={product._id}
								product={product}
								adminPage={true}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default AdminBody;
