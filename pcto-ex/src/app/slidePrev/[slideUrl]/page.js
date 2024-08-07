'use client'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import slideData  from '../../../utils/slidesData'
import Link from 'next/link'

export default function Page({ params }) {
    const [ slideUrl, setSlideUrl] = useState(null)

    useEffect(() => {
        for (const slide of slideData) {
            console.log(params.slide)
            if (slide.id == params.slideUrl) {
                setSlideUrl(slide)
                break
            } 
        }
    }, [])


    return (
        <div className={styles.pageContent}>
            <div className={styles.numeroWrapper}>
                <div className={styles.numero}>
                    {slideUrl?.numero}
                </div>
            </div>

            <div className={styles.intro}>
                {slideUrl?.intro}
            </div>

            <div className={styles.mainContent}>
                <div className={styles.text}>
                    <p>{slideUrl?.content}</p>
                </div>

                
                <div className={styles.img}>
                    <img src={`${slideUrl?.img}`} alt='boboz'/>
                </div>

            </div>

            <Link href={`${slideUrl?.linkNext}`}>
                <div className={styles.nextLink}></div>
            </Link>

            <Link href={`${slideUrl?.linkPrev}`}>
                <div className={styles.linkPrev}></div>
            </Link>
            
            <div className={styles.footer}>
                <div className={styles.settimana}>
                    <p>{slideUrl?.settimana}</p>
                </div>

                <div className={styles.data}>
                    <p>{slideUrl?.data}</p>
                </div>

                <div className={styles.topic}>
                    <p>{slideUrl?.topic}</p>
                </div>
            </div>

        </div>
    );
}