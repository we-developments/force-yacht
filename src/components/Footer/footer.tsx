export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Ajuda
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Termos
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Redes Sociais</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Empresa</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Sobre
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-600 font-bold mb-2">
              © 2021 by João
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
