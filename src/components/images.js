import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
export default function Images(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
        // <div className="single-card-item card-item-img">
        //     <img src=${data.url} className="card-image" alt="image" />
        // </div>
        // <div className="single-card-item card-item-context">
        //     <div className="card-item-text-part">
        //         <p className="card-item-title card-text-part">${data.title}</p>
        //         <p className="card-item-price card-text-part">${data.id} $</p>
        //     </div>
        //     <div className="card-item-icon-main">
        //         <div className="card-item-icon">
        //             {/* <i className="fa-solid fa-bag-shopping"></i> */}
        //             <p>Add to cart</p>
        //         </div>
        //     </div>
        // </div>
    

    <>
      <div className="main-products">
        {currentItems.map((image) => 
            <div className="product-single-card1">
              <div className="single-card-item card-item-img" key={image.id}>
                <img src={image.url} alt={image.title} className="card-image" />
              </div>
              <div className="single-card-item card-item-context">
                <div className="card-item-text-part ">
                  <p
                    className="card-item-title card-text-part"
                    
                  >
                    {image.title}
                  </p>

                  <p
                    className="card-item-price card-text-part"
                   
                  >
                    {image.price} $
                  </p>
                </div>
                <div className="card-item-icon-main">
                  <div className="card-item-icon">
                    <p>Add to cart</p>
                  </div>
                </div>
              </div>
            </div>
          
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
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
