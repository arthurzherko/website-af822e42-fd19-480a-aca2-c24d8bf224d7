import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { GAMING_SERVICES } from '@/lib/constants'

const formSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  service: z.string(),
  hours: z.string().min(1, 'Выберите количество часов')
})

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      hours: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    // Здесь будет логика отправки формы
    console.log(values)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section id="booking" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <h2 className="text-3xl mb-8 text-center cyber-text">Забронировать место</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gamer-cyber">Ваше имя</FormLabel>
                  <FormControl>
                    <Input className="neon-border bg-transparent" placeholder="Введите имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gamer-cyber">Телефон</FormLabel>
                  <FormControl>
                    <Input className="neon-border bg-transparent" placeholder="+7 (XXX) XXX-XX-XX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gamer-cyber">Выберите услугу</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="neon-border bg-transparent">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(GAMING_SERVICES).map(([key, service]) => (
                        <SelectItem key={key} value={key}>{service.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gamer-cyber">Количество часов</FormLabel>
                  <FormControl>
                    <Input 
                      className="neon-border bg-transparent" 
                      type="number" 
                      min="1" 
                      placeholder="Введите количество часов" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full neon-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Забронировать'}
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  )
}