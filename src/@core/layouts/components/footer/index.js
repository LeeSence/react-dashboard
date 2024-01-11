// ** Icons Import
import { Heart } from "react-feather";

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        {new Date().getFullYear()} 리액트로{" "}
        <a
          href="https://1.envato.market/pixinvent_portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          드래그앤드랍
        </a>
        <span className="d-none d-sm-inline-block">, 부수기!!</span>
      </span>
      <span className="float-md-end d-none d-md-block">
        Hand-crafted & Made with
        <Heart size={14} />
      </span>
    </p>
  );
};

export default Footer;
