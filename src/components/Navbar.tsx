"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckmarkStarburst20Regular, ArrowSyncCheckmark20Regular } from '@fluentui/react-icons';
import { Truck } from '@phosphor-icons/react';
import Icon from '@mdi/react';
import { mdiCardsHeartOutline } from '@mdi/js';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);
  
  const items = [
    { icon: <CheckmarkStarburst20Regular style={{ width: '26px', height: '26px' }} />, text: '30-DAY SATISFACTION GUARANTEE', href: '#' },
    { icon: <Truck weight='light' size={26} />, text: 'FREE DELIVERY ON ORDERS OVER $40.00', href: '#' },
    { icon: <Icon path={mdiCardsHeartOutline} size={'26px'} />, text: '50.000+ HAPPY CUSTOMERS', href: '#' },
    { icon: <ArrowSyncCheckmark20Regular style={{ width: '26px', height: '26px' }} />, text: '100% MONEY BACK GUARANTEE', href: '#' },
  ];

  const nextItem = () => setActiveItem((current) => (current + 1) % items.length);
  const prevItem = () => setActiveItem((current) => (current - 1 + items.length) % items.length);

  return (
    <nav className="bg-dark-gray p-4 px-36 flex justify-between items-center sticky top-0 navbar">
      <button onClick={prevItem} className="nbm:hidden">
        <img src="/assets/customicons/left-arrow.svg" alt="Previous" width="12" height="12" />
      </button>
      {items.map((item, index) => (
        <Link legacyBehavior key={index} href={item.href}>
          <a className={`flex items-center space-x-2 ${index === activeItem ? 'block' : 'hidden nbm:flex'}`}>
            <span>{item.icon}</span>
            <span className={'navbar-textos'}>{item.text}</span>
          </a>
        </Link>
      ))}
      <button onClick={nextItem} className="nbm:hidden">
        <img src="/assets/customicons/right-arrow.svg" alt="Next" width="12" height="12" />
      </button>
    </nav>
  );
};

export default Navbar;