export function CompanyValueSection({ audience }: { audience: string }) {
  const isParent = audience.toLowerCase().includes('родител')
  const isCompany = !isParent

  return (
    <section className="py-20 bg-zinc-900/20" aria-label="Почему это выгодно">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Почему это выгодно</span>
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-xl mx-auto">
          {isCompany ? 'JEDAI решает несколько бизнес-задач одновременно' : 'Что получит ваш ребёнок'}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {isCompany ? (
            <>
              <ValueCard
                icon="🏠"
                title="Забота о семьях"
                description="Демонстрирует сотрудникам, что компания инвестирует в развитие и досуг их детей"
              />
              <ValueCard
                icon="⭐"
                title="HR-бренд и лояльность"
                description="Повышает вовлечённость и удержание сотрудников через семейные ценности"
              />
              <ValueCard
                icon="🌱"
                title="CSR-активность"
                description="Готовый образовательный формат для ESG-отчётности и социальных программ"
              />
            </>
          ) : (
            <>
              <ValueCard
                icon="🛡️"
                title="Безопасность"
                description="Дети под контролем преподавателей в проверенной образовательной среде"
              />
              <ValueCard
                icon="🚀"
                title="Навыки будущего"
                description="Ребёнок осваивает AI — технологию, которая будет важна в любой профессии"
              />
              <ValueCard
                icon="🏆"
                title="Видимый результат"
                description="AI-портфолио, сертификат и опыт публичной защиты проекта"
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bento-card rounded-xl p-6">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  )
}
