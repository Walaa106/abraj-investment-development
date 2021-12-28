import * as React from "react"
import '@fontsource/sora';
import BasicSlider from "../components/basicSlider"
import Features from "../components/features"
import Member from "../components/member"
import Layout from '../components/layout'
import { ArrowRight } from 'react-feather'

export default function Example() {
  return (
    <Layout>
      <BasicSlider />
      <Features
        heading="مشاريعنا"
        features={[
          {
            heading: "مبنى أبراج",
            text: "يقع أبراج هاوس في موقع إستراتيجي مميز مطل على مدينة رام الله، و يجاور عدد من المقرات الرسمية لمجموعة من الهيئات العالمية و المحلية مثل مقر البوليس الاوروبي و مقر الأمم المتحدة و قصر الثقافة، بالإضافة لمباني حكومية. و قريبا سيتم إنشاء قاعات المعارض التابعة لبلدية رام الله. ",
            image: '/images/slider/5.JPG',
            link: (
              <a display="inline-flex" alignItems="center" href="/abraj-building">
                للمزيد <ArrowRight size="4" ml="2" />
              </a>
            ),
          },
          {
            heading: "مشروع جفنات",
            text: "يجسّـد مشـروع ضاحيـة جفنـات )جفنـات العنـب( معانـي المعيشـة النابضة بالحيـاة ضمن موقع اسـتراتيجي ،صمّمـت لتلبـي جميـع احتياجاتـك ولتقـدّ م لـك راحـة ال مثيـل لها. يوفـر الاتصال المباشـر بالشـوارع الحيويـة للمقيميـن تأقلمـا سـريعا مـع أسـلوب الحيـاة الحضـري المعاصـرليكـون كل مـا يلـزم المشـروع مـن مرافـق فـي محـط أنظاركـم ! .",
            image: '/images/jefnat.png',
            imgFullWidth: true,
            link: (
              <a display="inline-flex" alignItems="center" href="/jifnat-project">
                للمزيد <ArrowRight size="4" ml="2" />
              </a>
            ),
          },
          {
            heading: "مشاريع مستقبلية",
            text:
              "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
            image: '/images/future-projects.webp',
            link: (
              <a display="inline-flex" alignItems="center" href="future-projects">
                للمزيد <ArrowRight size="4" ml="2" />
              </a>
            ),
          },
        ]}
      />

      <Member
        subheading="رئيس مجلس الإدارة"
        heading="السيد طلال ناصر الدين"
        text="تسعى شركة أبراج لإدخال أفكار جديدة وإتجاهات هندسية حديثة، من شأنها أن تتضفي رونقاً مميزاً للأذواق المختلفة بالإضافة إلى الإبتكار بما يتفق مع مبادئ الإستثمار وذلك من خلال إستخدام الأدوات الحديثة مدعمةً بالإبداع للوصول لغاية تحقيق عوائد مالية مجدية، ودعم مسيرة التنمية الإقتصادية، والمساهمة في تحسين البيئة الاستثمارية."
        image={{
          src: "/images/talal-nasir.jpeg",
          alt: "Hero image",
        }}
        buttons={
          <div display="inline-grid" col="2" gap="2" mt="4">
            <a variant="button.primary" href="/about-us" fontFamily="Tajawal">
              قراءة المزيد
            </a>
          </div>
        } />

      <Member
        bg='#f8f8f8'
        subheading="عضو مجلس إدارة (الرئيس التنفيذي)"
        heading="السيد إبراهيم برهم "
        text="تكمن مهمة شركة أبراج في المساهمة بشكل فاعل بوضع أسس قوية ومتينة لسوق العقارات والاستثمارات الفلسطيني، لتكون ركناً أساسيا في تحريك عجلة التنمية المستدامة، مما يدعم تطوير البنية التحتية للقطاع العقاري وبالتالي تحسين الوضع الإقتصادي الفلسطيني."
        image={{
          src: "/images/ibrahem-barham.jpeg",
          alt: "Hero image",
        }}
        buttons={
          <div display="inline-grid" col="2" gap="2" mt="4">
            <a variant="button.primary" href="about-us" fontFamily="Tajawal">
              قراءة المزيد
            </a>
          </div>
        } />
    </Layout>
  )
}