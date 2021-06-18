import { Disclosure } from '@headlessui/react'
import Link from 'next/link';
import Logo from './Logo';
import Mode from './Mode';

const Mobile = () => {
    return (

        <div className="w-full px-6 py-4">
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="flex flex-row items-center justify-between">
                            <Disclosure.Button className="flex focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                            </Disclosure.Button>
                            <Logo />
                            <Mode />
                        </div>

                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <ul className="text-lg justify-center">
                                <li>
                                    <Link href="#projects">
                                        <a className="hover:text-gray-400">Projects</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#tech">
                                        <a className="hover:text-gray-400">Technologies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about">
                                        <a className="hover:text-gray-400">About</a>
                                    </Link>
                                </li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>

    )
}

export default Mobile