import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import video from "../../assets/Vedio/gym-video.mp4";
import { HashLink } from "react-router-hash-link";

import "./Header.css";
const navigation = [
  { name: "HOME", to: "#" },
  { name: "ABOUT", to: "#About" },
  { name: "Our Features", to: "#Feacher" },
  // { name: "SCHEDULES", href: "#" },
  { name: "CONTACT", to: "#Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState({
    background: "rgba(250, 250, 250, 0.1)",
    position: "fixed",
  });

  const changeNavbarColorOnScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 700; // Change this value to set the scroll threshold when the color should change.

    if (scrollPosition > threshold) {
      setNavbarColor({ ...navbarColor, background: "black" });
      console.log("black"); // Change to black when scrolled past the threshold
    } else {
      setNavbarColor({
        ...navbarColor,
        background: "rgba(250, 250, 250, 0.1)",
        position: "",
      });
      console.log("transparent"); // Change to black when scrolled past the threshold
    }
  };

  useEffect(() => {
    window.onscroll = changeNavbarColorOnScroll;
  }, []);

  return (
    <>
      <header
        className={"absolute inset-x-0 top-0 z-50"}
        style={{ position: navbarColor.position }}
      >
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          style={{ backgroundColor: navbarColor.background }}
          aria-label="Global"
        >
          <div className="flex lg:flex-1 logo">
            <a href="index.html">
              Fitness<em>X</em>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 link-nav">
            {navigation.map((item) => (
              <HashLink
                key={item.name}
                to={item.to}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </HashLink>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <a href="#" className="nav-minu-link">
                  Fitness<em>X</em>
                </a>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 nav-link-hover">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* <"--Hero video--!> */}
        <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
          <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video
              class="min-w-full min-h-full absolute object-cover Hero-video"
              src={video}
              type="video/mp4"
              loop={true}
              muted={true}
              autoPlay={true}
            ></video>
            <div class="backround-hero"></div>
          </div>
          <div class="video-content space-y-2">
            <h6 class="font-light">work harder, get stronger</h6>
            <h3 class="font-light">
              easy with our <em>gym</em>
            </h3>
            <button className="btn-Become-member">Become a member</button>
          </div>
        </section>
      </div>
    </>
  );
}
