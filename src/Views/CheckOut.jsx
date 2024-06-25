import React from "react";
import ToTop from "../Components/ToTop";
import Header from "../Components/Header";
import SubPage_head from "../Components/SubPage_head";
import Footer from "../Components/Footer";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";
import { useCart } from "react-use-cart";

const CheckOut = () => {

  const {cartTotal} = useCart();

  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Checkout" />

      <section className="check_out my-5">
        <div className="d-flex justify-content-center">
          <div className="payment_details col-5">
            <h3 style={{fontWeight:'900', fontSize:'2.3rem'}}>Payment Details</h3>
            <form>
                <input type="radio" name="cart" id="payPal" />
                <label className="ps-3" htmlFor="payPal"><img src="https://wowtheme7.com/tf/fixturbo/demo/assets/img/update-img/payment-method/03.png" alt="" /></label>
                <br /><br />
                <input type="radio" name="cart" id="creditCard" />
                <label className="ps-3" style={{fontWeight:'900', fontSize:'1.2rem'}} htmlFor="payPal">Credit Card</label>
            </form>
            <div className="card_check">
              <button><img src="https://wowtheme7.com/tf/fixturbo/demo/assets/img/update-img/payment-method/01.png" alt="." /></button>
              <button><img src="https://wowtheme7.com/tf/fixturbo/demo/assets/img/update-img/payment-method/02.png" alt="." /></button>
              <button><img src="https://wowtheme7.com/tf/fixturbo/demo/assets/img/update-img/payment-method/04.png" alt="." /></button>
              <button><img src="https://wowtheme7.com/tf/fixturbo/demo/assets/img/update-img/payment-method/05.png" alt="." /></button>
            </div>
            <form method="post" className="card_data">
              <label htmlFor="fullName">Full Name</label>
              <input className="col-12" type="text" id="fullName" name="full name"/><br /><br />
              <label htmlFor="fullName">Card Number</label>
              <input className="col-12" type="password" id="fullName" name="Card Number"/><br /><br />
              <p><b>Total Price: <span style={{color:'#e8092e'}}>{cartTotal} $</span></b></p>
              <button className="btn">CHECK OUT</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CheckOut;
