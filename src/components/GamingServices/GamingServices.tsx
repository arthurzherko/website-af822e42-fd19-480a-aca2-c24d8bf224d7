import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { GAMING_SERVICES } from '@/lib/constants'

export function GamingServices() {
  return (
    <section id="services" className="py-20 px-4">
      <motion.h2 
        className="text-4xl md:text-5xl text-center mb-12 cyber-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Наши Услуги
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Object.entries(GAMING_SERVICES).map(([key, service], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="game-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gamer-cyber">{service.name}</CardTitle>
                <CardDescription className="text-gamer-neon text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gamer-purple">
                  {service.pricePerHour} ₽/час
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}