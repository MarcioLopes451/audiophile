import HeadphoneThumbnail from "../../public/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerThumbnail from "../../public/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneThumbnail from "../../public/shared/desktop/image-category-thumbnail-earphones.png";
import Arrow from "../../public/shared/desktop/icon-arrow-right.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const slideIn1 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const links = [
  {
    name: "HEADPHONES",
    link: "/headphones",
    image: HeadphoneThumbnail,
  },
  {
    name: "SPEAKERS",
    link: "/speakers",
    image: SpeakerThumbnail,
  },
  {
    name: "EARPHONES",
    link: "/earphones",
    image: EarphoneThumbnail,
  },
];

export default function Links() {
  return (
    <motion.div
      variants={slideIn1}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className="mt-40"
    >
      <div className="flex justify-center items-center flex-col gap-20 md:flex-row md:gap-2 xl:gap-[30px]">
        {links.map((data, key) => (
          <div key={key}>
            <div
              className="bg-seasalt w-80 h-48 rounded-lg text-center relative 
              md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]"
            >
              <Image
                src={data.image}
                className="w-40 h-40 absolute -top-16 left-20 md:left-8 xl:left-24"
                alt=""
              />
              <h4 className="pt-20 font-semibold text-lg tracking-wider">
                {data.name}
              </h4>
              <Link
                href={data.link}
                className="opacity-50 text-sm flex items-center justify-center gap-2 pt-4"
              >
                <p className="hover:text-caramel transition ease-in-out">
                  SHOP
                </p>
                <Image src={Arrow} className="left-3" alt="" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
