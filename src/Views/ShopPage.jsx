import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Header from "../Components/Header";
import SubPage_head from "../Components/SubPage_head";
import Footer from "../Components/Footer";
import ToTop from "../Components/ToTop";
import { useCart } from "react-use-cart";

const cars = [
  {
    id: "1",
    image:
      "https://www.motortrend.com/uploads/sites/10/2018/07/2019-toyota-corolla-l-sedan-angular-front.png?fit=around%7C875:492",
  },
  {
    id: "2",
    image:
      "https://www.honda.ca/-/media/Brands/Honda/Models/CIVIC-SEDAN/2023/Overview/03_Key-Features/Honda_Civic_key-features_desktop_1036x520.png?h=520&iar=0&w=1036&rev=b9ff705973af4776943d63f64055a329&hash=631C8CFA6C956A69634BC36913296FE7",
  },
  {
    id: "3",
    image:
      "https://autopremiumgroup.ru/m/_versions/ford/mustang/gt/gt_premium_fastback/mustang_gt_fastback_shadow_black_image_series.png",
  },
  {
    id: "4",
    image:
      "https://www.motortrend.com/uploads/sites/10/2015/11/2014-chevrolet-equinox-2lt-suv-angular-front.png",
  },
  {
    id: "5",
    image:
      "https://www.cars.com/i/large/in/v2/stock_photos/5499efcb-9cc2-4b12-9d08-e36dfef4ee5b/143f0ac0-bc3d-4e15-bf75-c5b2744120f4.png ",
  },
  {
    id: "6",
    image:
      "https://www.bmw.co.za/content/dam/bmw/marketZA/bmw_co_za/images/bmw-finance/select-offers/bmw-3-series-sedan-318i-lci-offer-cosy-image.png",
  },
  {
    id: "7",
    image:
      "https://revel-cms-strapi.s3.eu-west-1.amazonaws.com/development/2021_tesla_model_3_long_range_sedan_af_a27512ed98.png",
  },
  {
    id: "8",
    image:
      "https://cdn.wheel-size.com/automobile/body/audi-q5-sportback-2021-2022-1612942095.5940046.png",
  },
  {
    id: "9",
    image:
      "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/16653-2024-mercedes-benz-e-class",
  },
  {
    id: "10",
    image:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/suvs/tahoe/trims/2023-tahoe-cc10706-1lz-g1w-trimselector.png?imwidth=960",
  },
  {
    id: "11",
    image:
      "https://s7d1.scene7.com/is/image/scom/RDI_UAT_360e_030?$750p$",
  },
  {
    id: "12",
    image:
      "https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/models/rx/2024/styles/Lexus-RX-350-visualizer-styles-750x471-LEX-RXG-MY24-0001.03.png?wid=750&hei=471&fmt=png-alpha",
  },
  {
    id: "13",
    image:
      "https://www.cars.com/i/large/in/v2/stock_photos/11437837-7d4a-4432-a9d6-5d239ba0ea26/ae45c0d0-bede-4cc6-bfba-28cf49b4a495.png",
  },
  {
    id: "14",
    image:
      "https://freebiescloud.com/wp-content/uploads/2021/06/BMW-X5-2021-5.png",
  },
  {
    id: "15",
    image: "https://www.cars.com/i/large/in/v2/stock_photos/ef2dbea3-46ca-4deb-ac28-5a28cf0c3185/6c228bb0-6ab4-49ab-8e0e-d4a263941471.png",
  },
  {
    id: "16",
    image:
      "https://platform.cstatic-images.com/in/v2/stock_photos/79cfc3a4-3170-4980-8b42-c52f8fad967d/7182bcf6-9ce5-40ec-b7ba-3f20f1bb1e8b.png",
  },
  {
    id: "17",
    image:
      "https://www.tesla.com/ownersmanual/images/GUID-1F2D8746-336F-4CF9-9A04-F35E960F31FE-online-en-US.png",
  },
  {
    id: "18",
    image:
      "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2024CHT270033_01_1280_GXP.png",
  },
  {
    id: "19",
    image:
      "https://www.motortrend.com/uploads/sites/10/2015/11/2012-ford-escape-xlt-4wd-suv-angular-front.png",
  },
  {
    id: "20",
    image:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/a34c1b9b-2af1-4444-b1f0-bfe797f6eac6/4df4de88-f298-4767-81a2-12a1effafefc.png",
  },
  {
    id: "21",
    image:
      "https://assets-clean.local-car-finder.com/images/50031/50031_st1280_089.png",
  },
  {
    id: "22",
    image:
      "https://di-uploads-pod16.dealerinspire.com/pattypeckhonda/uploads/2018/12/Artboards-2019-honda-accord-sedan-trim-EX.png",
  },
  {
    id: "23",
    image:
      "https://www.jeep.com.eg/content/dam/jeep/eg/gc19/models/bigblack.png",
  },
  {
    id: "24",
    image:
      "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/801c4d85829de5afe4cab4036c95a021.png",
  },
  {
    id: "25",
    image:
      "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023FOS100016_01_1280_B3.png",
  },
  {
    id: "26",
    image:
      "https://www.motortrend.com/uploads/sites/10/2020/12/2021-chevrolet-camaro-zl1-coupe-angular-front.png?fit=around%7C875:492",
  },
  {
    id: "27",
    image:
      "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/15099-2023-audi-a4",
  },
  {
    id: "28",
    image:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/2020-subaru-forester-25i-S.png",
  },
  {
    id: "29",
    image:
      "https://www.motortrend.com/uploads/sites/10/2019/08/2020-ford-fusion-se-sedan-angular-front.png?fit=around%7C875:492",
  },
  {
    id: "30",
    image:
      "https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_600/v1/svp/dep/24kiatellurides/kia_24tellurides_angularfront_dawningred",
  },
];

const Products = () => {
  const { addItem } = useCart()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/cars")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setProducts(data);
      });
      
  }, []);

  return (
    <>
      <div className="shop_sec">
        <div className="row justify-content-center">
          {products.map((e, i) => {
            return (
              <div
                style={{ border: "1px solid red", borderRadius: "5px"}}
                className="col-11 col-md-5 col-xl-3 m-3 p-4"
                key={e.id}
              >
                <div className="box_item d-flex flex-row-reverse flex-md-column justify-content-between">
                  <div
                    style={{ height: "200px" }}
                    className="image_box col-8 col-md-12 mb-5 p-2"
                  >
                    <img
                      style={{ width: "100%", maxHeight:'200%'}}
                      src={cars[i].image}
                      alt="."
                    />
                  </div>
                  <div className="details">
                    <h3 style={{ fontWeight: "900" }}>
                      {e.make} {[e.model]}
                    </h3>
                    <h5>
                      <b>model:</b> {e.year} <br />
                    </h5>
                    <h5>
                      <b>price: </b>
                      <del style={{ color: "#c7c6c6" }}>{e.price*1.25}$ </del>
                      <span style={{ color: "#e8092e" }}>{e.price}$</span>
                    </h5>
                    <h5>
                      <b>engine:</b> {e.engine}
                    </h5>
                    <h5>
                      <b>HorsePower:</b> {e.horsepower}
                    </h5>
                    <h5>
                      <b>fuel type:</b> {e.fuelType} <br />
                    </h5>
                    <br />
                    <button onClick={() => {addItem({...e,...cars[i]}, 1)}} className="decorate_link">
                      ADD TO CART
                      <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button> 
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ShopPage = () => {
  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Shop" />

      <Products />

      <Footer />
    </>
  );
};

export default ShopPage;
