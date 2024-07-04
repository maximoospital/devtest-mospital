"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckmarkStarburst20Regular, ArrowSyncCheckmark20Regular } from '@fluentui/react-icons';
import { Truck } from '@phosphor-icons/react';
import Icon from '@mdi/react';
import { mdiCardsHeartOutline } from '@mdi/js';
import Image from 'next/image';

const Footer = () => {  
  return (
    <footer className="bg-dark-gray p-4 md:px-32 sticky bottom-0 flex flex-col nbm:flex-row justify-between items-center footer">
      {/* Logo on the left */}
      <div className={'flex items-center space-x-2 block'}>
        <p className="footer-pe">Copyright (C) 2023</p>
        <div className="inline-block w-px self-stretch bg-white"></div>
        <a className="footer-ps" href='mailto://clarifionsupport@clarifion.com'>clarifionsupport@clarifion.com</a>
      </div>

      {/* Images on the right */}
      <div className={'flex items-center space-x-2 block'}>
        <Image src="/assets/customicons/lock.svg" alt="" width={16} height={16} />
        <p className="footer-pe">Secure 256-bit SSL encryption.</p>
      </div>
    </footer>
  );
};

export default Footer;