import Navbar from "../components/Navbar";
import Background from "../assets/images/ArtBackground.png";
import Image1 from "../assets/images/Portfolio Artworks/Group 8224.svg";
import Image2 from "../assets/images/Portfolio Artworks/Group 8225.svg";
import Image3 from "../assets/images/Portfolio Artworks/Group 8226.svg";
import Image4 from "../assets/images/Portfolio Artworks/Group 8227.svg";
import Image5 from "../assets/images/Portfolio Artworks/Group 8228.svg";
import Image6 from "../assets/images/Portfolio Artworks/Group 8229.svg";
import Image7 from "../assets/images/Portfolio Artworks/Group 8230.svg";
import Image8 from "../assets/images/Portfolio Artworks/Group 8231.svg";
import Image9 from "../assets/images/Portfolio Artworks/Group 8232.svg";
import Image10 from "../assets/images/Portfolio Artworks/Group 8233.svg";
import Image11 from "../assets/images/Portfolio Artworks/Group 8234.svg";
import Image12 from "../assets/images/Portfolio Artworks/Group 8235.svg";
import Image13 from "../assets/images/Portfolio Artworks/Group 8236.svg";


export default function Play() {
  return (
    <div>
      <div>
        <div className="flex mx-auto w-3/5 ">
          <Navbar></Navbar>
        </div>
        <div>
          <img
            src={Background}
            alt={"Play page background"}
            className={"w-full object-cover"}
          />
        </div>
      </div>
    </div>
  );
}
