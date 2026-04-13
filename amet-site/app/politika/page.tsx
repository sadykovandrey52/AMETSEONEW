import type { Metadata } from "next";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных — ООО АМЕТ",
  description:
    "Политика в отношении обработки персональных данных ООО «АМЕТ» в соответствии с 152-ФЗ.",
};

export default function PolicyPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="container-default max-w-4xl space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="font-heading text-3xl font-extrabold text-heading md:text-4xl">
          Политика обработки персональных данных
        </h1>
        <p className="text-sm text-slate-500">
          Оператор персональных данных: {company.name}, ИНН {company.inn}, ОГРН{" "}
          {company.ogrn}, адрес: {company.officeAddress}.
        </p>
        <p>
          Настоящая Политика определяет порядок обработки и защиты персональных
          данных пользователей сайта amet-k.ru. Предоставляя данные через формы
          сайта, пользователь подтверждает согласие на их обработку в целях
          подготовки коммерческого предложения, обратной связи и исполнения
          договорных обязательств.
        </p>
        <h2 className="text-xl font-bold text-heading">1. Состав данных</h2>
        <p>
          Мы можем обрабатывать: имя, телефон, email, название компании,
          комментарий к заявке, а также приложенные файлы (DXF/DWG/PDF/STEP).
        </p>
        <h2 className="text-xl font-bold text-heading">2. Цели обработки</h2>
        <p>
          Цели обработки: расчёт стоимости заказа, направление коммерческого
          предложения, взаимодействие по заявке, исполнение обязательств по
          договору и ведение клиентской истории в CRM.
        </p>
        <h2 className="text-xl font-bold text-heading">
          3. Передача третьим лицам
        </h2>
        <p>
          Для обработки заявок могут использоваться внешние сервисы: хранилище
          файлов, CRM, корпоративная почта и мессенджеры. Передача данных
          осуществляется только в объёме, необходимом для выполнения целей
          обработки.
        </p>
        <h2 className="text-xl font-bold text-heading">4. Права пользователя</h2>
        <p>
          Пользователь вправе запросить уточнение, блокирование или удаление
          своих персональных данных, направив обращение на {company.email}.
        </p>
        <h2 className="text-xl font-bold text-heading">5. Контакты оператора</h2>
        <p>
          По вопросам обработки персональных данных обращайтесь: {company.phone},
          {" "}
          {company.email}.
        </p>
      </div>
    </article>
  );
}
