import { useState } from "react";

import { MdHome, MdSearch } from "react-icons/md";
import { BiStation, BiBulb } from "react-icons/bi";
import { FaSchool, FaPaperPlane, FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import RouterLink from "../ui-elements/RouterLink";
import DarkModeToggler from "../ui-elements/DarkModeToggler";
import { useForm } from "@inertiajs/inertia-react";

function MainTopNav() {
  const [isMobileMenuOpen, openMobileMenu] = useState(false)
  const { data, setData, post, get, processing, errors, reset } = useForm({
    k: '',
  });
  const openMenuToggler = () => {
    if (isMobileMenuOpen) {
      openMobileMenu(false)
    } else {
      openMobileMenu(true)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    get(route('search'));
  }

  return (
    <>
      <nav className="navigation bg-white dark:bg-gray-700 shadow-sm z-50 sticky top-0">
        <div className="container mx-auto">
          <div className="menu flex justify-between items-center px-2 h-14">
            <div className="logo">
              <RouterLink to="/">
                <h3 className="font-bold text-blue-900 text-2xl dark:text-slate-300">OSP</h3>
              </RouterLink>
            </div>
            {/* main menu with a mobile navigation */}
            <div className={` ${!isMobileMenuOpen && "hidden px-4"} main-menu lg:flex flex-col justify-between lg:items-center lg:flex-row grow-1 absolute lg:relative lg:left-auto left-0 top-14 lg:top-auto w-full backdrop-blur-lg lg:h-auto h-screen`}>
              <div className="search mx-3 my-6 lg:my-0">
                <form className="flex items-center" method="get" onSubmit={handleSubmit}>
                  <input type="text" name="k" onChange={(e) => setData('k', e.target.value)} className="rounded-md bg-white lg:bg-slate-200 dark:bg-gray-500 lg:dark:bg-gray-500 dark:text-gray-900 focus:border-blue-600 shadow-md lg:shadow-none px-3 py-2 w-full pr-10" placeholder="search..." />
                  <MdSearch className="w-6 -ml-8" />
                </form>
              </div>
              <div className="main-menu-list grow-1 lg:flex justify-center">
                <ul className="flex flex-col lg:flex-row font-bold">
                  <li className="mb-1 lg:mb-0 lg:mr-3">
                    <RouterLink to="/" className="top-nav-link">
                      <MdHome className="w-5 inline-block" /> Home</RouterLink>
                  </li>
                  <li className="mb-1 lg:mb-0 lg:mr-3">
                    <RouterLink to="/discover" className="top-nav-link">
                      <BiStation className="w-5 inline-block" /> Discover</RouterLink>
                  </li>
                  <li className="mb-1 lg:mb-0 lg:mr-3">
                    <RouterLink to="/schools" className="top-nav-link">
                      <FaSchool className="w-5 inline-block" /> Schools</RouterLink>
                  </li>
                  <li className="mb-1 lg:mb-0 lg:mr-3">
                    <RouterLink to="/info-board" className="top-nav-link">
                      <BiBulb className="w-5 inline-block" /> Info board</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="interactivity-menu h-full flex items-center">
              <ul className="flex gap-4">
                <li className="mb-2 lg:mb-0">
                  <RouterLink to={route('messages')} className="inline-block text-gray-800 dark:text-gray-100">
                    <FaPaperPlane className="w-5 inline-block scale-125" />
                  </RouterLink>
                </li>
                <li>
                  <DarkModeToggler />
                </li>
                <li className="mb-2 lg:mb-0 lg:hidden">
                  <button className="inline-block text-gray-800 dark:text-gray-100" onClick={openMenuToggler}>
                    <GiHamburgerMenu className="w-5 inline-block scale-125" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainTopNav;
