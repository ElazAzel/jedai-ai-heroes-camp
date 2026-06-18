# JEDAI AI Heroes Camp

Корпоративный AI-лагерь для детей сотрудников. SEO/GEO/AEO-оптимизированный сайт с 30 посадочными страницами.

## Стек

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- Статическая генерация (Static Export)

## Как запустить локально

```bash
npm install
npm run dev
```

Сайт будет доступен на `http://localhost:3000`.

## Как собрать проект

```bash
npm run build
```

Статические файлы будут в папке `out/`.

## Как добавить новую landing page

1. Открой `src/data/landingPages.ts`
2. Добавь новый объект в массив `LANDING_PAGES` со всеми полями
3. Страница автоматически создастся по адресу `/{slug}`
4. Обнови `robots.txt` и `llms.txt`, если нужно

### Поля landing page

| Поле | Описание |
|------|----------|
| `slug` | URL-адрес страницы |
| `audience` | Целевая аудитория |
| `intent` | Поисковый интент |
| `h1` | Заголовок H1 |
| `title` | Title (до 60 символов) |
| `description` | Meta description (155-165 символов) |
| `ogTitle` | Open Graph title |
| `ogDescription` | Open Graph description |
| `heroVariant` | Вариант героя: `corporate-premium`, `parent-trust`, `kids-creator`, `program-deep-dive`, `conversion-offer` |
| `ctaPrimary` | Основной CTA |
| `ctaSecondary` | Дополнительный CTA |
| `aeoAnswer` | Краткий ответ (40-80 слов) |
| `geoSummary` | GEO-резюме (80-120 слов) |
| `faq` | Массив вопросов-ответов (минимум 6) |
| `relatedPages` | Массив slug'ов связанных страниц |
| `experimentVariant` | Вариант эксперимента: `audience_hr`, `audience_csr`, `audience_parent`, `audience_company`, `audience_geo`, `audience_industry`, `audience_program`, `audience_conversion` |
| `heroAngle` | Угол позиционирования |

## Как настроить SEO

- **Title/Description**: задаются в данных страницы, автоматически через `generateMetadata`
- **Canonical**: автоматически проставляется на каждой странице
- **Open Graph / Twitter Cards**: автоматически
- **JSON-LD**: WebPage, FAQPage, BreadcrumbList, Organization
- **Sitemap**: автоматическая генерация через `/sitemap.xml`
- **Robots.txt**: `/robots.txt`
- **LLMs.txt**: `/llms.txt`

## Как подключить аналитику

Скопируй `.env.example` в `.env.local` и заполни ID:

```bash
cp .env.example .env.local
```

Переменные:
- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_YANDEX_METRICA_ID` — Yandex Metrica
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel

События аналитики:
- `page_view` — просмотр страницы
- `cta_click` — клик по CTA
- `form_start` — начало заполнения формы
- `form_submit` — отправка формы
- `faq_open` — открытие FAQ
- `program_day_open` — открытие дня программы
- `format_card_click` — клик по карточке формата
- `scroll_50` — скролл 50%
- `scroll_90` — скролл 90%

## Как деплоить на Vercel

1. Создай репозиторий на GitHub
2. Подключи Vercel к GitHub
3. Vercel автоматически определит настройки из `vercel.json`
4. Production branch: `main`
5. Build command: `npm run build`
6. Output directory: `out`

### Переменные окружения на Vercel

Добавь те же переменные из `.env.example` в настройках проекта на Vercel.

## Структура проекта

```
src/
├── app/
│   ├── [slug]/page.tsx      # Динамический роут для всех SEO-страниц
│   ├── landing-pages/page.tsx # Индекс всех страниц
│   ├── sitemap.xml/route.ts  # Sitemap
│   ├── robots.txt/route.ts   # Robots.txt
│   ├── llms.txt/route.ts     # LLMs.txt
│   ├── layout.tsx            # Корневой layout
│   ├── page.tsx              # Главная страница
│   └── globals.css           # Глобальные стили
├── components/
│   ├── AeoBlock.tsx          # AEO-блок краткого ответа
│   ├── AudienceCards.tsx     # Блок "Для кого"
│   ├── Breadcrumbs.tsx       # Хлебные крошки
│   ├── CompanyValue.tsx      # Блок ценности для компании/родителей
│   ├── DemoDaySection.tsx    # Блок Demo Day
│   ├── FAQSection.tsx        # FAQ-аккордеон
│   ├── Footer.tsx            # Футер
│   ├── FormatsSection.tsx    # Форматы проведения
│   ├── GeoSummary.tsx        # GEO-резюме
│   ├── Header.tsx            # Шапка
│   ├── HeroSection.tsx       # Герой (5 вариантов)
│   ├── JsonLd.tsx            # JSON-LD структуры
│   ├── LandingPageTemplate.tsx # Шаблон landing page
│   ├── LeadForm.tsx          # Форма заявки
│   ├── OutcomesGrid.tsx      # Результаты
│   ├── ProgramTimeline.tsx   # Таймлайн программы
│   ├── RelatedPages.tsx      # Связанные страницы
│   ├── SafetySection.tsx     # Безопасность
│   └── StickyCTA.tsx         # Sticky CTA для мобильных
├── data/
│   └── landingPages.ts       # Конфигурация всех 30 страниц
├── lib/
│   └── analytics.ts          # Аналитика и трекинг
└── types/
    └── index.ts              # TypeScript типы
```

## Список всех SEO-страниц

1. `/ai-camp-for-employees-children` — AI-лагерь для детей сотрудников
2. `/corporate-ai-camp` — Корпоративный AI-лагерь
3. `/hr-benefit-ai-camp` — HR benefit
4. `/csr-ai-camp-for-kids` — CSR AI-лагерь
5. `/employer-brand-ai-camp` — Employer brand
6. `/family-day-ai` — AI Family Day
7. `/onsite-ai-camp` — On-site лагерь
8. `/external-ai-camp` — Внешняя площадка
9. `/weekend-ai-lab` — Weekend AI Lab
10. `/ai-camp-for-kids-kazakhstan` — AI-лагерь Казахстан
11. `/ai-camp-almaty` — AI-лагерь Алматы
12. `/ai-camp-astana` — AI-лагерь Астана
13. `/ai-camp-for-parents` — Безопасный AI-лагерь
14. `/ai-camp-for-teens` — AI-лагерь для подростков
15. `/ai-project-camp-for-kids` — AI-проект для ребёнка
16. `/ai-video-camp-for-kids` — AI-видео для детей
17. `/chatbot-camp-for-kids` — Чат-боты для детей
18. `/prompt-engineering-for-kids` — Prompt Engineering
19. `/future-skills-for-kids` — Навыки будущего
20. `/demo-day-ai-camp` — Demo Day
21. `/ai-camp-for-banks` — AI-лагерь для банков
22. `/ai-camp-for-it-companies` — AI-лагерь для IT
23. `/ai-camp-for-telecom` — AI-лагерь для телекома
24. `/ai-camp-for-energy-companies` — AI-лагерь для промышленности
25. `/ai-camp-for-universities` — AI-лагерь на базе университета
26. `/ai-camp-summer` — Летний AI-лагерь
27. `/ai-camp-school-break` — AI-лагерь на каникулы
28. `/safe-ai-for-kids` — Безопасный AI для детей
29. `/ai-camp-program` — Программа AI-лагеря
30. `/ai-camp-commercial-offer` — Коммерческое предложение
31. `/landing-pages` — Все страницы

## Производительность

- Статическая генерация всех страниц
- Lazy loading изображений
- Оптимизированные анимации с `prefers-reduced-motion`
- Минимальные зависимости

## Целевые метрики Lighthouse

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
