import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности JEDAI AI Heroes Camp. Как мы собираем, используем и защищаем ваши персональные данные.',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-white mb-8">Политика конфиденциальности</h1>

        <div className="text-zinc-300 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей, оставляющих заявки на сайте JEDAI AI Heroes Camp (далее — Сайт).</p>
            <p>Заполняя форму на Сайте, Пользователь выражает свое согласие с настоящей Политикой конфиденциальности и условиями обработки своих персональных данных.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Какие данные собираются</h2>
            <p>При заполнении формы заявки мы собираем следующие персональные данные:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Имя</li>
              <li>Компания</li>
              <li>Должность</li>
              <li>Телефон / WhatsApp</li>
              <li>Email</li>
              <li>Количество детей</li>
              <li>Предпочтительный формат</li>
              <li>Комментарий</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Цели сбора данных</h2>
            <p>Персональные данные используются исключительно для:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Связи с вами для обсуждения формата JEDAI AI Heroes Camp</li>
              <li>Подготовки коммерческого предложения</li>
              <li>Улучшения качества обслуживания</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Передача данных третьим лицам</h2>
            <p>Мы не передаем персональные данные пользователей третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Защита данных</h2>
            <p>Мы принимаем необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Срок хранения</h2>
            <p>Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, или в течение срока, установленного законодательством РК.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Права пользователя</h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Запросить информацию об обработке своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения своих данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Контактная информация</h2>
            <p>По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами через WhatsApp: <a href="https://wa.me/77470701495" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">+7 747 070 1495</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Изменение Политики конфиденциальности</h2>
            <p>Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности без предварительного уведомления. Актуальная версия всегда доступна на этой странице.</p>
          </section>

          <p className="text-zinc-500 text-sm pt-4">Дата последнего обновления: 19 июня 2026 года.</p>
        </div>
      </div>
    </div>
  )
}
