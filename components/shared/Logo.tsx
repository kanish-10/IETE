import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        className="dark:hidden rounded-full"
        src={"/assets/iete_logo.jpeg"}
        height={80}
        width={80}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
