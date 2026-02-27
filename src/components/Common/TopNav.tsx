import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { createPortal } from 'react-dom'
import mainLogo from '../../assets/images/logo/guayaba_horizontal_blue.svg'
import { Button } from './Button'

export interface TopNavProps {
  navigation: { name: string; href: string; current?: boolean }[];
  buttonText: string;
  buttonHref: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function TopNav({ navigation, buttonText, buttonHref }: TopNavProps) {
  return (
    <Disclosure as="nav" className="sticky top-0 border border-gray-400 border-b-1 border-t-1 border-l-0 border-r-0 z-50 bg-white">
      {({ open }) => (
        <>
      <div className="mx-auto w-full bordered-container sm:px-6 lg:px-12 border border-gray-400 border-t-0 border-b-0">
        <div className="relative flex items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center py-4 px-4">
              <img
                alt="sample Agency"
                src={mainLogo}
                className="h-8 w-auto"
              />
            </div>
            {/* Nav */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? '' : 'hover:underline',
                      'text-black rounded px-3 py-2 text-sm font-semibold uppercase font-anek-latin self-center',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="dark" href={buttonHref}>{buttonText}</Button>
              </div>
            </div>
          </div>
          {/* Burger menu */}
          <div className="absolute inset-y-0 right-0 flex items-center px-4 sm:hidden border border-gray-400 border-l-1 border-t-0 border-b-0 border-r-0">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center px-2 py-1 text-white bg-black">
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col justify-center items-center w-10 h-5 gap-[5px]">
                <span className="block w-8 h-px bg-current transition-all duration-300 ease-in-out origin-center group-data-[open]:translate-y-[6px] group-data-[open]:rotate-[25deg]" />
                <span className="block w-8 h-px bg-current transition-all duration-300 ease-in-out group-data-[open]:opacity-0" />
                <span className="block w-8 h-px bg-current transition-all duration-300 ease-in-out origin-center group-data-[open]:-translate-y-[6px] group-data-[open]:-rotate-[25deg]" />
              </div>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel
        transition
        className="absolute left-0 right-0 sm:hidden origin-top transition duration-300 ease-out data-[closed]:scale-y-0 data-[closed]:opacity-0"
      >
        <div className="bordered-container mx-auto border border-gray-400 bg-white">
          <div className="divide-y divide-gray-300">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className="block px-6 py-4 font-anek-latin text-sm font-semibold uppercase tracking-wider text-black hover:text-primary-500 transition-colors"
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="px-6 py-4">
            <Button variant="dark" href={buttonHref}>{buttonText}</Button>
          </div>
          </div>
        </div>
      </DisclosurePanel>

      {/* Backdrop blur */}
      {createPortal(
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 sm:hidden z-40 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden="true"
        />,
        document.body
      )}
        </>
      )}
    </Disclosure>
  )
}
