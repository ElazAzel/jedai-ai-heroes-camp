'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import type { FormatType } from '@/types'

const WA_PHONE = '77470701495'

const FORMATS: { value: FormatType; label: string }[] = [
  { value: 'on-site', label: 'On-site' },
  { value: 'external', label: 'Внешняя площадка' },
  { value: 'weekend-ai-lab', label: 'Weekend AI Lab' },
  { value: 'family-day', label: 'Family Day' },
  { value: 'not-sure', label: 'Не знаю' },
]

function buildWaMessage(data: Record<string, string>): string {
  const lines = [
    'Новая заявка JEDAI AI Heroes Camp',
    '',
    `Имя: ${data.name}`,
    `Компания: ${data.company}`,
    `Должность: ${data.position}`,
    `Телефон: ${data.phone}`,
    `Email: ${data.email}`,
    `Количество детей: ${data.childrenCount}`,
    `Формат: ${data.format ? FORMATS.find(f => f.value === data.format)?.label || data.format : 'Не указан'}`,
  ]
  if (data.comment) lines.push(`Комментарий: ${data.comment}`)
  if (data.source_page) lines.push(`Страница: ${data.source_page}`)
  if (data.audience_segment) lines.push(`Сегмент: ${data.audience_segment}`)
  if (data.experiment_variant) lines.push(`Вариант: ${data.experiment_variant}`)
  return encodeURIComponent(lines.join('\n'))
}

export function LeadForm({
  sourcePage,
  audienceSegment,
  experimentVariant,
}: {
  sourcePage: string
  audienceSegment: string
  experimentVariant: string
}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    childrenCount: '',
    format: '',
    comment: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    trackEvent('form_submit', {
      source_page: sourcePage,
      audience_segment: audienceSegment,
      experiment_variant: experimentVariant,
      format: formData.format,
    })

    const allData = {
      ...formData,
      source_page: sourcePage,
      audience_segment: audienceSegment,
      experiment_variant: experimentVariant,
    }
    const waUrl = `https://wa.me/${WA_PHONE}?text=${buildWaMessage(allData)}`
    window.location.href = waUrl
  }

  function handleFocus() {
    trackEvent('form_start', {
      source_page: sourcePage,
      audience_segment: audienceSegment,
    })
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFocus} className="glass rounded-2xl p-6 md:p-8 space-y-5">
      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="hidden" name="audience_segment" value={audienceSegment} />
      <input type="hidden" name="experiment_variant" value={experimentVariant} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="Имя" name="name" required value={formData.name} onChange={handleChange} placeholder="Ваше имя" />
        <FormField label="Компания" name="company" required value={formData.company} onChange={handleChange} placeholder="Название компании" />
        <FormField label="Должность" name="position" value={formData.position} onChange={handleChange} placeholder="Ваша должность" />
        <FormField label="Телефон / WhatsApp" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+7 700 000 00 00" />
        <FormField label="Email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="email@company.com" />
        <FormField label="Количество детей" name="childrenCount" type="number" min="1" value={formData.childrenCount} onChange={handleChange} placeholder="1" />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Предпочтительный формат
        </label>
        <select
          name="format"
          value={formData.format}
          onChange={handleChange}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
        >
          <option value="" className="bg-zinc-900">Выберите формат</option>
          {FORMATS.map((f) => (
            <option key={f.value} value={f.value} className="bg-zinc-900">
              {f.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">Комментарий</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={3}
          placeholder="Дополнительная информация..."
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-electric via-violet to-cyan text-white hover:opacity-90 transition-all glow cursor-pointer"
      >
        Получить предложение
      </button>
    </form>
  )
}

function FormField({
  label,
  name,
  type = 'text',
  required,
  value,
  onChange,
  placeholder,
  min,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  min?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-zinc-300 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
      />
    </div>
  )
}
