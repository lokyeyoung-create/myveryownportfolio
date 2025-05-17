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
import { useEffect, useState } from "react";

interface Artwork {
  id: number;
  image: string;
  description: string;
}

const artworkData: Artwork[] = [
  {
    id: 1,
    image: Image1,
    description:
      "One of four digital posters that encouraged solidarity with the AAPI community during the COVID-19 pandemic",
  },
  {
    id: 2,
    image: Image2,
    description:
      "One of four digital posters that encouraged solidarity with the AAPI community during the COVID-19 pandemic",
  },
  {
    id: 3,
    image: Image3,
    description:
      "One of four digital posters that encouraged solidarity with the AAPI community during the COVID-19 pandemic",
  },
  {
    id: 4,
    image: Image4,
    description: "Kendrick Lamar portrait",
  },
  {
    id: 5,
    image: Image5,
    description: "Honey in hand",
  },
  {
    id: 6,
    image: Image6,
    description:
      "A digital painting that conveys the ways in which humans are addicted and attached to technology beyong their control",
  },
  {
    id: 7,
    image: Image7,
    description:
      "A mixed media artwork with soft pastel and digital art that illustrates how mundane items have become enveloped by the technological revolution",
  },
  {
    id: 8,
    image: Image8,
    description:
      "One of four digital posters that encouraged solidarity with the AAPI community during the COVID-19 pandemic",
  },
  {
    id: 9,
    image: Image9,
    description: "Pomegranite and fig watercolor study",
  },
  {
    id: 10,
    image: Image10,
    description:
      "A mixed media artwork with soft pastel and digital art that aims to show the dystopian nature of glorified, popular, sightwseeing locations ",
  },
  {
    id: 11,
    image: Image11,
    description:
      "A mixed media artwork with oil pastel, digital art, and photo shop that depicts the way humans have been pulled apart by technological addiction",
  },
  {
    id: 12,
    image: Image12,
    description: "Oil pastel pearls sketch",
  },
  {
    id: 13,
    image: Image13,
    description: "Cat",
  },
];

export default function Play() {
  const [shuffledArtwork, setShuffledArtwork] = useState<Artwork[]>([]);
  const rowConfig = [4, 5, 4];

  const shuffleArtwork = () => {
    const newOrder = [...artworkData].sort(() => Math.random() - 0.5);
    setShuffledArtwork(newOrder);
  };

  useEffect(() => {
    shuffleArtwork();
  }, []);

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const openPopup = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    document.body.style.overflow = "hidden";
  };
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const closePopup = () => {
    setSelectedArtwork(null);
    document.body.style.overflow = "";
  };

  const getRowsOfArtwork = () => {
    if (shuffledArtwork.length === 0) {
      return [];
    }

    const rows = [];
    let currentIndex = 0;

    for (let i = 0; i < rowConfig.length; i++) {
      const itemsInRow = rowConfig[i];
      if (currentIndex >= shuffledArtwork.length) {
        break;
      }
      rows.push(shuffledArtwork.slice(currentIndex, currentIndex + itemsInRow));
      currentIndex += itemsInRow;
    }

    return rows;
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="w-3/5 mx-auto">
          <Navbar />
        </div>
      </div>

      <div className="relative">
        <div className="fixed top-20 left-0 w-full h-full">
          <img
            src={Background}
            alt="Art gallery background"
            className="blur-[2px] w-full h-full object-cover"
          />
        </div>

        <div className="relative pt-32 pb-20 px-4 md:px-8">
          <div className="text-center mb-10">
            <button
              onClick={shuffleArtwork}
              className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full font-figtree shadow-md hover:bg-white transition-colors"
            >
              Shuffle Gallery
            </button>
          </div>

          <div className="max-w-5xl mx-auto">
            {getRowsOfArtwork().map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className={`flex justify-center w-full mx-auto ${
                  rowIndex === 1 ? "max-w-3xl" : "max-w-2xl"
                }`}
              >
                <div className="flex items-center mb-1 gap-1">
                  {row.map((artwork) => (
                    <div
                      key={artwork.id}
                      className="relative px-1 cursor-pointer"
                      onClick={() => openPopup(artwork)}
                    >
                      {" "}
                      <img
                        src={artwork.image}
                        alt={`Artwork ${artwork.id}`}
                        className="w-full hover:rotate-2 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {selectedArtwork && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center "
              onClick={handleOutsideClick}
            >
              <div
                className="relative max-w-sm w-full animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-2">
                  <img
                    src={selectedArtwork.image}
                    alt={`Artwork ${selectedArtwork.id}`}
                    className="w-full h-auto max-h-[75vh] object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-figtree text-md max-w-2xl mx-auto leading-relaxed tracking-wide">
                    {selectedArtwork.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
