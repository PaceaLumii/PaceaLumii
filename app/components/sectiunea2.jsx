'use client'

import Image from 'next/image';
import fisrtsImage from '../../public/images/firstpicture.jpeg';
import secondImage from '../../public/images/secondpicture.jpeg';
import carte from '../../public/images/carte.jpeg';

function Section2(){
    return(
        <div id="section2" className='center'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Image 
                            src={fisrtsImage} 
                            alt=''
                            sizes="100vw"
                                // Make the image display full width
                            style={{
                                width: '60%',
                                height: 'auto',}}
                            blurDataURL="data:..." 
                            placeholder="blur" 
                            />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h4 className='py-5'>CRUCEA DIN SATUL HUREZ, JUDEȚUL BRAȘOV ( LÂNGĂ FĂGĂRAȘ) - VINDECĂTOAREA</h4>    
                            <p>A treia cruce facută de Moș Ilie. Crucea din satul Hurez, județul Brașov, este cunoscută și sub numele de Crucea Vindecătoarea. Această cruce este considerată un loc cu puteri vindecătoare și este vizitată de oameni din toate colțurile țării care caută vindecare pentru diferite afecțiuni.</p>
                        </div>
                    </div>
                    <div className='row py-5' >

                        <div className='col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1 order-sm-2 order-2'>
                            <h4 className='py-5'>RACLA SFÂNTULUI IOAN BOTEZĂTORUL</h4>
                            <p>Se spune despre Sfintele moaște (trupul)  Sf. Ioan Botezătorul că se  găsesc în apropierea Mănăstirii Bucium. Trupul se va  așeza singur  în racla construită, în apropierea venirii Mântuitorului pentru cea de a Doua Judecată.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 order-lg-2 order-md-2 order-sm-1 order-1'>
                            <Image 
                                src={secondImage} 
                                alt=''
                                sizes="100vw"
                                // Make the image display full width
                                style={{
                                width: '60%',
                                height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Image 
                            src={carte} 
                            alt=''
                            sizes="100vw"
                                // Make the image display full width
                            style={{
                                width: '60%',
                                height: 'auto',}}
                            blurDataURL="data:..." 
                            placeholder="blur" 
                            />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h4 className='py-5'>Text din carte</h4>
                        <p>Lui Moș Ilie i s-au arătat, a fost îndrumat și ajutat în această misiune de a construi Sfânta Raclă în cinstea Sfântului Ioan Botezătorul de către însuși Maica Domnului, Sfântul Ioan Botezătorul, Sfântul Ioan Evanghelistul, Sfântul Nicolae care s-a rugat pentru această lucrare, Sfântul Apostol Pavel și Sfânta Parascheva, dealtfel a fost ajtat de toți sfinții pomeniți, în toată lucrarea și sarcina pe care a avut-o de îndeplinit prin poruncă Dumnezeiască, Prin Moș Ilie.
                            <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                Citește mai mult
                            </button>
                        </p>
                        <div style={{minHeight: "40px"}}>
                            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                <div className="card card-body" style={{width: "auto"}}> 
                                Proorocul din Hurez, Proorocul românilor, a arătat Dumnezeu cum să fie pregătită cea de a doua Venire a Mântuitorului nostru Iisus Hristos, aici la noi, în grădina Maicii Domnului.
                                La începutul lunii decembrie, din vorbă în vorbă s-a aflat că Părintele Pantelimon împreună cu încă trei persoane, trebuie să sosească cu Sfânta Raclă de la București și va fi sfințită pe 6 Dececembrie de Sfântul Nicolae.Seara dianinte, pe 5 decembrie, trebuia să sosească cu Racla în gară, în Făgăraș. Credincioșii din Hurez împreună cu preoți și călugări din mănăstirea Sâmbăta de Sus, s-au dus la gară să-l aștepte pe părintele Pantelimon, care era însoțit de ginerele lui Moș Ilie, un bărbat, Nelu îl chema, din satul Voievodeni și un bărbat din Întorsura Buzăului. Vreo 200 de oameni așteptau în gară, iar până să sosească părintele Pantelimon împreună cu cei trei bărbați, securitatea i-a arestat pe toți. Preoți și civili, nu i-au ținut mult și le-au dat drumul, între ei au fost și oameni ai securității, îmbrăcați în preoți.
                                Atât la București, cât și la Făgăraș, erau  în toate gările oameni de la securitate. Cu racla de 1,80 m lungime nu era ușor să treci neobservat pe peronul gării. La îndemnul Părintelui Arsenie Boca ( Sfântul Ardealului), deoarece erau urmăriți, nu au reșit să urce în trenul cu care și-au propus.Mănăstirea PACEA LUMII din Bucium încă nu s-a construit. Aceasta este un dar și i se cere poporului român să o facă, dacă nu o va face, se va lua darul de la poporul român și i se va da altui neam mai vrednic. Să nu lăsăm să ni se ia acest dar.
                                </div>
                            </div> 
                        </div>
                        </div>
                    </div>
                </div>
            <hr></hr>
    </div>
    )
}

export default Section2