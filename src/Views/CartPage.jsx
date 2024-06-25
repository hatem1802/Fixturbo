import React from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import ToTop from "../Components/ToTop";
import SubPage_head from "../Components/SubPage_head";
import Footer from "../Components/Footer";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, emptyCart, updateItemQuantity, removeItem, isEmpty, totalUniqueItems, cartTotal, totalItems } =
    useCart();

  if (isEmpty) {
    return (
      <div className="emptyCart d-flex flex-column justify-content-center align-items-center p-5 m-5">
        <h1>Your Cart Is Empty</h1>
        <Link className="btn m-2" to="/shop">
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <section className="cart" style={{ margin: "10rem 0" }}>
      <div className="container p-0">
        <table className="mx-auto col-12">
          <thead style={{ textAlign: "center" }}>
            <tr style={{ background: "#ecf0f1", padding: "2rem 0" }}>
              <th className="py-4 fw-bold">Image</th>
              <th className="py-4 fw-bold">Product Name</th>
              <th className="py-4 fw-bold">Price</th>
              <th className="py-4 fw-bold">Total</th>
              <th className="py-4 fw-bold">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((e) => {
              return (
                <tr className="py-3 text-center" key={e.id}>
                  <td>
                    <img
                      src={`${e.image}`}
                      style={{ width: "150px" }}
                      alt="."
                    />
                  </td>
                  <td className="col-2">
                    <h5>
                      {e.make} {e.model}
                    </h5>
                  </td>
                  <td>
                    <b style={{ color: "#e8092e", fontSize: "1.2rem" }}>
                      $ {e.price}
                    </b>
                  </td>
                  <td className="pb-0">
                    <button
                      onClick={() => {
                        updateItemQuantity(e.id, e.quantity - 1);
                      }}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <b
                      style={{
                        border: "1px solid #e8092e",
                        borderRadius: "5px",
                      }}
                      className="px-4 py-1 mx-2"
                    >
                      {e.quantity}
                    </b>
                    <button
                      onClick={() => {
                        updateItemQuantity(e.id, e.quantity + 1);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <br />
                    <button
                      onClick={() => {
                        removeItem(e.id);
                      }}
                      style={{ background: "white" }}
                      className="mt-2"
                    >
                      <i
                        style={{ color: "#e8092e" }}
                        className="fas fa-trash-alt fs-5"
                      ></i>
                    </button>
                  </td>
                  <td className="col-2">
                    <b style={{ color: "#e8092e", fontSize: "1.2rem" }}>
                      $ {e.itemTotal}
                    </b>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{ textAlign: "right", margin: "2rem 0 0 0" }}
          className="btns_box text-center"
        >
          <button
            className="btn m-2"
            onClick={(e) => {
              emptyCart();
            }}
          >
            RESET CART
          </button>
          <Link className="btn m-2" to="/shop">
            CONTINUE SHOPPING
          </Link>
        </div><br /><br />
        <div className="cart_totals">
          <h4><b>Cart Totals</b></h4>
          <table className="col-6">
            <tbody>
              <tr>
                <td className="col-5" style={{background:'#f9fbfb'}}>Total Models</td>
                <td style={{color:'#e8092e'}}>{totalUniqueItems} Models</td>
              </tr>
              <tr>
                <td className="col-5" style={{background:'#f9fbfb'}}>Total cars</td>
                <td style={{color:'#e8092e'}}>{totalItems} cars</td>
              </tr>
              <tr>
                <td style={{background:'#f9fbfb'}}>Total Price</td>
                <td style={{color:'#e8092e'}}>$ {cartTotal}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/check_out" className="btn mt-4">PROCEED TO CHECKOUT</Link>
        </div>
      </div>
    </section>
  );
};

const CartPage = () => {
  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Cart" />

      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
