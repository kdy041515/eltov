'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import useTranslate from '@/hooks/useTranslate';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from "./Clients.module.scss";

export default function Clients() {
    const translate = useTranslate();
    const clientImages = [
        { src: 'https://www.tov.com.sg/public/img/trustedby/changi.png',      alt: 'Changi' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/jewel.png',       alt: 'Jewel' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/capitaland.png',  alt: 'Capitaland' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/raffles.png',     alt: 'Raffles' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/plazasing.png',   alt: 'Plazasing' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/bugisjunction.png',alt: 'Bugisjunction' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/bugisplus.png',   alt: 'Bugisplus' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/clarkequay.png',  alt: 'Clarkequay' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/funan.png',       alt: 'Funan' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/imm.png',         alt: 'Imm' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/jcube.png',       alt: 'Jcube' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/bpp.png',         alt: 'Bpp' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/bedokmall.png',   alt: 'Bedokmall' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/tm.png',          alt: 'Tm' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/tsv.png',         alt: 'Tsv' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/westgate.png',    alt: 'Westgate' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/j8.png',          alt: 'J8' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/lotone.png',      alt: 'Lotone' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/FEO.png',         alt: 'FEO' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/cqc.png',         alt: 'CQC' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/oc.png',          alt: 'OC' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/sq2.png',         alt: 'SQ2' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/wcp.png',         alt: 'WCP' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/frassers.png',    alt: 'Frassers' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/cs.png',          alt: 'CS' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/UOL.png',         alt: 'UOL' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/velocity.png',    alt: 'Velocity' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/raffl.png',       alt: 'Raffl' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/ascott.png',      alt: 'Ascott' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/NUH.png',         alt: 'NUH' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/mounte.png',      alt: 'Mounte' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/mapletree.png',   alt: 'Mapletree' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/vivo.png',        alt: 'Vivo' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/mercatus.png',    alt: 'Mercatus' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/gbtb.png',        alt: 'GBTB' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/NP.png',          alt: 'NP' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/HDB.png',         alt: 'HDB' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/NTU.png',         alt: 'NTU' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/smu.png',         alt: 'SMU' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/sg.png',          alt: 'SG' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/Shaw.png',        alt: 'Shaw' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/IDA.png',         alt: 'IDA' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/GW.png',          alt: 'GW' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/oue.png',         alt: 'OUE' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/313.png',         alt: '313' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/etude.png',       alt: 'Etude' },
        { src: 'https://www.tov.com.sg/public/img/trustedby/limit.png',       alt: 'Limit' },
    ];


    return (
        <div id="clients" className={styles.clients}>
            <div className={styles.clients_inner}>
                <h3 className={styles.clients_title}>{translate("엘토브고객사")}</h3>
                <div className={styles.clients_slider}>
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        slidesPerView="auto"
                        loop={true}
                        freeMode={{
                            enabled: true,
                            momentum: false,
                        }}
                        autoplay={{ delay: 0 }}
                        speed={2500}
                    >
                        {clientImages.map((img, idx) => (
                            <SwiperSlide key={idx} className={styles.client_slide}>
                                <img src={img.src} alt={img.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
