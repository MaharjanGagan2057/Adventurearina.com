import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-2 pt-4 dark:bg-dark lg:pb-4 lg:pt-6">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-5 w-full">
                <a href="/#" className="mb-3 inline-block max-w-[120px]">
                  <img
                    src={logo}
                    alt="logo"
                    className="max-w-full dark:hidden"
                  />
                  <img
                    src={logo}
                    alt="logo"
                    className="max-w-full hidden dark:block rounded-3xl"
                  />
                </a>
                <p className="mb-3 text-sm text-body-color dark:text-dark-6">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p>
                <p className="flex items-center text-xs font-medium text-dark dark:text-white">
                  <span className="mr-2 text-primary">
                    {/* ...SVG... */}
                  </span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-5 w-full">
                <h4 className="mb-4 text-base font-semibold text-dark dark:text-white">
                  Follow Us On
                </h4>
                <div className="mb-3 flex items-center">
                  {/* ...social icons... */}
                </div>
                <p className="text-sm text-body-color dark:text-dark-6">
                  &copy; 2025 TailGrids
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ...SVG decorations... */}
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
