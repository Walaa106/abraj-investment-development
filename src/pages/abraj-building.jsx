import * as React from "react"
import Layout from '../components/layout'

export default function Example() {
    return <Layout>
        <section py="4|6|12|20">
        <div variant="container">

            <div
                display="grid"
                gridAutoFlow="dense"
                col="1|1|2"
                gap="8|8|12"
                alignItems="center"
            >
                <div>
                    <h2 variant="heading.h3" lineHeight="1" mb="10" w="130px" borderBottom='4px solid' borderColor="secondary">
                    أبراج هاوس
                    </h2>
                    <p mb="8">
                    يقع أبراج هاوس في موقع إستراتيجي مميز مطل على مدينة رام الله، و يجاور عدد من المقرات الرسمية لمجموعة من الهيئات العالمية و المحلية مثل قصر الثقافة، بالإضافة لمباني حكومية. و قريبا سيتم إنشاء قاعات المعارض التابعة لبلدية رام الله. 
            يتكون البرج من 21 طابق ، تم تخصيص 5 طوابق منها كمواقف سيارات، أما باقي الطوابق 16 فهي عبارة عن مكاتب و شركات بين متوسطة و كبيرة، و يكون طابقي الرووف الاخيرين عبارة عن مطعم ذو خدمات مميزة و عالية الجودة.

            المبنى معد وفق أعلى معايير السلامة العامة  و الاهتمام بجميع شروط الامن و الدفاع المدني  حيث أن المبنى مزود بأدراج للهروب و نظام حماية من الحريق و مولد كهربائي في حالات الطوارىء ، و طاقم حراسة على مدى 24 ساعة.
            يتوفر في المبنى كذلك منطقة استقبال في الطابق الارضي.

            يضمن التصميم المعماري للمبنى السلاسة و الراحة في الاستخدام، سواء من قبل اصحاب الشركات أو الزبائن و الزوار حيث أن المبنى مزود بأربع مصاعد لإستعمال موظفي الشركات و الزبائن و الزوار، بالإضافة الى مصعد منفصل للخدمات.

                    </p>
                    <h4 w='240px' borderBottom='4px solid' borderColor="secondary" mb="4">الخدمات المقدمة من ابراج هاوس</h4>
                    <ul>
                        <li sx={{
                            "::before": {
                                "content": '"\\2022"',
                                "display": "inline-block",
                                fontWeight: "bold",
                                "marginLeft": ".4em",
                            }
                            }}
                        >خدمات الحراسة العامة للمبنى و تكون على مدار 24 ساعة و بالاتفاق مع شركة حراسة متخصصة</li>
                        <li sx={{
                            "::before": {
                                "content": '"\\2022"',
                                "display": "inline-block",
                                fontWeight: "bold",
                                "marginLeft": ".4em",
                            }
                            }}
                            >خدمات النظافة: و تشمل الادراج و الممرات و الأجزاء العامة من المبنى بما في ذلك المداخل و الساحات الخارجية حول المبنى</li>
                        <li sx={{
                            "::before": {
                                "content": '"\\2022"',
                                "display": "inline-block",
                                fontWeight: "bold",
                                "marginLeft": ".4em",
                            }
                            }}
                            >خدمات الصيانة العامة: و تشمل صيانة معدات التكييف و مضخات المياه، صيانة الشبكات الكهربائية و المياه ، صيانة الحديقة العامة،و صيانة و تشغيل المصاعد.</li>
                        <li sx={{
                            "::before": {
                                "content": '"\\2022"',
                                "display": "inline-block",
                                fontWeight: "bold",
                                "marginLeft": ".4em",
                            }
                            }}
                            >خدمة تزويد الكهرباء المستخدمة في تشغيل المصاعد و الإنارة في الأماكن الخارجية و الممرات  و مواقف السيارات و دورات المياه المشتركة.</li>
                        <li sx={{
                            "::before": {
                                "content": '"\\2022"',
                                "display": "inline-block",
                                fontWeight: "bold",
                                "marginLeft": ".4em",
                            }
                            }}
                            >مولد كهربائي في حالة انقطاع التيار الكهربائي و ذلك لتشغيل المصاعد و انارة مواقف السيارت و الممرات و بيوت الدرج و الساحات المشتركة الداخلية و الخارجية.</li>
                        <li sx={{
                            "::before": {
                                "content": '"\\2022"',
                                "display": "inline-block",
                                fontWeight: "bold",
                                "marginLeft": ".4em",
                            }
                            }}
                            >بئر ماء لتزويد الشركات بخدمة المياه</li>
                    </ul>
                    
                </div>
                <img src='/images/abraj-internal.JPG' colStart={`null|null|2`} w="full" rounded="lg" overflow="hidden"/>
            </div>
            <div
                display="grid"
                gridAutoFlow="dense"
                col="1|1|2"
                gap="8|8|12"
                alignItems="center"
            >
            <div>
                <h2 variant="heading.h3" lineHeight="1" mb="10" w="190px" borderBottom='4px solid' borderColor="secondary">
                عائلة أبراج هاوس :
                </h2>
                <table>
                    <thead>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Jordan Bank - Abraj House Branch</span></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Lemon Café</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Azkadenya Café</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Al-Takaful Insurance</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>EUPOL COPPS</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>JPS</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>KPMG</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>UNSCO</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>NTS</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>US21</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Abraj H.Q</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Representative Office of the Hashemite kingdom of Jordan</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Representative Office of the Polish Republic</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>ASTEMED</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Representative Office of Japan</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Japan International Cooperation Agency (JICA)</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>United Nations Development Programme UNDP</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>United Nations Educational, Scientific and Cultural Organization UNESCO</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Embassy of Oman in the State of Palestine</span></td>
                    </tr>
                    <tr>
                        <td sx={{
                            "textAlign": "center",
                            "verticalAlign": "top",
                            "borderColor": "black",
                            "borderStyle": "solid",
                            "borderWidth": "1px",
                            "fontSize": "14px",
                            "overflow": "hidden",
                            "padding": "10px 5px",
                            "wordBreak": "normal"
                        }}><span>Istekana Café</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>{/**  end container */}
        </section>
    </Layout>
}