import React from "react"
import styled from "styled-components"
import { useEffect, useState } from "react"
import Section1 from "../component/Section1"
import Section2 from "../component/Section2"
import Section3 from "../component/Section3"
import FloatingIconContainer from "../../global/containers/FloatingIconContainer"

type BackgroundType = {
    color: string
}

const Section = styled.div<BackgroundType>`
    width: 100%;
    height: 100vh;
    position: relative;
    padding-top: 15px;
    background: ${props => props.color}
`

const PortfolioContainer = () => {
    const sections = [
        <Section key={0} color="#1f2937">
            <Section1/>
        </Section>,
        <Section key={1} color="#273550">
            <Section2/>
        </Section>,
        <Section key={2} color="#1f2937">
            <Section3 />
        </Section>,
    ]

    const [current, setCurrent] = useState(0)
    const goTop = () => setCurrent(0);

    useEffect(() => {
        let isScrolling = false
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling) return
            isScrolling = true
            if (e.deltaY > 0) {
                setCurrent(prev => Math.min(prev + 1, sections.length - 1))
            }
            else {
                setCurrent(prev => Math.max(prev - 1, 0))
            }
            setTimeout(() => { isScrolling = false }, 800)
        }

        window.addEventListener('wheel', handleWheel)
        return () => window.removeEventListener('wheel', handleWheel)
    }, [sections.length])

    return(
        <>
            <div style={{ 
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                margin: 0,  
                padding: 0,
             }}>
                {sections.map((section, index) => (
                    <div key={index} style={{
                        width: '100vw',
                        height: '100vh',
                        transform: `translateY(-${current * 100}vh)`,
                        transition: 'transform 0.7s ease'
                    }}>
                        {section}
                    </div>
            ))}
            </div>
            <FloatingIconContainer section={current} goTop={goTop}/>
        </>
    )
}

export default React.memo(PortfolioContainer)