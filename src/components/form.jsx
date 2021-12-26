import * as React from "react"
import { VisuallyHidden } from "reflexjs"
import emailjs from 'emailjs-com';

export default function Block({
  subheading,
  heading,
  text,
  buttons,
  ...props
}) {
  const sendMessage = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: 'Walaa' + " (wala.abulebdeh@gmail.com)",
      to_name: 'Walaa',
      feedback: this.state.feedback
    };
    emailjs
      .send("gmail", "portfoliositecontact", templateParams, "zmdhw4c")
      .then(
        function(response) {
          // toast.success("Your message has successfully sent!", {
          //   position: toast.POSITION.BOTTOM_CENTER
          // });
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          console.log(err, 'err')
          // toast.error("Your message was not able to be sent");
        }
      );
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
            >
              <div>
                <VisuallyHidden>
                  <label htmlFor="name">الاسم</label>
                </VisuallyHidden>
                <input
                  variant="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="الاسم"
                />
              </div>
              <div>
                <VisuallyHidden>
                  <label htmlFor="email">الايميل</label>
                </VisuallyHidden>
                <input
                  variant="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="الايميل"
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
                  variant="textarea"
                  placeholder="رسالة"
                  id="message"
                  name="message"
                  rows="5"
                />
              </div>
              <button type="submit" variant="button.primary" colStart="span 2" fontFamily='Tajawal'>
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
                <p> info@abraj.ps </p>
              </div>

              <div borderBottom="1px solid rgba(255, 255, 255, 0.2)" py='4'>
                <h4>
                  اتصل بنا عالارقام التالية:
                </h4>
                <p>
                  tel: 02-2987424
                </p>
                <p>fax: 02-2987434</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}