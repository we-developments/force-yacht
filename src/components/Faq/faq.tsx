import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { faqs } from './faq.mocks';
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";


export default function Faq() {
  const [allfaqs, setFaqs] = useState(faqs);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-bold text-primary text-left w-full font-Marcellus ">
            Algumas perguntas mais frequentes
          </h2>
          <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {(showMore ? allfaqs : allfaqs.slice(0, 5)).map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-lg pt-4 font-extralight text-gray-600 leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-sm pt-4 text-gray-600 leading-4">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          {allfaqs.length > 5 && (
            <div className="mt-6 text-right">
              <button
                className="text-primary font-medium underline"
                onClick={toggleShowMore}
              >
                {showMore ? 'Mostrar menos' : 'Mostrar mais'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}