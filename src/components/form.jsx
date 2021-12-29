import React from "react"
import { VisuallyHidden } from "reflexjs"
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';

import {notify} from 'react-notify-toast';

init("user_dGTT3od2alKJeAVtevFVs");

const Form = ({
  subheading,
  heading,
  text,
  buttons,
  ...props
}) => {
  const [formData, setFormData] = React.useState({
    from_name: '',
    from_email: '',
    message: '',
    phone: '',
  });
  const sendMessage = (event) => {
    event.preventDefault();
    handleClick({
      success: true
   })
    // emailjs.send("service_5krbqmf","template_gi5l6gd",{
    //   ...formData,
    //   reply_to: "ayman@abraj.ps",
    // }).then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    //    handleClick({
    //      success: true
    //   })
    // }, function(error) {
    //    console.log('FAILED!!...', error);
    //    handleClick({
    //     error: true
    //  })
    // });
  }
  const handleClick = ({success, error}) => {
    if (success) {
      notify.show('تم ارسال الرسالة بنجاح، وشكرا!', 'success');
    } else {
      notify.show('حدث خطأ ما في ارسال الرسالة!', 'error');
    }
  }
  return (
    <section py="6|8|12|20" {...props}>
      <div variant="container">
        <div display="grid" col="1|2" gap="8|12|16" alignItems="center">
          <form
              display="grid"
              col="1|repeat(2, auto)"
              gap="4"
              mt="4"
              w="full|auto"
              onSubmit={sendMessage}
            >
              <div>
                <VisuallyHidden>
                  <label htmlFor="name">الاسم</label>
                </VisuallyHidden>
                <input
                  value={formData.from_name}
                  variant="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="الاسم"
                  onChange={(e) => setFormData({...formData, from_name: e.target.value})}
                />
              </div>
              <div>
                <VisuallyHidden>
                  <label htmlFor="email">الايميل</label>
                </VisuallyHidden>
                <input
                  value={formData.from_email}
                  variant="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="الايميل"
                  onChange={(e) => setFormData({...formData, from_email: e.target.value})}
                />
              </div>
              <div>
                <VisuallyHidden>
                  <label htmlFor="phone">رقم الهاتف</label>
                </VisuallyHidden>
                <input
                  variant="input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="رقم الهاتف"
                />
              </div>
              <div colStart="span 2">
                <VisuallyHidden>
                  <label htmlFor="message">رسالة</label>
                </VisuallyHidden>
                <textarea
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  value={formData.message}
                  variant="textarea"
                  placeholder="رسالة"
                  id="message"
                  name="message"
                  rows="5"
                />
              </div>
              <button type="submit" variant="button.primary" colStart="span 2" fontFamily='Tajawal' >
                ارسل الرسالة
              </button>
            </form>
          
            <div bg='secondary' borderRadius='lg' p='6' color='#fff'>
              <div borderBottom="1px solid rgba(255, 255, 255, 0.2)" pb='4'>
                <h4>
                  لزيارتنا :
                </h4>
                <p>
                  شارع طوكيو 15
                  <br class='d-block'/>
                  رام الله، فلسطين
                </p>
              </div>
              <div borderBottom="1px solid rgba(255, 255, 255, 0.2)" py='4'>
                <h4>
                  تواصل معنا عبر البريد الالكتروني :
                </h4>
                <a href='mailto:ayman@abraj.ps' color='#fff' sx={{
                  ':hover': {
                    color: '#fff'
                  }
                }}> info@abraj.ps </a>
              </div>

              <div borderBottom="1px solid rgba(255, 255, 255, 0.2)" py='4'>
                <h4>
                  اتصل بنا عالارقام التالية:
                </h4>
                <a href='tel:+022987424' color='#fff' sx={{
                  ':hover': {
                    color: '#fff'
                  }
                }}>
                  tel: 02-2987424
                </a>
                <p>fax: 02-2987434</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Form;
