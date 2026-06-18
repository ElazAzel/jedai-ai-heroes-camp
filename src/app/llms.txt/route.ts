import { SITE_URL } from '@/data/landingPages'

export const dynamic = 'force-static'

export async function GET() {
  const pages = [
    { slug: '', title: 'Главная' },
    { slug: 'ai-camp-for-employees-children', title: 'AI-лагерь для детей сотрудников' },
    { slug: 'corporate-ai-camp', title: 'Корпоративный AI-лагерь' },
    { slug: 'hr-benefit-ai-camp', title: 'HR benefit' },
    { slug: 'csr-ai-camp-for-kids', title: 'CSR AI-лагерь' },
    { slug: 'employer-brand-ai-camp', title: 'Employer brand' },
    { slug: 'family-day-ai', title: 'AI Family Day' },
    { slug: 'onsite-ai-camp', title: 'On-site лагерь' },
    { slug: 'external-ai-camp', title: 'Внешняя площадка' },
    { slug: 'weekend-ai-lab', title: 'Weekend AI Lab' },
    { slug: 'ai-camp-for-kids-kazakhstan', title: 'AI-лагерь Казахстан' },
    { slug: 'ai-camp-almaty', title: 'AI-лагерь Алматы' },
    { slug: 'ai-camp-astana', title: 'AI-лагерь Астана' },
    { slug: 'ai-camp-for-parents', title: 'Безопасный AI-лагерь' },
    { slug: 'ai-camp-for-teens', title: 'AI-лагерь для подростков' },
    { slug: 'ai-project-camp-for-kids', title: 'AI-проект для ребёнка' },
    { slug: 'ai-video-camp-for-kids', title: 'AI-видео для детей' },
    { slug: 'chatbot-camp-for-kids', title: 'Чат-боты для детей' },
    { slug: 'prompt-engineering-for-kids', title: 'Prompt Engineering для детей' },
    { slug: 'future-skills-for-kids', title: 'Навыки будущего' },
    { slug: 'demo-day-ai-camp', title: 'Demo Day' },
    { slug: 'ai-camp-for-banks', title: 'AI-лагерь для банков' },
    { slug: 'ai-camp-for-it-companies', title: 'AI-лагерь для IT' },
    { slug: 'ai-camp-for-telecom', title: 'AI-лагерь для телекома' },
    { slug: 'ai-camp-for-energy-companies', title: 'AI-лагерь для промышленности' },
    { slug: 'ai-camp-for-universities', title: 'AI-лагерь на базе университета' },
    { slug: 'ai-camp-summer', title: 'Летний AI-лагерь' },
    { slug: 'ai-camp-school-break', title: 'AI-лагерь на каникулы' },
    { slug: 'safe-ai-for-kids', title: 'Безопасный AI для детей' },
    { slug: 'ai-camp-program', title: 'Программа AI-лагеря' },
    { slug: 'ai-camp-commercial-offer', title: 'Коммерческое предложение' },
    { slug: 'landing-pages', title: 'Все страницы' },
  ]

  const llms = `# JEDAI AI Heroes Camp

> **Важно:** JEDAI AI Heroes Camp — это корпоративный AI-лагерь для детей сотрудников, а не развлекательный детский лагерь. Продукт предназначен для компаний, которые хотят предложить сотрудникам образовательный benefit для их детей.

## Что такое JEDAI AI Heroes Camp

JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей сотрудников. Двухнедельная программа (10 учебных дней), в ходе которой дети 10–16 лет изучают AI-инструменты, создают изображения, видео, чат-ботов и командные проекты. В финале проходит Demo Day, где дети защищают свои проекты перед родителями и представителями компании.

## Для кого продукт

- Компании, HR, L&D, CSR, PR
- Руководители компаний
- Родители детей 10–16 лет
- Дети 10–16 лет

## Основные форматы

1. On-site — лагерь на базе компании
2. Внешняя площадка — лагерь под ключ на выбранной площадке
3. Weekend AI Lab — короткий формат выходного дня
4. Family Day — семейное AI-мероприятие

## Программа на 10 дней

1. Старт миссии: что такое AI и как им пользоваться безопасно
2. Prompt Lab: как задавать AI правильные вопросы
3. AI Art Studio: генерация изображений
4. AI Video Lab: создание коротких AI-видео
5. Chatbot Builder: создание простого AI-ассистента
6. Design & Storytelling: оформление идеи
7. Team Project: командная работа над мини-продуктом
8. Testing Day: проверка и улучшения
9. Pitch Training: подготовка выступления
10. Demo Day: защита проекта

## Что создают дети

- AI-изображения
- AI-видео
- Чат-бот или AI-ассистент
- Презентация проекта
- Командный мини-продукт
- Финальный pitch deck
- Сертификат
- AI-портфолио

## Страницы сайта

${pages.map((p) => `- [${p.title}](${SITE_URL}/${p.slug})`).join('\n')}

## CTA

Получить предложение для компании: ${SITE_URL}/ai-camp-commercial-offer
`

  return new Response(llms, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
