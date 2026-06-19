export function CompanyValueSection({ audience }: { audience: string }) {
  const isParent = audience.toLowerCase().includes('родител')
  const isCompany = !isParent

  return (
    <section className="py-16 sm:py-20" aria-label="Почему это выгодно">
      <hr className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <h2 className="section-header">
          Почему это выгодно
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8 sm:mb-12 max-w-xl sm:mx-auto">
          {isCompany ? 'JEDAI решает несколько бизнес-задач одновременно' : 'Что получит ваш ребёнок'}
        </p>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-3 scrollbar-none">
          {(isCompany ? companyCards : parentCards).map((card) => (
            <div key={card.title} className="card flex-shrink-0 w-64 sm:w-auto snap-start">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const companyCards = [
  {
    title: 'Забота о семьях',
    description: 'Демонстрирует сотрудникам, что компания инвестирует в развитие и досуг их детей',
    iconPath: 'M12 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6m-8 0H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M9 7h.01M12 7h.01M15 7h.01M9 10h.01M12 10h.01M15 10h.01M9 13h.01M12 13h.01M15 13h.01',
  },
  {
    title: 'HR-бренд и лояльность',
    description: 'Повышает вовлечённость и удержание сотрудников через семейные ценности',
    iconPath: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
  },
  {
    title: 'CSR-активность',
    description: 'Готовый образовательный формат для ESG-отчётности и социальных программ',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
]

const parentCards = [
  {
    title: 'Безопасность',
    description: 'Дети под контролем преподавателей в проверенной образовательной среде',
    iconPath: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  },
  {
    title: 'Навыки будущего',
    description: 'Ребёнок осваивает AI — технологию, которая будет важна в любой профессии',
    iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z',
  },
  {
    title: 'Видимый результат',
    description: 'AI-портфолио, сертификат и опыт публичной защиты проекта',
    iconPath: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
  },
]
