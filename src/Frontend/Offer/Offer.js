import React from 'react';
import "./Offer.css";
import { Carousel } from 'react-carousel-minimal';
import "bootstrap-icons/font/bootstrap-icons.css";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { FaTicketAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import Axios from 'axios';

function Offer() {
  // const creditcard = <CreditCardIcon />;
  const [offername,] = useState("");
  const [offercode,] = useState("");
  const [image,] = useState("");
  const [offerlist, setOfferList] = useState([]);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);
  useEffect(() => {
    Axios.post('http://localhost:3004/offer/offers').then((response) => {
      if (response) {
        setOfferList(response.data);
        console.log(response.data);
      }
      else {
        console.log("NOt responed");
      }
    });
  }, [])
  /*const submit1 = () => {
    Axios.post("http://localhost:3007/api/insert2", { offername: offername, offercode: offercode, image: image, today: today })
    setOfferList([...offerlist, { offername: offername, offercode: offercode, image: image, today: today }
      ,]);
    alert("successful insert");
  };*/

  const data = [
    {
      image: "/images/img1.jpg"
    },
    {
      image: "/images/img2.jpg"
    },
    {
      image: "/images/img3.jpg"
    },
    {
      image: "/images/img4.jpg"
    },
    {
      image: "/images/img5.jpg"
    },
    /*{
       "./offerimage/filmy_pass_banner.jpg"
    }*/

  ];



  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="350px"
            radius="5px"
            automatic={true}
            dots={true}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              maxWidth: "100%",
              maxHeight: "90px",
              margin: "10px auto",
            }}
          />
        </div>
      </div>

      <div className="searchBar">
        <form>
          {/* <i className="bi bi-search"></i> */}
          <input type="search" placeholder="Search for Offer by Name or Bank" />
          <i className="bi bi-search"></i>
        </form>
      </div>

      <div className="filter">
        <h3>F I L T E R &nbsp; O F F E R S &nbsp; B Y</h3>
      </div>

      <div className="pay-card">
        <CreditCardIcon style={{ fontSize: "60px" }} />
        <h5>Credit Card</h5>
        <CreditCardIcon style={{ fontSize: "60px" }} />
        <h5>Debit Card</h5>
        <FaTicketAlt style={{ fontSize: "60px" }} />
        <h5>Book My Show</h5>
        <CardGiftcardIcon style={{ fontSize: "60px" }} />
        <h5>Rewards</h5>
      </div>
      <div className="card-header">
        {offerlist.map((val) => {
          return (
            // <div className="card">
            // <div className="card-wrapper">
            //   <div className="col-3">
            //     <img className="card-img-top" src={val.image} alt="" />
            //     <div className="card-body">
            //       <h4 className="card-title">{val.offername}</h4>
            //       <p className="card-text">{val.Date}</p>
            //     </div>
            //     <div className="hover-effect">
            //       <h3>About Offer</h3>
            //       <h6>{val.offercode} <br /> DISCOUNT OFFER</h6>
            //       <br />
            //       <h5>Available Offer</h5>
            //     </div>
            //   </div>
            //   {/* <div className="card">
            //       <h1>{val.offername}</h1>
            //       <p>{val.offercode} </p> 
            //       <p1>{val.image}</p1>
            //     </div> */}
            // </div>

            <div className="cardList">
              <img className="card-img-top" src={"/images/" + val.image} alt="" />
              <h4 className="card-title">{val.offername}</h4>
              <p className="card-text">{val.Date}</p>
              <div className="hover-effect">
                <h3>About Offer</h3>
                <h6>ICICI BANK CREDIT CARD 25% <br /> DISCOUNT OFFER</h6>
                <br />
                <h5>Available Offer</h5>
                <h4> {val.offercode} </h4>
              </div>
            </div>
          );
        }
        )}
      </div>
      {/* <button onClick={submit1}>SubmitOffer</button> */}



      <div className="offer-tickets">
        <h6>Online-Tickets → Ahmedabad → Offers</h6>
      </div>

      <div className="offer-desc">
        <h5>A Plethora of Offers and Discounts at BookMyShow!</h5>
        <h6>If you are searching for some discount offers on movie tickets,
          then BookMyShow is the place for you! Browse through our huge array
          of movie ticket offers and save big every time you book movies tickets with us.
          Discover these special offers on movie tickets,customized especially for you!</h6>

        <div className="c-card">
          <div className="c-offers">
            <h5>Card Offers</h5>
            <h6>There is a gamut of credit and debit card offers provided by some of the leading
              banks in India like ICICI, RBL, Citi Bank, SBI, Axis Bank, HDFC, RBS, IndusInd,
              HDFC and many more. By availing one of these Debit or credit card offers,
              you can save massively on your movie tickets.</h6>
          </div>

          <div className="c-offers">
            <h5>Wallet and recharge offers</h5>
            <h6>Wallets and online recharge providers also offer great discounts and deals on
              movie ticket booking. Using providers like Freecharge, MobiKwik, PayUMoney Payzapp,
              Ola Money, Pockets by ICICI, and Airtel Money while booking movie tickets on our
              platform, you can get instant cashback and discount.</h6>
          </div>

          <div className="c-offers">
            <h5>Cinema Offers</h5>
            <h6>Cinemas like PVR and Cinepolis runs some special offers on movies with BookMyShow.
              So, here is yet another reason why you should book your movie tickets with us!</h6>
          </div>

          <div className="c-offers">
            <h5>Telecom Offers</h5>
            <h6>We have some special offers for some selected* Vodafone and Idea Users.
              If you are that lucky selected user, then you can get up to 50% off on your
              movie tickets. It can't get better than this! Right?</h6>
          </div>
        </div>

        <h6>BookMyShow offers are designed to delight you! Check them out now,
          there's bound to be one that suits you. Do remember to read Terms and
          Conditions before applying offer code, though!</h6>

      </div>

    </>
  )


}


export default Offer;