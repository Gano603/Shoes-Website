import { useRef, useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Container1 = () => {

    const backgroundImageRef = useRef(null);
    const text_up1 = useRef(null);
    const text_up2 = useRef(null);
    const button_opacity = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    backgroundImageRef.current.style.backgroundImage = `url(${"src/assets/img/IMG_4786_1512x.jpg"})`;
                    backgroundImageRef.current.style.opacity = 1;
                    backgroundImageRef.current.style.transform = `scale(1)`;
                    text_up1.current.style.transform = 'translate(0, 0)';
                    text_up2.current.style.transform = 'translate(0, 0)';
                    button_opacity.current.style.transition = 'opacity 1.5s ease 2.5s';
                    button_opacity.current.style.opacity = 1;
                }
            })
        })
        if (backgroundImageRef.current) {
            observer.observe(backgroundImageRef.current)
        }

        return () => observer.unobserve(backgroundImageRef.current)
    }, [])
    return (
        <div className="first-container" ref={backgroundImageRef}>
            <div className="poster-above-options">
                <div>
                    <p ref={text_up1} style={{"fontSize":"5rem"}}>CODDI HOODIES</p>
                </div>
                <div className="poster-above-options2" style={{"flexDirection":"row","alignItems":"center"}}>
                    <h3 ref={text_up2}>HEAVY-WEIGHT BLEND</h3>
                    <button ref={button_opacity}>SHOP NOW <span><BsArrowRight /></span></button>
                </div>
            </div>
        </div>
    )
}

export default Container1