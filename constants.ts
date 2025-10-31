// NOTE: These questions and answers are placeholders to demonstrate the application's functionality.
// They should be replaced with the actual questions from the study.

export const IMAGES = [
    { id: 1, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question1_wgnvgh.png', name_ru: 'Рабочий стол', name_lv: 'Rakstāmgalds' },
    { id: 2, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question2_u6d3rh.png', name_ru: 'Офисные предметы', name_lv: 'Biroja priekšmeti' },
    { id: 3, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question3_mcmy0u.png', name_ru: 'Гаджеты и посуда', name_lv: 'Sīkrīki un trauki' },
    { id: 4, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question4_mrcfgl.png', name_ru: 'Спорт и аксессуары', name_lv: 'Sports un aksesuāri' },
    { id: 5, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question5_oj6krv.png', name_ru: 'Аксессуары и багаж', name_lv: 'Aksesuāri un bagāža' },
];

export const QUIZ_DATA = [
    // Image 1
    [
        {
            ru: { q: 'Какого цвета ноутбук?', a: ['Серебряный', 'Черный', 'Белый', 'Синий'] },
            lv: { q: 'Kādā krāsā ir portatīvais dators?', a: ['Sudraba', 'Melns', 'Balts', 'Zils'] },
        },
        {
            ru: { q: 'Что изображено на кофейной чашке?', a: ['Сердце', 'Звезда', 'Смайлик', 'Ничего'] },
            lv: { q: 'Kas ir attēlots uz kafijas krūzes?', a: ['Sirds', 'Zvaigzne', 'Smaidiņš', 'Nekas'] },
        },
        {
            ru: { q: 'Сколько ручек в стакане?', a: ['Две', 'Три', 'Четыре', 'Пять'] },
            lv: { q: 'Cik pildspalvu ir glāzē?', a: ['Divas', 'Trīs', 'Četras', 'Piecas'] },
        },
        {
            ru: { q: 'Какого цвета блокнот?', a: ['Желтый', 'Синий', 'Зеленый', 'Красный'] },
            lv: { q: 'Kādā krāsā ir piezīmju grāmatiņa?', a: ['Dzeltena', 'Zila', 'Zaļa', 'Sarkana'] },
        },
        {
            ru: { q: 'Есть ли на столе растение?', a: ['Да, в горшке', 'Да, в вазе', 'Нет', 'Только листья'] },
            lv: { q: 'Vai uz galda ir augs?', a: ['Jā, podiņā', 'Jā, vāzē', 'Nē', 'Tikai lapas'] },
        },
        {
            ru: { q: 'Какой предмет лежит рядом с мышкой?', a: ['Телефон', 'Ключи', 'Очки', 'Часы'] },
            lv: { q: 'Kāds priekšmets atrodas blakus pelei?', a: ['Telefons', 'Atslēgas', 'Brilles', 'Pulkstenis'] },
        },
        {
            ru: { q: 'Какая форма у лампы?', a: ['Круглая', 'Квадратная', 'Коническая', 'Цилиндрическая'] },
            lv: { q: 'Kāda forma ir lampai?', a: ['Apaļa', 'Kvadrātveida', 'Koniska', 'Cilindriska'] },
        },
        {
            ru: { q: 'Из какого материала сделан стол?', a: ['Дерево', 'Металл', 'Стекло', 'Пластик'] },
            lv: { q: 'No kāda materiāla ir izgatavots galds?', a: ['Koks', 'Metāls', 'Stikls', 'Plastmasa'] },
        },
    ],
    // Image 2
    [
        {
            ru: { q: 'Какого цвета степлер?', a: ['Черный', 'Красный', 'Синий', 'Серый'] },
            lv: { q: 'Kādā krāsā ir skavotājs?', a: ['Melns', 'Sarkans', 'Zils', 'Pelēks'] },
        },
        {
            ru: { q: 'Сколько скрепок видно на изображении?', a: ['Много', 'Около 10', 'Около 20', 'Ни одной'] },
            lv: { q: 'Cik saspraužu ir redzams attēlā?', a: ['Daudz', 'Apmēram 10', 'Apmēram 20', 'Nevienas'] },
        },
        {
            ru: { q: 'Есть ли на картинке ножницы?', a: ['Да', 'Нет', 'Только одна половина', 'Не видно'] },
            lv: { q: 'Vai attēlā ir šķēres?', a: ['Jā', 'Nē', 'Tikai viena puse', 'Nav redzamas'] },
        },
        {
            ru: { q: 'Какого цвета кнопки?', a: ['Разноцветные', 'Только красные', 'Только синие', 'Черные'] },
            lv: { q: 'Kādā krāsā ir spraudītes?', a: ['Daudzkrāsainas', 'Tikai sarkanas', 'Tikai zilas', 'Melnas'] },
        },
        {
            ru: { q: 'Какой предмет находится в центре?', a: ['Дырокол', 'Степлер', 'Скотч', 'Ластик'] },
            lv: { q: 'Kāds priekšmets ir centrā?', a: ['Caurumotājs', 'Skavotājs', 'Līmlente', 'Dzēšgumija'] },
        },
        {
            ru: { q: 'Какого цвета самый большой зажим для бумаг?', a: ['Черный', 'Серебряный', 'Золотой', 'Синий'] },
            lv: { q: 'Kādā krāsā ir lielākais papīra saspraude?', a: ['Melna', 'Sudraba', 'Zelta', 'Zila'] },
        },
        {
            ru: { q: 'Есть ли на изображении точилка для карандашей?', a: ['Да', 'Нет', 'Возможно', 'Непонятно'] },
            lv: { q: 'Vai attēlā ir zīmuļu asināmais?', a: ['Jā', 'Nē', 'Iespējams', 'Nav skaidrs'] },
        },
        {
            ru: { q: 'Каков фон изображения?', a: ['Белый', 'Серый', 'Деревянный', 'Черный'] },
            lv: { q: 'Kāds ir attēla fons?', a: ['Balts', 'Pelēks', 'Koka', 'Melns'] },
        },
    ],
    // Image 3
    [
        {
            ru: { q: 'Какая марка телефона видна?', a: ['Apple', 'Samsung', 'Не видно', 'Другая'] },
            lv: { q: 'Kāda telefona marka ir redzama?', a: ['Apple', 'Samsung', 'Nav redzama', 'Cita'] },
        },
        {
            ru: { q: 'Какого цвета наушники?', a: ['Белые', 'Черные', 'Серые', 'Синие'] },
            lv: { q: 'Kādā krāsā ir austiņas?', a: ['Baltas', 'Melnas', 'Pelēkas', 'Zilas'] },
        },
        {
            ru: { q: 'Что налито в чашке?', a: ['Кофе', 'Чай', 'Вода', 'Пусто'] },
            lv: { q: 'Kas ir ieliets krūzē?', a: ['Kafija', 'Tēja', 'Ūdens', 'Tukša'] },
        },
        {
            ru: { q: 'Есть ли на изображении планшет?', a: ['Да', 'Нет', 'Только чехол', 'Возможно'] },
            lv: { q: 'Vai attēlā ir planšetdators?', a: ['Jā', 'Nē', 'Tikai vāciņš', 'Iespējams'] },
        },
        {
            ru: { q: 'Какой предмет лежит на книге?', a: ['Очки', 'Ручка', 'Телефон', 'Мышь'] },
            lv: { q: 'Kāds priekšmets atrodas uz grāmatas?', a: ['Brilles', 'Pildspalva', 'Telefons', 'Pele'] },
        },
        {
            ru: { q: 'Какого цвета обложка книги?', a: ['Черная', 'Белая', 'Синяя', 'Красная'] },
            lv: { q: 'Kādā krāsā ir grāmatas vāks?', a: ['Melns', 'Balts', 'Zils', 'Sarkans'] },
        },
        {
            ru: { q: 'Есть ли на столе блюдце?', a: ['Да', 'Нет', 'Только чашка', 'Два блюдца'] },
            lv: { q: 'Vai uz galda ir apakštase?', a: ['Jā', 'Nē', 'Tikai krūze', 'Divas apakštases'] },
        },
        {
            ru: { q: 'Какой формы часы?', a: ['Круглые', 'Квадратные', 'Прямоугольные', 'Овальные'] },
            lv: { q: 'Kāda forma ir pulkstenim?', a: ['Apaļa', 'Kvadrātveida', 'Taisnstūra', 'Ovāla'] },
        },
    ],
    // Image 4
    [
        {
            ru: { q: 'Какого цвета гантели?', a: ['Синие', 'Черные', 'Красные', 'Зеленые'] },
            lv: { q: 'Kādā krāsā ir hanteles?', a: ['Zilas', 'Melnas', 'Sarkanas', 'Zaļas'] },
        },
        {
            ru: { q: 'Какой спортивный инвентарь лежит в центре?', a: ['Скакалка', 'Эспандер', 'Мяч', 'Бутылка'] },
            lv: { q: 'Kāds sporta inventārs atrodas centrā?', a: ['Lecamaukla', 'Espanders', 'Bumba', 'Pudele'] },
        },
        {
            ru: { q: 'Есть ли на изображении полотенце?', a: ['Да, серое', 'Да, белое', 'Нет', 'Да, синее'] },
            lv: { q: 'Vai attēlā ir dvielis?', a: ['Jā, pelēks', 'Jā, balts', 'Nē', 'Jā, zils'] },
        },
        {
            ru: { q: 'Какого цвета кроссовки?', a: ['Серые с оранжевым', 'Черные', 'Белые', 'Синие'] },
            lv: { q: 'Kādā krāsā ir sporta apavi?', a: ['Pelēki ar oranžu', 'Melni', 'Balti', 'Zili'] },
        },
        {
            ru: { q: 'Есть ли на картинке секундомер?', a: ['Да', 'Нет', 'Есть часы', 'Не видно'] },
            lv: { q: 'Vai attēlā ir hronometrs?', a: ['Jā', 'Nē', 'Ir pulkstenis', 'Nav redzams'] },
        },
        {
            ru: { q: 'Что находится в бутылке?', a: ['Вода', 'Сок', 'Пусто', 'Непонятно'] },
            lv: { q: 'Kas ir pudelē?', a: ['Ūdens', 'Sula', 'Tukša', 'Nav saprotams'] },
        },
        {
            ru: { q: 'Сколько гантелей на изображении?', a: ['Одна', 'Две', 'Три', 'Четыре'] },
            lv: { q: 'Cik hanteļu ir attēlā?', a: ['Viena', 'Divas', 'Trīs', 'Četras'] },
        },
        {
            ru: { q: 'На какой поверхности лежат предметы?', a: ['На полу', 'На столе', 'На коврике', 'На траве'] },
            lv: { q: 'Uz kādas virsmas atrodas priekšmeti?', a: ['Uz grīdas', 'Uz galda', 'Uz paklājiņa', 'Zālē'] },
        },
    ],
    // Image 5
    [
        {
            ru: { q: 'Какого цвета рюкзак?', a: ['Коричневый', 'Черный', 'Серый', 'Зеленый'] },
            lv: { q: 'Kādā krāsā ir mugursoma?', a: ['Brūna', 'Melna', 'Pelēka', 'Zaļa'] },
        },
        {
            ru: { q: 'Какой предмет лежит на паспорте?', a: ['Солнечные очки', 'Ключи', 'Телефон', 'Часы'] },
            lv: { q: 'Kāds priekšmets atrodas uz pases?', a: ['Saulesbrilles', 'Atslēgas', 'Telefons', 'Pulkstenis'] },
        },
        {
            ru: { q: 'Есть ли на изображении фотоаппарат?', a: ['Да', 'Нет', 'Только объектив', 'Не видно'] },
            lv: { q: 'Vai attēlā ir fotoaparāts?', a: ['Jā', 'Nē', 'Tikai objektīvs', 'Nav redzams'] },
        },
        {
            ru: { q: 'Какого цвета кошелек?', a: ['Коричневый', 'Черный', 'Красный', 'Синий'] },
            lv: { q: 'Kādā krāsā ir maks?', a: ['Brūns', 'Melns', 'Sarkans', 'Zils'] },
        },
        {
            ru: { q: 'Что изображено на карте?', a: ['Карта мира', 'Карта города', 'Карта острова', 'Непонятно'] },
            lv: { q: 'Kas ir attēlots kartē?', a: ['Pasaules karte', 'Pilsētas karte', 'Salas karte', 'Nav saprotams'] },
        },
        {
            ru: { q: 'Есть ли на картинке компас?', a: ['Да', 'Нет', 'Возможно', 'Только на карте'] },
            lv: { q: 'Vai attēlā ir kompass?', a: ['Jā', 'Nē', 'Iespējams', 'Tikai kartē'] },
        },
        {
            ru: { q: 'Какого цвета обложка паспорта?', a: ['Синяя', 'Красная', 'Зеленая', 'Черная'] },
            lv: { q: 'Kādā krāsā ir pases vāks?', a: ['Zils', 'Sarkans', 'Zaļš', 'Melns'] },
        },
        {
            ru: { q: 'Сколько ключей на связке?', a: ['Один', 'Два', 'Три', 'Много'] },
            lv: { q: 'Cik atslēgu ir saišķī?', a: ['Viena', 'Divas', 'Trīs', 'Daudz'] },
        },
    ]
];

export const content = {
    ru: {
        welcome: {
            title: 'Когнитивный Двойной Тест',
            subtitle: 'Исследование «Точность воспроизведения памяти»',
            description1: 'Добро пожаловать в исследование, проводимое в рамках бакалаврской работы студентки 3-го курса программы «Психология» Даугавпилсского университета, Агиты Дзалбе.',
            description2: 'Тест состоит из двух частей: тест на запоминание последовательности цифр и тест на запоминание деталей изображений. Пожалуйста, следуйте инструкциям на экране.',
            button: 'Начать тест'
        },
        digitSpanForward: {
            title: 'Часть 1: Запоминание цифр',
            subtitle: 'Прямой порядок',
            instruction: 'На экране появятся цифры. Ваша задача — ввести их в том же порядке, в котором они появились. Нажмите "Готов", когда будете готовы начать.',
            currentLength: 'Текущее количество цифр:',
        },
        digitSpanBackward: {
            title: 'Часть 1: Запоминание цифр',
            subtitle: 'Обратный порядок',
            instruction: 'На экране появятся цифры. Ваша задача — ввести их в ОБРАТНОМ порядке. Например, если вы увидели 4-7-2, вам нужно ввести 274. Нажмите "Готов", когда будете готовы начать.',
            currentLength: 'Текущее количество цифр:',
        },
        memoryTest: {
            title: 'Часть 2',
            subtitle: 'Точность воспроизведения памяти',
            instructionText: 'Сейчас вам будет показано изображение на 30 секунд. Постарайтесь запомнить как можно больше деталей. После этого вам будет задано 8 вопросов по изображению.',
            imageInstruction: 'Запоминайте детали',
            timerLabel: 'Осталось времени:',
            questionProgress: 'Вопрос',
            of: 'из',
            confidenceQuestion: 'Насколько вы уверены в своем ответе?',
            confidenceOptions: ['Полностью уверен', 'Больше уверен, чем неуверен', 'Больше неуверен, чем уверен', 'Неуверен'],
        },
        final: {
            title: 'Тест завершен!',
            thankYou: 'Спасибо за участие в исследовании!',
            emailPrompt: 'Если вы хотите получить обратную связь или результаты исследования, пожалуйста, оставьте свой адрес электронной почты (необязательно).',
            emailPlaceholder: 'Ваш e-mail',
            submitButton: 'Завершить и отправить результаты',
        },
        common: {
            readyButton: 'Готов',
            submitButton: 'Подтвердить',
            nextButton: 'Далее',
            correct: 'Правильно!',
            incorrect: 'Неправильно',
            tryAgain: 'Попробуйте еще раз.',
            beReady: 'Приготовьтесь!',
        },
        submissionSuccess: 'Ваши результаты успешно отправлены. Спасибо!',
        submissionError: 'Произошла ошибка при отправке результатов. Пожалуйста, попробуйте еще раз.',
    },
    lv: {
        welcome: {
            title: 'Kognitīvais duālais tests',
            subtitle: 'Pētījums "Atmiņu atveidošanas precizitāte"',
            description1: 'Laipni lūdzam pētījumā, kas tiek veikts Daugavpils Universitātes programmas "Psiholoģija" 3. kursa studentes Agitas Dzalbes bakalaura darba ietvaros.',
            description2: 'Tests sastāv no divām daļām: ciparu secības iegaumēšanas tests un attēlu detaļu iegaumēšanas tests. Lūdzu, sekojiet norādījumiem ekrānā.',
            button: 'Sākt testu'
        },
        digitSpanForward: {
            title: '1. daļa: Ciparu iegaumēšana',
            subtitle: 'Tiešā secība',
            instruction: 'Ekrānā parādīsies cipari. Jūsu uzdevums ir ievadīt tos tādā pašā secībā, kādā tie parādījās. Nospiediet "Gatavs", kad esat gatavs sākt.',
            currentLength: 'Pašreizējais ciparu skaits:',
        },
        digitSpanBackward: {
            title: '1. daļa: Ciparu iegaumēšana',
            subtitle: 'Apgrieztā secība',
            instruction: 'Ekrānā parādīsies cipari. Jūsu uzdevums ir ievadīt tos APGRIEZTĀ secībā. Piemēram, ja redzējāt 4-7-2, jums jāievada 274. Nospiediet "Gatavs", kad esat gatavs sākt.',
            currentLength: 'Pašreizējais ciparu skaits:',
        },
        memoryTest: {
            title: '2. daļa',
            subtitle: 'Atmiņas atveidošanas precizitāte',
            instructionText: 'Tagad jums tiks parādīts attēls uz 30 sekundēm. Centieties iegaumēt pēc iespējas vairāk detaļu. Pēc tam jums tiks uzdoti 8 jautājumi par attēlu.',
            imageInstruction: 'Iegaumējiet detaļas',
            timerLabel: 'Atlikušais laiks:',
            questionProgress: 'Jautājums',
            of: 'no',
            confidenceQuestion: 'Cik pārliecināts esat par savu atbildi?',
            confidenceOptions: ['Pilnībā pārliecināts', 'Vairāk pārliecināts nekā neesmu', 'Vairāk neesmu pārliecināts nekā esmu', 'Nepārliecināts'],
        },
        final: {
            title: 'Tests pabeigts!',
            thankYou: 'Paldies par dalību pētījumā!',
            emailPrompt: 'Ja vēlaties saņemt atgriezenisko saiti vai pētījuma rezultātus, lūdzu, atstājiet savu e-pasta adresi (nav obligāti).',
            emailPlaceholder: 'Jūsu e-pasts',
            submitButton: 'Pabeigt un nosūtīt rezultātus',
        },
        common: {
            readyButton: 'Gatavs',
            submitButton: 'Apstiprināt',
            nextButton: 'Tālāk',
            correct: 'Pareizi!',
            incorrect: 'Nepareizi',
            tryAgain: 'Mēģiniet vēlreiz.',
            beReady: 'Gatavojieties!',
        },
        submissionSuccess: 'Jūsu rezultāti ir veiksmīgi nosūtīti. Paldies!',
        submissionError: 'Radās kļūda, sūtot rezultātus. Lūdzu, mēģiniet vēlreiz.',
    }
};