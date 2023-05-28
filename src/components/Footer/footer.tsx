import { navigation } from "./navigation";
import Image from "next/image";
import logo from "../../images/pngs/force.png";
import { useIconGetter } from "@/src/hooks/useIconGetter";
import Link from "next/link";

export default function Footer() {
  const { Icon } = useIconGetter();

  return (
    <footer className="relative bg-footer py-2">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 sm:py-12">
        <div className="flex mb-2 justify-center space-x-10">
          <Image src={logo} alt="Logo" width={120} height={120} />
        </div>
        <div className="flex justify-center">
          <Link href="https://www.instagram.com/forceyachts/" target="_blank">
            <Icon icon="insta" svgProps={{ fill: "#b3b3b3", width: "30px" }} />
          </Link>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Force Yachts, Inc. Todos direitos reservados.
        </p>
      </div>
    </footer>
  );
}
