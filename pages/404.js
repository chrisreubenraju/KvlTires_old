import Image from 'next/image';
import Link from 'next/link';
import errorGif from './../Assets//Error-404.gif';
import { motion } from 'framer-motion';
export default function FourOhFour() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image loading="lazy" src={errorGif} height={200} width={600} />
        <div className="mt-4  flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">Oops!</h2>
          <desc className="text-xl font-normal pt-2 text-center">
            We can’t seem to find the page you are looking for
          </desc>

          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white mt-8 p-4 bg-kaltire-red cursor-pointer"
            >
              <p>Back to Home</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
