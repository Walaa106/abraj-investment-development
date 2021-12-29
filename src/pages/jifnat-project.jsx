import * as React from "react"
import Layout from '../components/layout'
import { Printer } from 'react-feather';

export default function Example() {
    return <Layout>
        {/* <iframe src='/images/jifnat-proposal.pdf' title="dummy" style={{width:'100%',height:'600px'}}></iframe> */}
        <section py="6|12|20">
            <div variant="container">
            
            <div position='fixed' top='35%' left='0'>
                <button ml="auto" variant="button.primary" colStart="span 2" fontFamily='Tajawal'
                onClick={(event) => {
                    event.preventDefault();
                    window.open('/images/jifnat-proposal.pdf', "PRINT");
                }}>
                    <span ml='4' mt='1'>للطباعة</span>
                    <Printer name="printer-alt" size="20" />
                </button>
            </div>
            <div
            display="grid"
            gridAutoFlow="dense"
            col="1|1|2"
            gap="8|8|12"
            alignItems="center"
            > 
                <div
                    d="flex"
                    flexDirection="column"
                    alignItems="center|flex-start"
                    textAlign="center|right"
                >
                    {/* first section */}
                    <p variant="subheading" fontSize="22" borderBottom="4px solid" borderColor='secondary' w='100'>
                        عن أبراج : 
                    </p>
                    <p variant="text.lead" mt="2" fontSize="1rem">
                    منذ تأسيسها  عام 2008 ، طورت شركة أبراج للتنمية والاستثمار مشاريع عقارية سكنية وتجارية وفق أفضل المعايير العالمية. 
                تتمركز رؤية شركة أبراج بإدخال نمط جديد من المشاريع العقارية الحديثة التي تنعكس نتائجها بصورة إيجابية على المستوى المعيشي للمجتمع والأفراد والنهوض بالواقع العقاري وتطويره. 
                    </p>
                    {/* end first section */}
                </div>
                <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/sketch.png'
                />
                <div
                    d="flex"
                    flexDirection="column"
                    alignItems="center|flex-start"
                    textAlign="center|right"
                >
                    <p variant="subheading" fontSize="22" borderBottom="4px solid" borderColor='secondary' w='350' mt='10'>
                      فريق عمل كفء وشراكات استراتيجية :
                    </p>
                    <p variant="text.lead" mt="2" fontSize="1rem">
                        يتكون فريق عمل  أبراج المحترف من الخبراء والمختصين في مجال العقارات، وقد تمكنت من تعزيز مكانتها في سوق العقارات المحلي وتجاوز كل الصعوبات. 
                    </p>

                    <p variant="subheading" fontSize="22" borderBottom="4px solid" borderColor='secondary' w='350' mt='10'>
                        نعيد صياغة مفاهيم نمط الحياة:
                    </p>
                    <p variant="text.lead" mt="2" fontSize="1rem">
                    .تتميّز كل عقاراتنا ضمن شركة أبراج بتصاميم فريدة من نوعها لكل واحدٍ منها، بما يوفر لعملائنا أساليب الحياة التي يطمحون إليها في مجمّعاتنا السكنية النابضة بالحياة، مع توفّر خدماتنا بصورة دائمة فيها عبر فرق أبراج لإدارة المجمّعات  استطاعت من خلالها إعادة صياغة مفهوم نمط الحياة، عبر التركيز على التصاميم والأبنية ذات الجودة العالية، إلى جانب التزامها بتسليم مشاريعها في التواريخ المحددة مسبقاً.
                        <p>
                        يضم فريق الإدارة العليا لأبراج، مجموعةً من ذوي الخبرات الكبيرة في القطاعات المختلفة، والذين ساهموا بشكلٍ ملحوظ في توجيه الشركة نحو ترسيخ مكانتها كواحدةٍ من أقوى شركات التطوير العقاري وأنماط الحياة بالإضافة لتمتعها بمجموعةً من المسؤولين من ذوي الكفاءة والخبرة، والذين يتركز اهتمامهم على توفير أفضل مستويات الجودة  بحيث تلتزم أبراج بالحفاظ على البيئة وضمان استدامة مجمّعاتها.
                        </p>
                    </p>
                </div>    
                <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/future-project.png'
                />

                <div
                    d="flex"
                    flexDirection="column"
                    alignItems="center|flex-start"
                    textAlign="center|right"
                >
                    <p variant="subheading" fontSize="22" borderBottom="4px solid" borderColor='secondary' w='full' mt='10'>
                    مرحباً بك في مشروع ضاحية جفنات  ... اكتشف عالماً من الرفاهية بمفهوم جديد وعصري ! 
                    </p>
                    <p  variant="text.lead" mt="2" fontSize="1rem" mb='4'>
                    يجسّد مشروع ضاحية جفنات معاني المعيشة النابضة بالحياة ضمن موقع استراتيجي ، صمّمت لتلبي جميع احتياجاتك ولتقدّم لك راحة لا مثيل لها. 
                    </p>
                    <p  variant="text.lead" mt="2" fontSize="1rem" mb='4'>
                        يوفّر الاتصال المباشر بالشوارع الحيوية للمقيمين تأقلماً سريعاً مع أسلوب الحياة الحضري المعاصر ليكون كل ما يلزم المشروع من مرافق في محط أنظاركم ! .
                    </p>
                    <p  variant="text.lead" mt="2" fontSize="1rem" mb='4'>
                    باشرت شركة أبراج للتنمية والإستثمار بتطوير موقع المشروع ضمن مشاريع التطوير العقاري التي تقوم بها الشركة وعلى مساحة تزيد على سبعة وثلاثون دونماً من أراضي بلدة جفنا، حيث يقع مشروع ضاحية أراضي جفنا في موقع إستراتيجي مميز مطل وهادئ وبالقرب من أهم المرافق العامة الخدماتية في بلدة جفنا والتي تشهد إقبالا كبيرا من قبل الأفراد والمستثمرين، وعلى مسافة هوائية أقل من ستة ونصف كيلو متر من مركز مدينة رام الله ومسافة تقارب العشرة كيلو مترات بواسطة المركبة. 
                    </p>
                </div>
                <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/jefnat.png'
                />
                <div
                    d="flex"
                    flexDirection="column"
                    alignItems="center|flex-start"
                    textAlign="center|right"
                >

                    <p variant="subheading" fontSize="22" borderBottom="4px solid" borderColor='secondary' w='240' mt='10'>
                    حيث تطلق العنان لإبداعك
                    </p>
                    <p  variant="text.lead" mt="2" fontSize="1rem" mb='4'>
                        يصنّف المشروع بأحد أكثر المشاريع تميزا لتصنيفه و إعتمادة كضاحية فلل مستقبلية و لما يتضمنة المشروع من توفر بنية تحتية متطورة ذات مواصفات عالية لضمان سكن مريح تلبي إحتياجات الأفراد والمستثمرين كون المشروع يتيح للمستثمرين بناء وحداتهم السكنية وفق رغباتهم واسلوبهم الخاص ، بالإضافة للمساحات الخضراء المنتشرة والموزّعة في جميع أنحاء المشروع ، فضلاً عن منطقة الخدمات العامة للأطفال و للعائلات والتي تشكل متنفساً.
                    </p>


                    <p variant="subheading" fontSize="22" borderBottom="4px solid" borderColor='secondary' w='170' mt='10'>
                    حياةٌ بمستوى جديد
                    </p>
                    <p  variant="text.lead" mt="2" fontSize="1rem" mb='4'>
                    يوفر موقع ضاحية أراضي جفنا 44 قطعة أرض تتراوح مساحتها ما بين 500-600 متر مربع ، كل قطعة منها مفروزة ومزودة بكوشان أرض"طابو" ، ومجّهزة ببنية تحتية توفر جميع الخدمات الأساسية و الرئيسية ، علاوةً على ربط المشروع بشبكة الطرق الرئيسية لتكون ضاحية أراضي جفنات وجهة الباحثين عن التميز والخيار الصحيح  وجهة للاستثمار المستقبل. 
                    </p>


                    <p variant="subheading" fontSize="22" borderBottom="4px solid" borderColor='secondary' w='150' mt='10'>
                        تخطيط عصري: 
                    </p>
                    <p  variant="text.lead" mt="2" fontSize="1rem" mb='4'>
                        يتميز مشروع ضاحية أراضي جفنات بتخطيط عصري لتوزيع قطع الأراضي و شبكة الطرق الرئيسية الواسعة المؤدية للمشروع بالإضافة لشبكة الطرق الداخلية التي تخدم جميع قطع الأراضي بطريقة سلسه و المرتبطتان بالشوارع الرئيسية لبلدة جفنا وبيرزيت المجاورة ، بالإضافة لسهولة وسرعة الوصول لمركز مدينة رام الله عن طريق شبكة الطرق الرابطة والتي قامت بلدية رام الله بإستحداثها مؤخرا في منطقة الطيرة وصولاً لمنطقة سردا، وأيضا سهولة وسرعة الوصول لموقع المشروع من عدّة محافظات مختلفة مثل نابلس والقدس.
                    </p>
                </div>

                <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/anan.png'
                />
            </div>
            <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/before-table.png'
            />
            <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/jifnat-table.png'
            />

            <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/sewar.png'
            />

            <img colStart={`null|null|2`}
                    w="full"
                    rounded="lg"
                    overflow="hidden"
                    src='/images/sewar-2.png'
            />
        </div>
        </section>
    </Layout>
}