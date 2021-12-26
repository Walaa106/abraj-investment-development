import * as React from "react"
import Layout from '../components/layout'
import Member from "../components/member"

export default function Example() {
    return <Layout>
        {/* <iframe src='/images/jifnat-proposal.pdf' title="dummy" style={{width:'100%',height:'600px'}}></iframe> */}
        <Member 
            py="4"
            subheading="عن أبراج :"
            subheadingProps={{
                borderBottom: '4px solid',
                borderColor: "secondary",
                w: '150'
            }}
            image={{
                src: "/images/sketch.png"
            }}
            text="منـذ تأسيسـها عـام 2008 ، طـورت شـركة أبـراج للتنميـة واالسـتثمار مشـاريع عقاريـة سـكنية وتجاريـة وفـق
            أفضـل المعاييـر العالميـة. تتمركـز رؤيـة شـركة أبـراج بإدخـال نمـط جديـد مـن المشـاريع العقاريـة الحديثـة
            التـي تنعكـس نتائجهـا بصـورة إيجابيـة علـى المسـتوى المعيشـي للمجتمـع واألفـراد والنهـوض بالواقـع
            العقـاري وتطويـره."
        />
    </Layout>
}