export function CompanyValueSection({ audience }: { audience: string }) {
  const isParent = audience.toLowerCase().includes('родител')
  const isCompany = !isParent

  return (
    <section className="py-16 bg-zinc-900/30" aria-label="Почему это выгодно">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Почему это выгодно
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {isCompany ? (
            <>
              <ValueCard
                title="Забота о семьях"
                description="Демонстрирует сотрудникам, что компания инвестирует в развитие и досуг их детей"
              />
              <ValueCard
                title="HR-бренд и лояльность"
                description="Повышает вовлечённость и удержание сотрудников через семейные ценности"
              />
              <ValueCard
                title="CSR-активность"
                description="Готовый образовательный формат для ESG-отчётности и социальных программ"
              />
            </>
          ) : (
            <>
              <ValueCard
                title="Безопасность"
                description="Дети под контролем преподавателей в проверенной образовательной среде"
              />
              <ValueCard
                title="Навыки будущего"
                description="Ребёнок осваивает AI — технологию, которая будет важна в любой профессии"
              />
              <ValueCard
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

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  )
}
