import Nav from "./newpage/nav";
import Page1 from "./newpage/page1";
import Shop from "./newpage/shop";
import News from "./newpage/news";
import Ourservices from "./newpage/ourservices";
import Accessories from "./newpage/accessories";
import Fotter from "./newpage/fotter";
import Paymentfotter from "./newpage/paymentfotter";

export default function Home() {
  return (
    <div>
      <Nav />

      <section id="home" className="scroll-mt-20">
        <Page1 />
      </section>

      <section id="shop" className="scroll-mt-20">
        <Shop />
      </section>

      <section id="products" className="scroll-mt-20">
        <News />
      </section>

      <section id="accessories" className="scroll-mt-20">
        <Accessories />
      </section>

      <section id="services" className="scroll-mt-20">
        <Ourservices />
      </section>

      <section id="footer" className="scroll-mt-20">
        <Fotter />
      </section>

      <section id="payment-Fotter" className="scroll-mt-20">
        <Paymentfotter />
      </section>
    </div>
  );
}
