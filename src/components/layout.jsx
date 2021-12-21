import React from 'react'
import { Phone, Twitter, Instagram, Facebook, Linkedin, Briefcase, LifeBuoy } from 'react-feather'
import Header from './header'
import Footer from './footer'
import '@openfonts/tajawal_arabic';
import "@openfonts/tajawal_arabic/index.css";

const links = [
    {
      title: "الصفحة الرئيسية",
      href: "/",
    },
    {
      title: "عنا",
      href: "/about-us",
    },
    {
      title: "مشاريع",
      href: "/future-projects",
      subMenu: [{
        name: "مبنى أبراج",
        link: "abrja-building",
      }, {
        name: "مشروع جفنات",
        link: "jifnat-project",
      }, {
        name: "مشاريع مستقبلية",
        link: "future-projects",
      }]
    },
    {
      title: "اتصل بنا",
      href: "#",
    },
];

const socialMediaIcons = [{
}];

const footerLinks = [{
    title: "الصفحة الرئيسية",
    href: "/home",
    items: [
    {
        title: "عنا",
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
        href: "#",
    },
    {
        title: "tel: 02-2987424",
        href: "#",
    },
    {
        title: "fax: 02-2987434",
        href: "#",
    }],
}];

export default function Layout({ children, props }) {
  return (
    <>
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
        <section pb="6|8|12" {...props}>
            {children}
        </section>
        {/* End Content */}
        {/* Start Footer */}
        <Footer
            name='Dopamina'
            links={footerLinks}
            iconLinks={socialMediaIcons}
            copyright={`Copyright © ${new Date().getFullYear()} Abraj Investment & Development. All rights reserved.`}
        >
            {/* <a
                href='tel:+022987424'
                variant='text'
                display='inline-flex'
                alignItems='center'
                ml='5'
                _hover={{
                    color: 'primary',
                }}
            >
                <Phone size='26' />
                <span ml='2'>02-2987424</span>
            </a> */}
        </Footer>
        {/* End Footer */}
    </>
  )
}
