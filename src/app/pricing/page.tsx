import type { Metadata } from 'next'
import { LeadForm } from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Цены на AI-лагерь для детей сотрудников',
  description: 'Стоимость JEDAI AI Heroes Camp зависит от формата, количества детей и площадки. Оставьте заявку на индивидуальный расчёт под вашу компанию.',
  robots: { index: true, follow: true },
}

const FORMATS = [
  { name: 'On-site Camp', desc: 'На базе компании', price: 'Индивидуально' },
  { name: 'External Camp', desc: 'Внешняя площадка под ключ', price: 'Индивидуально' },
  { name: 'Weekend AI Lab', desc: '1–2 дня знакомства с AI', price: 'Индивидуально' },
  { name: 'Corporate Family Day', desc: 'Семейное мероприятие с AI', price: 'Индивидуально' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-white mb-4">Стоимость JEDAI AI Heroes Camp</h1>
        <p className="text-zinc-400 mb-8 text-lg">
          Цена зависит от формата, количества детей, площадки и уровня брендинга. Мы подготовим индивидуальный расчёт.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {FORMATS.map((f) => (
            <div key={f.name} className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-1">{f.name}</h3>
              <p className="text-zinc-400 text-sm mb-3">{f.desc}</p>
              <p className="text-cyan-400 font-medium">{f.price}</p>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 text-sm mb-8">
          Стоимость рассчитывается под каждый проект. Факторы: количество детей, длительность, площадка, брендирование, дополнительные услуги.
        </p>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Получить расчёт</h2>
          <LeadForm
            sourcePage="pricing"
            audienceSegment="audience_company"
            experimentVariant="audience_conversion"
          />
        </div>
      </div>
    </div>
  )
}
