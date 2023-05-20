import { navigation } from "./navigation";
import Image from "next/image";
import logo from "../../images/pngs/force.png";

export default function Footer() {
  return (
    <footer className="relative  bg-footer">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 sm:py-12">
        <div className="flex mb-10 justify-center space-x-10">
          <Image src={logo} alt="Logo" width={120} height={120} />
        </div>
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-white"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
