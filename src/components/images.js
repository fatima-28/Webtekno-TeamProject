import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../components/SingleProductCard/SingleProductCard.scss";
export default function Images(props) {
  const { data, rangePrice, brend, category } = props;
  let modifiedData = data;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;
  useEffect(() => {
    modifiedData = data.filter(
      (image) =>
        image.price <= Number(rangePrice) &&
        image.brand.toLowerCase().includes(brend.toLowerCase()) &&
        image.category.toLowerCase().includes(category.toLowerCase())
    );
    console.log(modifiedData);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(modifiedData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(modifiedData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, rangePrice, brend, category]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % modifiedData.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {currentItems.map((image) => {
        return image.price <= rangePrice &&
          image.brand.toLowerCase().includes(brend.toLowerCase()) &&
          image.category.toLowerCase().includes(category.toLowerCase()) ? (
          <div className="product-single-card1" key={image.id}>
            <div className="single-card-item card-item-img">
              <img src={image.url} alt={image.title} className="card-image" />
            </div>
            <div className="single-card-item card-item-context">
              <div className="card-item-text-part ">
                <p className="card-item-title card-text-part">{image.title}</p>

                <p className="card-item-price card-text-part">
                  {image.price} $
                </p>
              </div>
              <div className="card-item-icon-main">
                <button className="card-button">Add to cart</button>
              </div>
            </div>
          </div>
        ) : null;
      })}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
