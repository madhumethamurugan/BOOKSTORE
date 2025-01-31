import React from "react";
import './bookpage.styles.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from '../../components/forms/searchInputForm/SearchInputForm';
import ProductListingAll from "../../components/layouts/productlistingall/ProductListingAll";
import Footer from "../../components/layouts/footer/Footer";

const BooksPage = () => {
    return (
        <div>
            <Navbar darkTheme={true} />

            <div className="search-container">
                <h2>Find the <span className="text-primary">Books</span> that you want</h2>
                <SearchInputForm darkTheme={false}/>
            </div>

            <ProductListingAll />
            <Footer />
        </div>
    )
}

export default BooksPage;