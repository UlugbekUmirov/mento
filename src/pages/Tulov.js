import click from "../img/click.svg";
import apelsin from "../img/apelsin.svg";
import payme from "../img/payme.svg";
import premium from "../img/premium.svg";
export default function Tulov(props) {
  const { handlePremium } = props;
  return (
    <div className="video container">
      <div className="selection-list">
        <i className="material-icons selection-close" onClick={handlePremium}>
          close
        </i>
        <img className="selectionone" src={premium} alt="" />
        <h2 className="exports">To’lov turini tanlang</h2>
        <p>
          Matn tasodifiy ravishda har bir paragrafda ikkitadan o'ntagacha
          bo'lgan paragraflarda yaratilgan, bu matnni vizual
        </p>
        <div>
          <a href="https://payme.uz/620de2974f819be147d92508" target="_plank">
            <img className="premium-icon payme" src={payme} alt="" />
          </a>
          <a href="/">
            <img className="premium-icon clicks" src={click} alt="" />
          </a>
          <a href="/">
            <img className="premium-icon apelsin" src={apelsin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
