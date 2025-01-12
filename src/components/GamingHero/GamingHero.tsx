import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeIn } from '@/lib/animations'

export function GamingHero() {
  return (
    <motion.section 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <motion.h1 
        className="text-6xl md:text-8xl font-bold mb-6 cyber-text animate-cyber-glitch"
      >
        GAME ZONE
      </motion.h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gamer-neon animate-neon-pulse">
        Погрузись в мир игр на самом современном оборудовании.
        От PlayStation 5 до мощных игровых PC и VR!
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Button 
          className="neon-button text-lg"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Наши услуги
        </Button>
        <Button 
          className="neon-button text-lg"
          variant="outline"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Забронировать
        </Button>
      </div>
    </motion.section>
  )
}