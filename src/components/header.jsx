import * as React from "react"
import { Icon } from "reflexjs"

export default function Block({ branding, links, ...props }) {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header py="0" boxShadow="0px 0px 4px rgb(0 0 0 / 20%)" {...props}>
      <div variant="container">
        <div display="flex" alignItems="center">
          {branding && (
            <a
              href="/"
              display="flex"
              alignItems="center"
              _hover={{
                color: "primary",
              }}
            >
              {branding.icon && <Icon name={branding.icon} size="5" mr="2" />}
              <img src='/images/logo.png' w='100' alt='Abraj Investment & Development'/>
            </a>
          )}
          <NavLinks links={links} display="none|grid" />
          <button
            display="flex|none"
            p="2"
            size="14"
            mr="auto"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon name="menu-alt" size="10" />
          </button>
        </div>
      </div>
      <div
        position="absolute"
        zIndex="1000"
        bg="background"
        top="24"
        left="4"
        right="4"
        px="4"
        rounded="xl"
        overflow="scroll"
        boxShadow="3xl"
        border="1px solid"
        borderColor="border"
        transform={`scale(${showMenu ? 1 : 0.95})`}
        visibility={showMenu ? "visible" : "hidden"}
        opacity={showMenu ? 1 : 0}
        transition="all .25s ease-in"
        transformOrigin="100% 0"
        maxHeight="95vh"
        display="block|none"
      >
        <NavLinks links={links} py="8" />
      </div>
    </header>
  )
}

export function NavLinks({ links, ...props }) {
  return links.length ? (
    <div
      display='grid'
      col={`1|repeat(${links.length}, auto)`}
      gap='8|10|12'
      mr='auto'
      {...props}
    >
      {links.map((link, index) => {
        return (<li
          key={index}
          sx={{
            display: "block",
            float: "left",
            padding: "1rem",
            position: "relative",
            transitionDuration: "0.5s",
            ":hover > ul, :focus-within > ul ": {
              visibility: "visible",
              opacity: "1",
              display: "block",
            },
          }}>
          <a key={index} variant='text' href={link.href} textAlign='left|center' fontSize='xl|md' px='4|0' aria-haspopup={link.subMenu && link.subMenu.length > 0 ? true : false} fontFamily='Tajawal'>
            {link.title}
          </a>

          {link.subMenu && link.subMenu.length > 0 ? (
            <ul aria-label="submenu" sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              boxShadow: '0 0 43px -7px rgb(170 176 197 / 45%)',
              background: '#fff',
              borderRadius: '12px',
              visibility: "hidden",
              opacity: "0",
              display: "none",
              minWidth: "12rem",
              position: "absolute",
              transition: "all 0.5s ease",
              marginTop: "1rem",
              zIndex: "99999",
              left: "0",
              ":hover": {
                visibility: "visible",
                opacity: "1",
                display: "block",
              },
            }}>
              {link.subMenu.map((subLink) => (
                <li key={subLink.name} sx={{
                  clear: "both",
                  width: "100%",
                  padding: "1rem",
                }}>
                  <a href={subLink.link} sx={{fontSize: '.91rem', color: 'primary'}}
                    fontFamily='Tajawal'
                    display='flex'
                    alignItems='center'
                  >
                    <span mr='2' background='#E9F7FF' p='3px 4px 0' borderRadius='50%'>{subLink.icon}</span>
                    {subLink.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          </li>
        )}
      )}
    </div>
  ) : null
}
