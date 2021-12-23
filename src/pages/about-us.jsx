import * as React from "react"
import Layout from '../components/layout'
import Member from "../components/member"

export default function Example() {
    return <Layout>
        <Member
            pb="2"
            subheading="نبذة عن الشركة:"
            text="
            نشئت
            ُ
            أ شركة أبراج للتنمية واإلستثمار املساهمة الخصوصية املحدودة في عام 2008 ،وسجلت لدى مراقب الشركات
            وفقا
            ألحكام قانون الشركات تحت رقم )562522078 .)والغرض األساس ي للشركة كما حدده عقد تأسيسها هو بناء املنشآت
            الكاملة أو جزء منها، والقيام باألنشطة العقارية بكافة أنواعها.
            
            يبلغ رأس مال شركة أبراج )000,000,25 )خمسة وعشرون مليون دولار أمريكي موزعة على )000,000,25 )خمسة وعشرون
            مليون سهم بقيمة اسمية دولار امر يكي للسهم الواحد. وتمارس الشركة نشاطها في مقرها الكائن في مبنى أبراج هاوس والواقع
            في منطقة عين منجد بمدينة رام هللا."
            imagesTitle="مجلس إدارة شركة أبراج للتنمية والاستثمار"
            images={[{
                src: '/images/member-1.png'
            }, {
                src: '/images/member-2.png'
            }]}
        />

        <Member 
            py="4"
            subheading="أهداف الشركة:"
            text="
            تهدف شركة أبراج إلدخال نمط جديد من املشاريع العقارية الحديثة التي تنعكس نتائجها بصورة إيجابية على املستوى
            املعيش ي للمجتمع واألفراد والنهوض بالواقع العقاري وتطويره عن طريق:
            - إنشاء مناطق سياحية وصناعية متقدمة.
            - بناء املجمعات التجارية، اإلدارية، السكنية والضواحي.
            - بناء مراكزالتسوق الحديثة واملراكزالتجارية.
            املشاركة بنشاط وفاعلية في تنمية األراض ي التجارية من خالل شراء األراض ي في املناطق الحيوية، وتوفيرالبنية التحتية
            الالزمة، وتقسيم وإفرازاألراض ي وبيعها لبناء الوحدات السكنية."
            images={[{
                src: '/images/member-3.png'
            }, {
                src: '/images/member-4.png'
            }]}
        />

        <Member 
            py="4"
            subheading="رسالة الشركة:"
            text="
            تهدف شركة أبراج إلدخال نمط جديد من املشاريع العق
            تكمن مهمة شركة أبراج في املساهمة بشكل فاعل بوضع أسس قوية ومتينة لسوق العقارات واالستثمارات الفلسطيني،
            أساسيا في
            
            لتكون ركنا تحريك عجلة التنمية املستدامة، مما يدعم تطوير البنية التحتية للقطاع العقاري وبالتالي تحسين
            الوضع اإلقتصادي الفلسطيني"
            images={[{
                src: '/images/member-5.png'
            }]}
        />

        <Member 
            py="4"
            subheading="رؤية الشركة:"
            text="تسعى شركة أبراج إل دخال أفكار جديدة وإتجاهات هندسية حديثة، لألذواق املختلفة

            مميزا
            
            من شأنها أن تتضفي رونقا
             باإلضافة إلى اإلبتكار بما يتفق مع مبادئ اإلستثمار وذلك من خالل إستخدام ا باإلبداع
            ألدوات الحديثة مدعمة للوصول
            لغاية تحقيق عوائد مالية مجدية، ودعم مسيرة التنمية اإلقتصادية، واملساهمة في تحسين البيئة االستثمارية."
        />
    </Layout>
}