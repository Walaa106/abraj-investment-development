import React from 'react'
import Header from './header'
import Footer from './footer'
import Notifications from 'react-notify-toast';

import '@openfonts/tajawal_arabic';
import "@openfonts/tajawal_arabic/index.css";

const links = [
    {
      title: "الصفحة الرئيسية",
      href: "/",
    },
    {
      title: "نبذة عن الشركة",
      href: "/about-us",
    },
    {
      title: "مشاريعنا",
      href: "#",
      subMenu: [{
        name: "مبنى أبراج",
        link: "/abraj-building",
      }, {
        name: "مشروع جفنات",
        link: "/jifnat-project",
      }, {
        name: "مشاريع مستقبلية",
        link: "/future-projects",
      }]
    },
    {
      title: "اتصل بنا",
      href: "/contact-us",
    },
];

const socialMediaIcons = [{
}];

const footerLinks = [{
    title: "الصفحة الرئيسية",
    href: "/home",
    items: [
    {
        title: "نبذة عن الشركة",
        href: "/about-us",
    },
    {
        title: "مشاريعنا",
        href: "/our-projects",
    },
    {
        title: "تواصل معنا",
        href: "/contact-us",
    }],
}, {
    title: "شارع طوكيو 15، رام الله",
    href: "#",
    items: [
    {
        title: "info@abraj.ps",
        href: "mailto:ayman@abraj.ps",
    },
    {
        title: "tel: 02-2987424",
        href: "tel:+022987424",
    },
    {
        title: "fax: 02-2987434",
        href: "#",
    }],
}];

export default function Layout({ children, props }) {
  return (
    <>
        <Notifications />
        <div position='fixed' left='0' bottom='10%' zIndex='99' display='flex' flexDirection='column' px='4'>
            <a href='https://www.facebook.com/messages/t/105268738310110' target="_blank" rel="noopener noreferrer">
              <img src='/images/messenger.png' w='2.5rem' />
            </a>
            <a href="https://wa.me/972594060600" target="_blank" rel="noopener noreferrer">
              <img src='/images/whatsapp.png' w='2.5rem' />
            </a>
        </div>
        {/* Start Header */}
        <Header
            minH='500|0'
            branding={{ name: '' }}
            links={links}
            buttonLink={{
                title: 'Subscribe',
                href: '#',
            }}
        />
        {/* End Header */}
        {/* Start Content */}
        <section pb="6|8|12" bg='#f8f8f8' pt='20|auto' borderTop="1px solid rgba(38, 39, 41, 0.1)" {...props}>
            {children}
        </section>
        {/* End Content */}
        {/* Start Footer */}
        <Footer
            name='Dopamina'
            links={footerLinks}
            iconLinks={socialMediaIcons}
            copyright={`Copyright © ${new Date().getFullYear()} Abraj Investment & Development. All rights reserved.`}
        />
        {/* End Footer */}
    </>
  )
}
