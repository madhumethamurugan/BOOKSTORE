import React from "react";
import  './ProductListingCard.styles.css';
import { Link } from 'react-router-dom';

const ProductListingCard = ({ bookData }) => {
    return (
        <div className='product-listing-card'>
            <div className='product-listing-image-container'>
                <img src={bookData.book_url} alt='product-listing-image' className='product-listing-image'/>
            </div>
            <div className='product-listing-details-container'>
                <h3>{bookData.book_name}</h3>
                <p className='author-name'>{bookData.author_name}</p>
                <p className='pricing'>&#8377;{bookData.price}</p>
                <Link to={`/book-details/${bookData.id}`} className='product-listing-button'>Add To Cart</Link>
            </div>
        </div>
    )
}

export default ProductListingCard;