import React, { useEffect, useRef, useState } from 'react'
import styles from './home.module.css'

const Home = () => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    // Dynamically load scripts
    const loadScripts = async () => {
      const THREE = await import('three')
      const VANTA = await import('vanta/dist/vanta.globe.min')

      if (!vantaEffect) {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x333333,
          color2: 0xa26161,
          size: 1.10,
          backgroundColor: 0xcacaca
        })
        setVantaEffect(effect)
      }
    }

    loadScripts()

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} className={styles.homeContainer}>
      <div className={styles.content}>
        <h1>Welcome to MyCompany AI</h1>
        <p>Explore intelligent conversations like never before.</p>
      </div>
    </div>
  )
}

export default Home
