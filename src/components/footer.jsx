import * as React from 'react'
import { VisuallyHidden } from 'reflexjs'

export default function Block({
  name,
  copyright,
  links,
  iconLinks,
  children,
  ...props
}) {
  return (
    <section py={[8, 10, 12]} {...props}>
      <div variant='container'>
        <div
          display='flex'
          alignItems='center'
          flexDirection='column|row'
          justifyContent='space-between'
        >
          <div maxW='none|300'>
            {name && <img src='/images/logo.png'  sx={{width: '240px'}} alt='dopamina logo' />} {children}
          </div>
          {links?.length && (
            <div
              display='grid'
              col={`2|repeat(${links.length}, auto)`}
              gap='4|8|16|20'
              mt='4|4|0'
              w='full|auto'
            >
              {links.map((link, index) => (
                <div
                  key={index}
                  display='flex'
                  flexDirection='column'
                  alignItems='flex-start'
                >
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={link.href}
                    textAlign='center'
                    variant='heading.h5'
                    fontFamily='Tajawal'
                    _hover={{
                      color: 'primary',
                    }}
                  >
                    {link.title}
                  </a>
                  {link.items.map((item, index) => (
                    <a
                      target='_blank'
                      rel='noreferrer'
                      key={index}
                      href={item.href}
                      variant='text'
                      display='flex'
                      mt='2'
                      fontFamily='Tajawal'
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        {copyright && (
          <div
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            borderTopWidth={1}
            textAlign='center'
            pt='4|5|6'
            mt='4|5|6'
          >
            <p variant='text.sm' my='0'>
              {copyright}
            </p>
            {iconLinks?.length && (
              <div display='grid' col='4' gap='4' mt='4|0'>
                {iconLinks.map((iconLink, index) => (
                  <a key={index} href={iconLink.href} color='text' target='_blank' rel='noreferrer'>
                    {iconLink.name}
                    <VisuallyHidden>{iconLink.title}</VisuallyHidden>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
