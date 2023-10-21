import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-green-950 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h6 className="font-bold uppercase pt-2">Live at Wisdom Wonder</h6>
          <ul className="mt-2">
            <li className="py-1">Our Offer</li>
            <li className="py-1">Type of Activities</li>
            <li className="py-1">tories</li>
            <li className="py-1">Exterior</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul className="mt-2">
            <li clasName="py-1">About</li>
            <li clasName="py-1">Blog</li>
            <NavLink to="/career">
              <li clasName="py-1">Careers</li>
            </NavLink>
            <li clasName="py-1">Press</li>
            <li clasName="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul className="mt-2">
            <li clasName="py-1">Claims</li>
            <li clasName="py-1">Privacy</li>
            <li clasName="py-1">Terms</li>
            <li clasName="py-1">Policies</li>
            <li clasName="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our Newsletter</p>
          <p className="py-4">
            The Latest news and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="font-bold py-4">
          2023 Wisdom Wonder D.o.o. All rights reserved.
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <TiSocialPinterest />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
