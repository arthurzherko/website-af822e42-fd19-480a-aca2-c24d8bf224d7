import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CONTACT_INFO } from '@/lib/constants'

export function ContactInfo() {
  return (
    <section className="py-20 px-4 bg-gamer-dark/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="neon-border bg-transparent">
          <CardContent className="p-6">
            <h2 className="text-3xl mb-6 text-center cyber-text">Как нас найти</h2>
            <div className="space-y-4 text-center">
              <p className="text-xl">
                <span className="text-gamer-cyber">Телефон: </span>
                <span className="text-gamer-neon">{CONTACT_INFO.phone}</span>
              </p>
              <p className="text-xl">
                <span className="text-gamer-cyber">Адрес: </span>
                <span className="text-gamer-neon">{CONTACT_INFO.address}</span>
              </p>
              <p className="text-xl">
                <span className="text-gamer-cyber">Время работы: </span>
                <span className="text-gamer-neon">{CONTACT_INFO.workingHours}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}