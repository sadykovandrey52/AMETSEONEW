import type { MaterialKey } from "@/data/priceData";

export type PagePriority = "p0" | "p1" | "p2";

export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  shortName: string;
  section: "Услуги" | "Изделия" | "Клиентам";
  priority: PagePriority;
  material: MaterialKey;
  priceThicknessForFaq: string;
  heroAlt: string;
  heroImage: string;
};

export const homeMeta = {
  title: "Металлообработка в Москве на заказ — ООО АМЕТ",
  h1: "Металлообработка на заказ в Москве",
  description:
    "Лазерная резка, гибка, сварка, покраска. Закладные, кронштейны, корпуса. Субподряд. Расчёт за 2 ч. ☎ 903 523-90-25",
};

export const servicePages: ServicePage[] = [
  {
    slug: "lazernaya-rezka-metalla",
    title: "Лазерная резка металла Москва — от 39 руб/м | АМЕТ",
    h1: "Лазерная резка металла в Москве",
    description:
      "Fiber-лазер — сталь до 45мм, нержавейка, алюминий, медь, латунь. От 1 детали, ±0,1мм, срок от 1 дня. ☎ 903 523-90-25",
    shortName: "Лазерная резка металла",
    section: "Услуги",
    priority: "p0",
    material: "steel",
    priceThicknessForFaq: "3.0",
    heroAlt: "Лазерная резка металла в Москве — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1565120130293-4f1de3a5f508?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "zakladnye-detali",
    title: "Закладные детали на заказ Москва | АМЕТ",
    h1: "Закладные детали из металла на заказ",
    description:
      "Изготовление по КД: резка, гибка, сварка. Для фасадчиков, монтажников. Субподряд. ☎ +7 (903) 523-90-25",
    shortName: "Закладные детали",
    section: "Изделия",
    priority: "p0",
    material: "steel",
    priceThicknessForFaq: "6.0",
    heroAlt: "Закладные детали из стали — ООО АМЕТ, Москва",
    heroImage:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "kronshteyny",
    title: "Кронштейны металлические на заказ Москва | АМЕТ",
    h1: "Кронштейны металлические на заказ",
    description:
      "Вентфасады, инженерные системы, по КД. Сталь, нержавейка, алюминий. От 1 шт. ☎ +7 (903) 523-90-25",
    shortName: "Кронштейны",
    section: "Изделия",
    priority: "p0",
    material: "steel",
    priceThicknessForFaq: "4.0",
    heroAlt: "Кронштейны металлические на заказ — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1615109398623-b1f2d90d92f4?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "metalloobrabotka-dlya-stroiteley",
    title: "Металлообработка для строителей — субподряд Москва | АМЕТ",
    h1: "Металлообработка для строительных компаний — субподряд",
    description:
      "Изготовление по КД для фасадчиков и монтажных компаний. Субподряд. Москва и МО. ☎ +7 (903) 523-90-25",
    shortName: "Для строителей",
    section: "Клиентам",
    priority: "p0",
    material: "steel",
    priceThicknessForFaq: "8.0",
    heroAlt: "Металлообработка для строителей — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "lazernaya-rezka-stali",
    title: "Лазерная резка стали в Москве | АМЕТ",
    h1: "Лазерная резка стали в Москве",
    description:
      "Резка стали на fiber-лазере, допуск ±0,1 мм, от 1 детали. КП за 2 часа.",
    shortName: "Резка стали",
    section: "Услуги",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "2.0",
    heroAlt: "Лазерная резка стали — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "lazernaya-rezka-nerzhaveyki",
    title: "Лазерная резка нержавейки в Москве | АМЕТ",
    h1: "Лазерная резка нержавейки",
    description:
      "Режем нержавеющую сталь с азотом и без азота, чистая кромка, сроки от 1 дня.",
    shortName: "Резка нержавейки",
    section: "Услуги",
    priority: "p1",
    material: "stainless",
    priceThicknessForFaq: "2.0",
    heroAlt: "Лазерная резка нержавейки — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1533830712457-5f95f9686528?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "lazernaya-rezka-alyuminiya",
    title: "Лазерная резка алюминия в Москве | АМЕТ",
    h1: "Лазерная резка алюминия",
    description:
      "Резка алюминия и дюрали по DXF/DWG с контролем геометрии и упаковкой партий.",
    shortName: "Резка алюминия",
    section: "Услуги",
    priority: "p1",
    material: "aluminum",
    priceThicknessForFaq: "2.0",
    heroAlt: "Лазерная резка алюминия — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1613214150058-cb5f5f6d42c3?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "lazernaya-rezka-medi",
    title: "Лазерная резка меди в Москве | АМЕТ",
    h1: "Лазерная резка меди",
    description:
      "Резка меди М1/М2 под электротехнические и инженерные проекты, работа по КД.",
    shortName: "Резка меди",
    section: "Услуги",
    priority: "p1",
    material: "copper",
    priceThicknessForFaq: "2.0",
    heroAlt: "Лазерная резка меди — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "lazernaya-rezka-latuni",
    title: "Лазерная резка латуни в Москве | АМЕТ",
    h1: "Лазерная резка латуни",
    description:
      "Точная резка латунных деталей Л63/Л68, изготовление по чертежам и CAD-файлам.",
    shortName: "Резка латуни",
    section: "Услуги",
    priority: "p1",
    material: "brass",
    priceThicknessForFaq: "2.0",
    heroAlt: "Лазерная резка латуни — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "lazernaya-rezka-bronzy",
    title: "Лазерная резка бронзы в Москве | АМЕТ",
    h1: "Лазерная резка бронзы",
    description:
      "Режем бронзовые листы и заготовки по КД, согласовываем режимы и сроки под проект.",
    shortName: "Резка бронзы",
    section: "Услуги",
    priority: "p1",
    material: "brass",
    priceThicknessForFaq: "2.0",
    heroAlt: "Лазерная резка бронзы — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "lazernaya-rezka-otsinkovki",
    title: "Лазерная резка оцинкованной стали в Москве | АМЕТ",
    h1: "Лазерная резка оцинковки",
    description:
      "Резка оцинковки для вентиляции и строительных систем, партии от 1 детали.",
    shortName: "Резка оцинковки",
    section: "Услуги",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "1.5",
    heroAlt: "Лазерная резка оцинковки — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "khudozhestvennaya-lazernaya-rezka",
    title: "Художественная лазерная резка металла | АМЕТ",
    h1: "Художественная лазерная резка",
    description:
      "Декоративные панели, экраны и элементы интерьера на промышленном fiber-лазере.",
    shortName: "Художественная резка",
    section: "Услуги",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "1.0",
    heroAlt: "Художественная лазерная резка — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "gibka-metalla",
    title: "Гибка металла на заказ в Москве | АМЕТ",
    h1: "Гибка металла на заказ",
    description:
      "Гибка листового металла с допуском ±0,5° для строительных и инженерных задач.",
    shortName: "Гибка металла",
    section: "Услуги",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "3.0",
    heroAlt: "Гибка металла — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "svarka-metalla",
    title: "Сварка металла MIG/TIG в Москве | АМЕТ",
    h1: "Сварка металла MIG/TIG",
    description:
      "Сварочные сборки по чертежам, контроль геометрии, производство в Подольске.",
    shortName: "Сварка металла",
    section: "Услуги",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "4.0",
    heroAlt: "Сварка металла — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "poroshkovaya-pokraska",
    title: "Порошковая покраска металла RAL | АМЕТ",
    h1: "Порошковая покраска металла",
    description:
      "Порошковая покраска металла под требования объекта, упаковка и отгрузка по графику.",
    shortName: "Порошковая покраска",
    section: "Услуги",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "2.0",
    heroAlt: "Порошковая покраска металла — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "korpusa-kozhuhi-koroba",
    title: "Корпуса, кожухи и короба из металла | АМЕТ",
    h1: "Корпуса, кожухи и короба из металла",
    description:
      "Производим корпуса приборов, кожухи и короба по КД: резка, гибка, сварка, покраска.",
    shortName: "Корпуса и кожухи",
    section: "Изделия",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "2.0",
    heroAlt: "Корпуса и короба из металла — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1581091215367-59ab6d0d7fd6?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "metalloobrabotka-dlya-inzhiniringovih-kompaniy",
    title: "Металлообработка для инжиниринговых компаний | АМЕТ",
    h1: "Металлообработка для инжиниринговых компаний",
    description:
      "Субподряд под инжиниринговые проекты: от единичных деталей до серийных партий.",
    shortName: "Для инжиниринга",
    section: "Клиентам",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "6.0",
    heroAlt: "Металлообработка для инжиниринга — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1581090700227-1e8f05d445df?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "metalloobrabotka-dlya-nii-npo",
    title: "Металлообработка для НИИ и НПО | АМЕТ",
    h1: "Металлообработка для НИИ и НПО",
    description:
      "Изготовление по КД и техпроцессам НИИ/НПО, контроль документации и прослеживаемость.",
    shortName: "Для НИИ/НПО",
    section: "Клиентам",
    priority: "p1",
    material: "steel",
    priceThicknessForFaq: "8.0",
    heroAlt: "Металлообработка для НИИ и НПО — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "stoyki-metallicheskie",
    title: "Стойки металлические на заказ | АМЕТ",
    h1: "Стойки металлические на заказ",
    description:
      "Производим металлические стойки по чертежам, от 1 детали, сроки от 1 дня.",
    shortName: "Металлические стойки",
    section: "Изделия",
    priority: "p2",
    material: "steel",
    priceThicknessForFaq: "3.0",
    heroAlt: "Стойки металлические — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "plastiny-flantsy",
    title: "Пластины и фланцы из металла | АМЕТ",
    h1: "Пластины и фланцы из металла",
    description:
      "Лазерная резка пластин и фланцев по DXF/DWG для монтажных и инженерных объектов.",
    shortName: "Пластины и фланцы",
    section: "Изделия",
    priority: "p2",
    material: "steel",
    priceThicknessForFaq: "10",
    heroAlt: "Пластины и фланцы — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
  {
    slug: "malye-metallokonstruktsii",
    title: "Малые металлоконструкции на заказ | АМЕТ",
    h1: "Малые металлоконструкции на заказ",
    description:
      "Изготовление малых металлоконструкций с резкой, гибкой, сваркой и окраской.",
    shortName: "Малые металлоконструкции",
    section: "Изделия",
    priority: "p2",
    material: "steel",
    priceThicknessForFaq: "12",
    heroAlt: "Малые металлоконструкции — ООО АМЕТ",
    heroImage:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?auto=format&fit=crop&w=1400&q=80&fm=webp",
  },
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((page) => [page.slug, page]),
) as Record<string, ServicePage>;

export const staticSitePaths = [
  "/",
  ...servicePages.map((page) => `/${page.slug}/`),
  "/blog/",
  "/spasibo/",
  "/politika/",
];

export const blogPosts = [
  {
    slug: "kak-podgotovit-dxf-dlya-rezki",
    title: "Как подготовить DXF для лазерной резки без доработок",
    excerpt:
      "Чек-лист по слоям, контурам и допускам, чтобы получить КП быстрее и без лишних согласований.",
    publishedAt: "2026-04-01",
  },
  {
    slug: "kak-vybrat-material-dlya-zakladnyh",
    title: "Как выбрать материал для закладных деталей под проект",
    excerpt:
      "Разбираем сталь, нержавейку и оцинковку для фасадных и монтажных задач с учётом среды.",
    publishedAt: "2026-04-03",
  },
  {
    slug: "subpodryad-metalloobrabotki-dlya-stroyki",
    title:
      "Субподряд металлообработки для строительной компании: схема работы",
    excerpt:
      "Как организовать поставку деталей партиями, чтобы монтаж шёл без простоев по графику.",
    publishedAt: "2026-04-06",
  },
] as const;
