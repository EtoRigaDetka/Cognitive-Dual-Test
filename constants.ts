
// NOTE: These questions and answers are placeholders to demonstrate the application's functionality.
// They should be replaced with the actual questions from the study.

export const IMAGES = [
    { id: 1, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question4_mrcfgl.png', name_ru: 'Спорт и аксессуары', name_lv: 'Sports un aksesuāri' },
    { id: 2, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question5_oj6krv.png', name_ru: 'Аксессуары и багаж', name_lv: 'Aksesuāri un bagāža' },
    { id: 3, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question1_wgnvgh.png', name_ru: 'Рабочий стол', name_lv: 'Rakstāmgalds' },
    { id: 4, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question2_u6d3rh.png', name_ru: 'Офисные предметы', name_lv: 'Biroja priekšmeti' },
    { id: 5, url: 'https://res.cloudinary.com/dzgufpnj2/image/upload/v1761871790/Question3_mcmy0u.png', name_ru: 'Гаджеты и посуда', name_lv: 'Sīkrīki un trauki' },
];

export const QUIZ_DATA = [
  {
    image: "Attēls Nr.1",
    questions: [
      {
        lv: "Kādā krāsā bija ģērbts t-krekls?",
        ru: "Какого цвета была футболка одета на девушке?",
        options: {
          lv: [
            { text: "balts", feedback: "Super!" },
            { text: "pelēks", feedback: "Paldies par atbildi." },
            { text: "violets", feedback: "Paldies par atbildi." },
            { text: "dzeltens", feedback: "Paldies par atbildi." },
            { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
            { text: "белый", feedback: "Супер!" },
            { text: "серый", feedback: "Спасибо за ответ." },
            { text: "фиолетовый", feedback: "Спасибо за ответ." },
            { text: "желтый", feedback: "Спасибо за ответ." },
            { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kas stāvēja uz tējas galdiņa?",
        ru: "Что стояло на чайном столике?",
        options: {
          lv: [
            { text: "krūze", feedback: "Atbilde reģistrēta." },
            { text: "tējkanna", feedback: "Izcili!" },
            { text: "ābols", feedback: "Atbilde reģistrēta." },
            { text: "puķu pods", feedback: "Izcili!" },
            { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
            { text: "кружка", feedback: "Ответ зарегистрирован." },
            { text: "чайник", feedback: "Превосходно!" },
            { text: "яблоко", feedback: "Ответ зарегистрирован." },
            { text: "цветочный горшок", feedback: "Превосходно!" },
            { text: "другое", feedback: "Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 1
      },
      {
        lv: "Kādā krāsā bija matu sprādze?",
        ru: "Какого цвета была заколка?",
        options: {
          lv: [
            { text: "rozā", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
            { text: "oranža", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
            { text: "balta", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
            { text: "pelēka", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
            { text: "cits", feedback: "Paldies, turpinam." },
          ],
          ru: [
            { text: "розовая", feedback: "Замечательно! Вы четко запоминаете детали." },
            { text: "оранжевая", feedback: "Замечательно! Вы четко запоминаете детали." },
            { text: "белая", feedback: "Замечательно! Вы четко запоминаете детали." },
            { text: "серая", feedback: "Замечательно! Вы четко запоминаете детали." },
            { text: "другое", feedback: "Спасибо, продолжаем." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kāds numurs bija uz basketbola krekla?",
        ru: "Какой номер был на баскетбольной майке?",
        options: {
          lv: [
            { text: "27", feedback: "Precīzi!" },
            { text: "72", feedback: "Paldies. Atbilde reģistrēta." },
            { text: "57", feedback: "Paldies. Atbilde reģistrēta." },
            { text: "52", feedback: "Paldies. Atbilde reģistrēta." },
            { text: "cits", feedback: "Paldies. Atbilde reģistrēta." },
          ],
          ru: [
            { text: "27", feedback: "Точно!" },
            { text: "72", feedback: "Спасибо. Ответ зарегистрирован." },
            { text: "57", feedback: "Спасибо. Ответ зарегистрирован." },
            { text: "52", feedback: "Спасибо. Ответ зарегистрирован." },
            { text: "другое", feedback: "Спасибо. Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kur atradās basketbola bumba?",
        ru: "Где находился баскетбольный мяч?",
        options: {
          lv: [
            { text: "kadra labajā pusē", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
            { text: "kadra kreisajā pusē", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
            { text: "sievietei zem kājas", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
            { text: "sievietei rokās", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
            { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
            { text: "в правой части кадра", feedback: "Превосходно! Это свидетельствует о превосходном внимании и памяти." },
            { text: "в левой части кадра", feedback: "Превосходно! Это свидетельствует о превосходном внимании и памяти." },
            { text: "под ногой у женщины", feedback: "Превосходно! Это свидетельствует о превосходном внимании и памяти." },
            { text: "в руках у женщины", feedback: "Превосходно! Это свидетельствует о превосходном внимании и памяти." },
            { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kādā krāsā bija apavi?",
        ru: "Какого цвета была обувь?",
        options: {
          lv: [
            { text: "pelēka", feedback: "Tieši tā!" },
            { text: "zila", feedback: "Paldies, turpinam." },
            { text: "zaļa", feedback: "Paldies, turpinam." },
            { text: "brūna", feedback: "Paldies, turpinam." },
            { text: "cits", feedback: "Paldies, turpinam." },
          ],
          ru: [
            { text: "серая", feedback: "Верно!" },
            { text: "синяя", feedback: "Спасибо, продолжаем." },
            { text: "зеленая", feedback: "Спасибо, продолжаем." },
            { text: "коричневая", feedback: "Спасибо, продолжаем." },
            { text: "другое", feedback: "Спасибо, продолжаем." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kādā krāsā bija austiņas?",
        ru: "Какого цвета были наушники?",
        options: {
          lv: [
              { text: "oranžas", feedback: "Super! Precīza atbilde!" },
              { text: "rozā", feedback: "Super! Precīza atbilde!" },
              { text: "pelēkas", feedback: "Super! Precīza atbilde!" },
              { text: "violetas", feedback: "Super! Precīza atbilde!" },
              { text: "cits", feedback: "Atbilde reģistrēta" },
          ],
          ru: [
              { text: "оранжевые", feedback: "Супер! Точный ответ!" },
              { text: "розовые", feedback: "Супер! Точный ответ!" },
              { text: "серые", feedback: "Супер! Точный ответ!" },
              { text: "фиолетовые", feedback: "Супер! Точный ответ!" },
              { text: "другое", feedback: "Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Uz kuras rokas bija rokas pulkstenis?",
        ru: "На какой руке были наручные часы?",
        options: {
          lv: [
              { text: "labajā kadra pusē", feedback: "Pareizi!" },
              { text: "kreisajā kadra pusē", feedback: "Pareizi!" },
              { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
              { text: "с правой стороны кадра", feedback: "Правильно!" },
              { text: "с левой стороны кадра", feedback: "Правильно!" },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 1
      }
    ]
  },
  {
    image: "Attēls Nr.2",
    questions: [
      {
        lv: "Kādā krāsā bija džemperis?",
        ru: "Какого цвета был свитер?",
        options: {
          lv: [
              { text: "pelēks", feedback: "Atbilde reģistrēta." },
              { text: "melns", feedback: "Atbilde reģistrēta." },
              { text: "zils", feedback: "Atbilde reģistrēta." },
              { text: "zaļš", feedback: "Ļoti labi!" },
              { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
              { text: "серый", feedback: "Ответ зарегестрирован." },
              { text: "черный", feedback: "Ответ зарегестрирован." },
              { text: "синий", feedback: "Ответ зарегестрирован." },
              { text: "зеленый", feedback: "Очень хорошо!" },
              { text: "другое", feedback: "Ответ зарегестрирован." },
          ]
        },
        correctAnswerIndex: 3
      },
      {
        lv: "Kādi augļi bija redzami maisā?",
        ru: "Какие фрукты были видны в пакете?",
        options: {
          lv: [
              { text: "apelsīni", feedback: "Paldies. Turpinam." },
              { text: "āboli", feedback: "Paldies. Turpinam." },
              { text: "bumbieri", feedback: "Paldies. Turpinam." },
              { text: "banāni", feedback: "Super!" },
              { text: "cits", feedback: "Paldies. Turpinam." },
          ],
          ru: [
              { text: "апельсины", feedback: "Спасибо. Продолжает." },
              { text: "яблоки", feedback: "Спасибо. Продолжает." },
              { text: "груши", feedback: "Спасибо. Продолжает." },
              { text: "бананы", feedback: "Супер!" },
              { text: "другое", feedback: "Спасибо. Продолжает." },
          ]
        },
        correctAnswerIndex: 3
      },
      {//Diferent sequince
        lv: "Kādā krāsā bija cepure?",
        ru: "Какого цвета была шапка?",
        options: {
          lv: [
              { text: "sarkana", feedback: "Lieliski!" },
              { text: "zila", feedback: "Paldies par atbildi." },
              { text: "zaļa", feedback: "Paldies par atbildi." },
              { text: "melna", feedback: "Paldies par atbildi." },
              { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
              { text: "красная", feedback: "Замечательно!" },
              { text: "синяя", feedback: "Спасибо за ответ." },
              { text: "зеленая", feedback: "Спасибо за ответ." },
              { text: "черная", feedback: "Спасибо за ответ." },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kādā krāsā bija apavi?",
        ru: "Какого цвета была обувь?",
        options: {
          lv: [
              { text: "melna", feedback: "Atbilde reģistrēta." },
              { text: "zila", feedback: "Atbilde reģistrēta." },
              { text: "balta", feedback: "Tieši tā!" },
              { text: "bēžā", feedback: "Atbilde reģistrēta." },
              { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
              { text: "черная", feedback: "Ответ зарегистрирован." },
              { text: "синяя", feedback: "Ответ зарегистрирован." },
              { text: "белая", feedback: "Совершенно верно!" },
              { text: "бежевая", feedback: "Ответ зарегистрирован." },
              { text: "другое", feedback: "Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 2
      },
      {
        lv: "Kādā krāsā bija paklājs?",
        ru: "Какого цвета был ковёр?",
        options: {
          lv: [
              { text: "zils", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju." },
              { text: "sarkans", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju." },
              { text: "oranžs", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju." },
              { text: "zaļš", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju." },
              { text: "cits", feedback: "Paldies par atbildi.." },
          ],
          ru: [
              { text: "синий", feedback: "Отлично! Этот ответ показывает хорошую наблюдательность." },
              { text: "красный", feedback: "Отлично! Этот ответ показывает хорошую наблюдательность." },
              { text: "оранжевый", feedback: "Отлично! Этот ответ показывает хорошую наблюдательность." },
              { text: "зеленый", feedback: "Отлично! Этот ответ показывает хорошую наблюдательность." },
              { text: "другое", feedback: "Спасибо за ответ" },
          ]
        },
        correctAnswerIndex: 0
      },
      {//
        lv: "Kādā krāsā lietussargs uz pakaramā?",
        ru: "Какого цвета зонт на вешалке?",
        options: {
          lv: [
              { text: "zaļš", feedback: "Malacis! Jūsu atmiņa izskatās ļoti uzticama." },
              { text: "zils", feedback: "Malacis! Jūsu atmiņa izskatās ļoti uzticama." },
              { text: "oranžs", feedback: "Malacis! Jūsu atmiņa izskatās ļoti uzticama." },
              { text: "bordo", feedback: "Malacis! Jūsu atmiņa izskatās ļoti uzticama." },
              { text: "cits", feedback: "Paldies par atbild" },
          ],
          ru: [
              { text: "зеленый", feedback: "Молодец! Ваша память выглядит очень надёжной." },
              { text: "синий", feedback: "Молодец! Ваша память выглядит очень надёжной." },
              { text: "оранжевый", feedback: "Молодец! Ваша память выглядит очень надёжной." },
              { text: "бордовый", feedback: "Молодец! Ваша память выглядит очень надёжной." },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 3
      },
      {
        lv: "Kas bija uz sienas?",
        ru: "Что было на стене?",
        options: {
          lv: [
              { text: "spogulis", feedback: "Ļoti labi! Jūs pamanījāt būtiskāko no redzētā." },
              { text: "hokeja plakāts", feedback: "Ļoti labi! Jūs pamanījāt būtiskāko no redzētā." },
              { text: "kalendārs", feedback: "Ļoti labi! Jūs pamanījāt būtiskāko no redzētā." },
              { text: "plakāts ar kalniem", feedback: "Ļoti labi! Jūs pamanījāt būtiskāko no redzētā." },
              { text: "cits", feedback: "Paldies. Turpinam." },
          ],
          ru: [
              { text: "зеркало", feedback: "Очень хорошо! Вы заметили значимое из увиденного." },
              { text: "хоккейный плакат", feedback: "Очень хорошо! Вы заметили значимое из увиденного." },
              { text: "календарь", feedback: "Очень хорошо! Вы заметили значимое из увиденного." },
              { text: "плакат с горами", feedback: "Очень хорошо! Вы заметили значимое из увиденного." },
              { text: "другое", feedback: "Спасибо. Продолжаем." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kur atradās mugursoma?",
        ru: "Где находился рюкзак?",
        options: {
          lv: [
              { text: "uz grīdas kadra labajā pusē", feedback: "Perfekti!" },
              { text: "uz grīdas kadra kreisajā pusē", feedback: "Perfekti!" },
              { text: "uz pakaramā", feedback: "Perfekti!" },
              { text: "vīrietim uz pleciem", feedback: "Perfekti!" },
              { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
              { text: "на полу с правой стороны кадра", feedback: "Совершенно верно!" },
              { text: "на полу с левой стороны кадра", feedback: "Совершенно верно!" },
              { text: "на вешалке", feedback: "Совершенно верно!" },
              { text: "у мужчины на плечах", feedback: "Совершенно верно!" },
              { text: "другое", feedback: "Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 1
      }
    ]
  },
  {
    image: "Attēls Nr.3",
    questions: [
      {
        lv: "Kādā krāsā bija džemperis?",
        ru: "Какого цвета был свитер?",
        options: {
          lv: [
              { text: "melns", feedback: "Atbilde reģistrēta." },
              { text: "balts", feedback: "Atbilde reģistrēta." },
              { text: "sarkans", feedback: "Teicami!" },
              { text: "zaļš", feedback: "Atbilde reģistrēta." },
              { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
              { text: "черный", feedback: "Ответ зарегистрирова." },
              { text: "белый", feedback: "Ответ зарегистрирова." },
              { text: "красный", feedback: "Замечательно!" },
              { text: "зеленый", feedback: "Ответ зарегистрирова." },
              { text: "другое", feedback: "Ответ зарегистрирова." },
          ]
        },
        correctAnswerIndex: 2
      },
      {
        lv: "Kādā krāsā bija apavi?",
        ru: "Какого цвета была обувь?",
        options: {
          lv: [
              { text: "melni", feedback: "Paldies par atbildi." },
              { text: "balti", feedback: "Super!" },
              { text: "sarkani", feedback: "Paldies par atbildi." },
              { text: "pelēki", feedback: "Paldies par atbildi." },
              { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
              { text: "черные", feedback: "Спасибо за ответ." },
              { text: "белые", feedback: "Супер!" },
              { text: "красные", feedback: "Спасибо за ответ." },
              { text: "серые", feedback: "Спасибо за ответ." },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 1
      },
      {
        lv: "Kādā krāsā svece uz galda?",
        ru: "Какого цвета была свеча на столе?",
        options: {
          lv: [
              { text: "dzeltena", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
              { text: "sarkana", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
              { text: "balta", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
              { text: "melna", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
              { text: "cits", feedback: "Paldies. Turpinam." },
          ],
          ru: [
              { text: "желтая", feedback: "Правильно! Вы внимательно замечаете детали." },
              { text: "красная", feedback: "Правильно! Вы внимательно замечаете детали." },
              { text: "белая", feedback: "Правильно! Вы внимательно замечаете детали." },
              { text: "черная", feedback: "Правильно! Вы внимательно замечаете детали." },
              { text: "другое", feedback: "Спасибо. Продолжаем." },
          ]
        },
        correctAnswerIndex: 2
      },
      {
        lv: "Cik koka galda kāju bija redzams attēlā?",
        ru: "Сколько ножек деревянного стола было видно на изображении?",
        options: {
          lv: [
              { text: "1", feedback: "Atbilde reģistrēta." },
              { text: "2", feedback: "Precīzi!" },
              { text: "3", feedback: "Atbilde reģistrēta." },
              { text: "4", feedback: "Atbilde reģistrēta." },
              { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
              { text: "1", feedback: "Ответ зарегистрирован." },
              { text: "2", feedback: "Верно!" },
              { text: "3", feedback: "Ответ зарегистрирован." },
              { text: "4", feedback: "ПОтвет зарегистрирован." },
              { text: "другое", feedback: "Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 1
      },
      {
        lv: "Kādā formā kulons uz sudraba ķēdītes?",
        ru: "Какой формы был кулон на серебряной цепочке?",
        options: {
          lv: [
              { text: "apaļš", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
              { text: "kvadrāts", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
              { text: "trijstūris", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
              { text: "lāsveidīgs", feedback: "Lieliski! Jūs precīzi atceraties detaļas." },
              { text: "cits", feedback: "Paldies par atbildi" },
          ],
          ru: [
              { text: "круглый", feedback: "Замечателньо! Вы точно запоминаете детали." },
              { text: "квадрат", feedback: "Замечателньо! Вы точно запоминаете детали." },
              { text: "треугольник", feedback: "Замечателньо! Вы точно запоминаете детали." },
              { text: "каплевидный", feedback: "Замечателньо! Вы точно запоминаете детали." },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kādā krāsā cepure?",
        ru: "Какого цвета была шапка?",
        options: {
          lv: [
              { text: "melna", feedback: "Tieši tā! Jūs atcerējāties ļoti precīzi!" },
              { text: "balta", feedback: "Tieši tā! Jūs atcerējāties ļoti precīzi!" },
              { text: "sarkana", feedback: "Tieši tā! Jūs atcerējāties ļoti precīzi!." },
              { text: "violeta", feedback: "Tieši tā! Jūs atcerējāties ļoti precīzi!" },
              { text: "cits", feedback: "Paldies, atbilde reģistrēta." },
          ],
          ru: [
              { text: "черная", feedback: "Так точно! Вы верно запомнили." },
              { text: "белая", feedback: "Так точно! Вы верно запомнили." },
              { text: "красная", feedback: "Так точно! Вы верно запомнили." },
              { text: "фиолетовая", feedback: "Так точно! Вы верно запомнили." },
              { text: "другое", feedback: "Спасибо, ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kādā krāsā grāmata?",
        ru: "Какого цвета была книга?",
        options: {
          lv: [
              { text: "zaļa", feedback: "Super!" },
              { text: "sarkana", feedback: "Paldies par atbildi." },
              { text: "dzeltena", feedback: "Paldies par atbildi." },
              { text: "zila", feedback: "Paldies par atbildi." },
              { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
              { text: "зеленая", feedback: "Супер!" },
              { text: "красная", feedback: "Спасибо за ответ." },
              { text: "желтая", feedback: "Спасибо за ответ." },
              { text: "синяя", feedback: "Спасибо за ответ." },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Cik bija kabatu?",
        ru: "Сколько было карманов?",
        options: {
          lv: [
              { text: "1", feedback: "Malacis! Jūs esat ļoti uzmanigs(-a)!" },
              { text: "2", feedback: "Malacis! Jūs esat ļoti uzmanigs(-a)!" },
              { text: "3", feedback: "Malacis! Jūs esat ļoti uzmanigs(-a)!" },
              { text: "4", feedback: "Malacis! Jūs esat ļoti uzmanigs(-a)!" },
              { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
              { text: "1", feedback: "Молодец! Вы очень внимательны(-а)!" },
              { text: "2", feedback: "Молодец! Вы очень внимательны(-а)!" },
              { text: "3", feedback: "Молодец! Вы очень внимательны(-а)!" },
              { text: "4", feedback: "Молодец! Вы очень внимательны(-а)!" },
              { text: "другое", feedback: "Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 1
      }
    ]
  },
  {
    image: "Attēls Nr.4",
    questions: [
      {
        lv: "Kādā krāsā žakete?",
        ru: "Какого цвета был пиджак?",
        options: {
          lv: [
              { text: "pelēka", feedback: "Paldies par atbildi." },
              { text: "zila", feedback: "Pareizi!" },
              { text: "zaļa", feedback: "Paldies par atbildi." },
              { text: "brūna", feedback: "Paldies par atbildi." },
              { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
              { text: "серая", feedback: "Спасибо за ответ." },
              { text: "синяя", feedback: "Правильно!" },
              { text: "зеленая", feedback: "Спасибо за ответ." },
              { text: "коричневая", feedback: "Спасибо за ответ." },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 1
      },
      {
        lv: "Kādā krāsā kaklasaite?",
        ru: "Какого цвета был галстук?",
        options: {
          lv: [
              { text: "zila", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
              { text: "melna", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
              { text: "bordo", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
              { text: "pelēka", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
              { text: "cits", feedback: "Paldies, atbilde reģistrēta." },
          ],
          ru: [
              { text: "синяя", feedback: "Превосходно! Это свидетельствует о хорошем внимании и памяти." },
              { text: "черная", feedback: "Превосходно! Это свидетельствует о хорошем внимании и памяти." },
              { text: "бордовая", feedback: "Превосходно! Это свидетельствует о хорошем внимании и памяти." },
              { text: "серая", feedback: "Превосходно! Это свидетельствует о хорошем внимании и памяти." },
              { text: "другое", feedback: "Спасибо, ответ зарегистрирован" },
          ]
        },
        correctAnswerIndex: 2
      },
      {
        lv: "Kādā krāsā žurnāls?",
        ru: "Какого цвета был журнал?",
        options: {
          lv: [
              { text: "zaļš", feedback: "Paldies par atbildi." },
              { text: "sarkans", feedback: "Paldies par atbildi." },
              { text: "dzeltens", feedback: "Super!" },
              { text: "balts", feedback: "Paldies par atbildi." },
              { text: "cits", feedback: "Paldies par atbildi." },
          ],
          ru: [
              { text: "зеленый", feedback: "Спасибо за ответ." },
              { text: "красный", feedback: "Спасибо за ответ." },
              { text: "желтый", feedback: "Супер!" },
              { text: "белый", feedback: "Спасибо за ответ." },
              { text: "другое", feedback: "Спасибо за ответ." },
          ]
        },
        correctAnswerIndex: 2
      },
      {
        lv: "Kas atrodas kadra labajā pusē?",
        ru: "Что находится справа в кадре?",
        options: {
          lv: [
              { text: "krēsls", feedback: "Paldies. Turpinam." },
              { text: "plaukts", feedback: "Tieši tā!" },
              { text: "galds", feedback: "Paldies. Turpinam." },
              { text: "durvis", feedback: "Paldies. Turpinam." },
              { text: "cits", feedback: "Paldies. Turpinam." },
          ],
          ru: [
              { text: "стул", feedback: "Спасибо. Продолжаем." },
              { text: "полка", feedback: "Верно!" },
              { text: "стол", feedback: "Спасибо. Продолжаем." },
              { text: "дверь", feedback: "Спасибо. Продолжаем." },
              { text: "другое", feedback: "Спасибо. Продолжаем." },
          ]
        },
        correctAnswerIndex: 1
      },
      {
        lv: "Kurā plauktā stāvēja globuss?",
        ru: "На какой полке стоял глобус?",
        options: {
          lv: [
              { text: "augšējā", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju." },
              { text: "vidējā", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju." },
              { text: "zemākajā", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju." },
              { text: "cits", feedback: "Atbilde reģistrēta." },
          ],
          ru: [
              { text: "на верхней", feedback: "Отлично! Этот ответ свидетельствует о хорошей наблюдательности." },
              { text: "на средней", feedback: "Отлично! Этот ответ свидетельствует о хорошей наблюдательности." },
              { text: "на нижней", feedback: "Отлично! Этот ответ свидетельствует о хорошей наблюдательности." },
              { text: "другое", feedback: "Ответ зарегистрирован." },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kādā krāsā apavi?",
        ru: "Какого цвета была обувь?",
        options: {
          lv: [
              { text: "melni", feedback: "Ļoti labi!" },
              { text: "balti", feedback: "Paldies par atbildi." },
              { text: "pelēki", feedback: "Paldies par atbildi." },
              { text: "zaļi", feedback: "Paldies par atbildi." },
              { text: "cits", feedback: "Paldies." },
          ],
          ru: [
              { text: "черные", feedback: "Спасибо за ответ." },
              { text: "белые", feedback: "Спасибо за ответ." },
              { text: "серые", feedback: "Спасибо за ответ." },
              { text: "зеленые", feedback: "Спасибо за ответ." },
              { text: "другое", feedback: "Очень хорошо!" },
          ]
        },
        correctAnswerIndex: 0
      },
      {
        lv: "Kādā krāsā puķupods?",
        ru: "Какого цвета был цветочный горшок?",
        options: {
          lv: [
              { text: "melns", feedback: "Malacis! Jūsu atmiņa izrādās ļoti uzticama." },
              { text: "balts", feedback: "Malacis! Jūsu atmiņa izrādās ļoti uzticama." },
              { text: "zaļš", feedback: "Malacis! Jūsu atmiņa izrādās ļoti uzticama." },
              { text: "pelēks", feedback: "Malacis! Jūsu atmiņa izrādās ļoti uzticama." },
              { text: "cits", feedback: "Paldies, turpinam." },
          ],
          ru: [
              { text: "черный", feedback: "Молодец! Похоже, ваша память очень надёжная." },
              { text: "белый", feedback: "Молодец! Похоже, ваша память очень надёжная." },
              { text: "зеленый", feedback: "Молодец! Похоже, ваша память очень надёжная." },
              { text: "серый", feedback: "Молодец! Похоже, ваша память очень надёжная." },
              { text: "другое", feedback: "Спасибо, продолжаем." },
          ]
        },
        correctAnswerIndex: 1
      },
      {
        lv: "Cik baltu pildspalvu bija pildspalvu  turētājā?",
        ru: "Сколько белых ручек было в подставке?",
        options: {
            lv: [
                { text: "1", feedback: "Lieliski! Jūs precīzi atcerējāties detaļas." },
                { text: "2", feedback: "Lieliski! Jūs precīzi atcerējāties detaļas." },
                { text: "3", feedback: "Lieliski! Jūs precīzi atcerējāties detaļas" },
                { text: "cits", feedback: "Paldies par atbildi." },
            ],
            ru: [
                { text: "1", feedback: "Отлично! Вы точно вспомнили детали." },
                { text: "2", feedback: "Отлично! Вы точно вспомнили детали." },
                { text: "3", feedback: "Отлично! Вы точно вспомнили детали." },
                { text: "другое", feedback: "Спасибо за ответ." },
            ]
        },
        correctAnswerIndex: 1
      }
    ]
  },
  {"image": "Attēls Nr.5",
    "questions": [
        {
          lv: "Kādu laiku rādīja sienas pulkstenis?",
          ru: "Которое время показывали настенные часы?",
          options: {
            lv: [
                { text: "10:10", feedback: "Precīzi!" },
                { text: "9:10", feedback: "Paldies. Turpinam." },
                { text: "11:05", feedback: "Paldies. Turpinam." },
                { text: "11:10", feedback: "Paldies. Turpinam." },
                { text: "cits", feedback: "Paldies. Turpinam." },
            ],
            ru: [
                { text: "10:10", feedback: "Точно!" },
                { text: "9:10", feedback: "Спасибо, продолжаем." },
                { text: "11:05", feedback: "Спасибо, продолжаем." },
                { text: "11:10", feedback: "Спасибо, продолжаем." },
                { text: "другое", feedback: "Спасибо, продолжаем." },
            ]
          },
          correctAnswerIndex: 0
        },
        {
          lv: "Kāda figūriņa atradās uz galda?",
          ru: "Какая фигурка находилась на столе?",
          options: {
            lv: [
                { text: "globuss", feedback: "Atbilde reģistrēta." },
                { text: "mašīna", feedback: "Atbilde reģistrēta." },
                { text: "lidmašīna", feedback: "Tieši tā!" },
                { text: "saulīte", feedback: "Atbilde reģistrēta." },
                { text: "cits", feedback: "Atbilde reģistrēta." },
            ],
            ru: [
                { text: "глобус", feedback: "Atbilde reģistrēta." },
                { text: "машина", feedback: "Atbilde reģistrēta." },
                { text: "самолёт", feedback: "Верно!" },
                { text: "солнышко", feedback: "Atbilde reģistrēta." },
                { text: "другое", feedback: "Atbilde reģistrēta." },
            ]
          },
          correctAnswerIndex: 2
        },
        {
          lv: "Kādā rokā ir ģērbts rokas pulkstenis?",
          ru: "На какой руке были наручные часы?",
          options: {
            lv: [
                { text: "labajā kadra pusē ", feedback: "Super!" },
                { text: "kreisajā kadra pusē", feedback: "Paldies par atbildi." },
                { text: "cits", feedback: "Paldies par atbildi." },
            ],
            ru: [
                { text: " правой стороне кадра", feedback: "Супер!" },
                { text: "с левой стороны", feedback: "Спасибо за ответ." },
                { text: "другое", feedback: "Спасибо за ответ." },
            ]
          },
          correctAnswerIndex: 0
        },
        {
          lv: "Uz kura pirksta bija gredzens?",
          ru: "На каком пальце было кольцо?",
          options: {
            lv: [
                { text: "rādītājpirksts", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
                { text: "vidējais pirksts", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
                { text: "zeltneša pirksts", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
                { text: "mazais pirksts", feedback: "Pareizi! Jūs uzmanīgi ievērojāt detaļas." },
                { text: "cits", feedback: "Atbilde reģistrēta." },
            ],
            ru: [
                { text: "указательный палец", feedback: "Правильно! Вы внимательно заметили детали." },
                { text: "средний палец", feedback: "Правильно! Вы внимательно заметили детали." },
                { text: "безымянный палец", feedback: "Правильно! Вы внимательно заметили детали." },
                { text: "мизинец", feedback: "Правильно! Вы внимательно заметили детали." },
                { text: "другое", feedback: "Ответ зарегистрирован." },
            ]
          },
          correctAnswerIndex: 2
        },
        {
          lv: "Uz kā bija apaļa emblēma?",
          ru: "На чём была круглая эмблема?",
          options: {
            lv: [
                { text: "dators", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
                { text: "džemperis", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
                { text: "bloknots", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
                { text: "krūze", feedback: "Perfekti! Tas liecina par izcilu uzmanību un atmiņu." },
                { text: "cits", feedback: "Paldies, turpinam." },
            ],
            ru: [
                { text: "компьютер", feedback: "Превосходно! Это говорит о замечательном внимании и памяти." },
                { text: "свитер", feedback: "Превосходно! Это говорит о замечательном внимании и памяти." },
                { text: "блокнот", feedback: "Превосходно! Это говорит о замечательном внимании и памяти." },
                { text: "кружка", feedback: "Превосходно! Это говорит о замечательном внимании и памяти." },
                { text: "другое", feedback: "Спасибо, продолжаем." },
            ]
          },
          correctAnswerIndex: 3
        },
        {
          lv: "Kas atradās uz šķīvja?",
          ru: "Что находилось на тарелке?",
          options: {
            lv: [
                { text: "krūze", feedback: "Atbilde reģistrēta." },
                { text: "kūka", feedback: "Atbilde reģistrēta." },
                { text: "ābols", feedback: "Ļoti labi!" },
                { text: "persiks", feedback: "Atbilde reģistrēta." },
                { text: "cits", feedback: "Atbilde reģistrēta." },
            ],
            ru: [
                { text: "кружка", feedback: "Ответ зарегистрирован." },
                { text: "пирожное", feedback: "Ответ зарегистрирован." },
                { text: "яблоко", feedback: "Очень хорошо!" },
                { text: "персик", feedback: "Ответ зарегистрирован." },
                { text: "другое", feedback: "Ответ зарегистрирован." },
            ]
          },
          correctAnswerIndex: 2
        },

        {
          lv: "Cik pogu uz džempera?",
          ru: "Сколько пуговиц было на свитере?",
          options: {
            lv: [
                { text: "1", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju!" },
                { text: "2", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju!" },
                { text: "3", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju!" },
                { text: "4", feedback: "Izcili! Šī atbilde rāda labu novērošanas spēju!" },
                { text: "cits", feedback: "Paldies par atbildi." },
            ],
            ru: [
                { text: "1", feedback: "Отлично! Ваш ответ свидетельствует о хорошей наблюдательности!" },
                { text: "2", feedback: "Отлично! Ваш ответ свидетельствует о хорошей наблюдательности!" },
                { text: "3", feedback: "Отлично! Ваш ответ свидетельствует о хорошей наблюдательности!" },
                { text: "4", feedback: "Отлично! Ваш ответ свидетельствует о хорошей наблюдательности!" },
                { text: "другое", feedback: "Спасибо за ответ." },
            ]
          },
          correctAnswerIndex: 2
        },
        {
          lv: "Kura kadra pusē stāvēja krūze?",
          ru: "С какой стороны кадра стояла кружка?",
          options: {
            lv: [
                { text: "labajā", feedback: "Tieši tā! Jūs atcerējāties ļoti precīzi." },
                { text: "kreisajā", feedback: "Tieši tā! Jūs atcerējāties ļoti precīzi." },
                { text: "pa vidu", feedback: "Tieši tā! Jūs atcerējāties ļoti precīzi." },
                { text: "cits", feedback: "Paldies, atbilde reģistrēta." },
            ],
            ru: [
                { text: "справа", feedback: "Именно так! Вы вспомнили очень точно." },
                { text: "слева", feedback: "Именно так! Вы вспомнили очень точно." },
                { text: "посередине", feedback: "Именно так! Вы вспомнили очень точно." },
                { text: "другое", feedback: "Спасибо, ответ зарегестрирован." },
            ]
          },
          correctAnswerIndex: 0
        }
    ]
  }
];

export const content = {
    ru: {
        welcome: {
            title: 'Психологическое исследование',
            subtitle: 'Тест “Воспроизведение воспоминаний и их точность”',
            descriptions: [
                'Добро пожаловать для участия в психологическом исследовании, которое проводится студенткой 3 курса программы “Психология” Даугавпилсского университета Агитой Дзалбе в рамках её бакалаврской работы.',
                'Цель данного исследования — выяснить, как рабочая память человека связана со способностью точно воспроизводить информацию и уверенностью в своих воспоминаниях.',
                'Тест состоит из двух частей:',
                ' 1. Проверка рабочей памяти – вам нужно будет запомнить и воспроизвести последовательность чисел в определённом порядке.',
                ' 2. Тест с изображениями – вам будут показаны 5 изображений, после каждого из которых нужно будет ответить на вопросы о его содержании.',
                'Если вам интересно узнать особенности своей памяти, вы сможете оставить свой адрес электронной почты, на который будут отправлены результаты теста.',
                'Если вы соглашаетесь принять участие в исследовании, пожалуйста, нажмите «Начать тест».'
            ],
            button: 'Начать тест',
            formTitle: 'Демографическая информация',
            ageLabel: 'Возраст',
            genderLabel: 'Пол',
            genderOptions: ['Мужской', 'Женский', 'Другой'],
            emailLabel: 'Электронная почта (необязательно)',
            emailPlaceholder: 'vash.email@example.com',
            formButton: 'Продолжить'
        },
        digitSpanForward: {
            title: 'Запоминание чисел',
            subtitle: 'Прямая последовательность',
            instruction: 'На экране появится последовательность чисел. Ваша задача — ввести их в том же порядке, в каком они были показаны. Нажмите «Готово», когда будете готовы начать.',
            currentLength: 'Текущее количество цифр:',
        },
        digitSpanBackward: {
            title: 'Запоминание чисел',
            subtitle: 'Обратная последовательность',
            instruction: 'На экране появится последовательность чисел. Ваша задача — ввести числа в обратном порядке. Например, если вы видели 4–7–2, нужно ввести 2–7–4. Нажмите «Готово», когда будете готовы начать.',
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
            title: 'Отправьте результат!',
            description: 'Вы завершили тест. Нажмите кнопку ниже, чтобы сохранить и отправить ваши результаты.',
            thankYou: 'Спасибо за участие! ',
            successDescription: 'Ваши результаты были записаны.',
            submitButton: 'ОТПРАВИТЬ',
            resultsTitle: 'Ваши результаты',
            forwardMaxLabel: 'Тест на запоминание чисел (прямая)',
            backwardMaxLabel: 'Тест на запоминание чисел (обратная)',
            quizScoreLabel: 'Тест с изображениями',
            scoreFormat: 'правильно из',
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
            title: 'Psiholoģiskais pētījums',
            subtitle: 'Tests “Atmiņu atveidošana un to precizitāte”',
            descriptions: [
                'Laipni lūgti piedalīties psiholoģiskajā pētījumā, kas tiek veikts Daugavpils Universitātes studiju programmas “Psiholoģija” 3. kursa studentes Agitas Dzalbes bakalaura darba ietvaros.',
                'Šī pētījuma mērķis ir noskaidrot, kā cilvēka darba atmiņa saistās ar spēju precīzi atcerēties informāciju un pārliecību par savām atmiņām.',
                'Tests sastāv no divām daļām:',
                '1. Darba atmiņas pārbaude – Jums būs jāiegaumē un jāatkārto ciparu virkne noteiktā secībā. ',
                '2. Attēlu tests – būs piedāvāti 5 attēli un pēc katra būs jāatbild uz jautājumiem par to saturu.',
                'Ja Jūs interesē savas atmiņas īpatnības, Jums tiks piedāvāta iespēja atstāt savu e-pastu uz kuru tiks nosūtīta testa rezultāti.',
                'Ja Jūs piekrītat piedalīties pētījumā, lūdzu, spiediet “Sākt testu”.'
            ],
            button: 'Sākt testu',
            formTitle: 'Demogrāfiskā informācija',
            ageLabel: 'Vecums',
            genderLabel: 'Dzimums',
            genderOptions: ['Vīrietis', 'Sieviete', 'Cits'],
            emailLabel: 'E-pasts (nav obligāts)',
            emailPlaceholder: 'jusu.epasts@example.com',
            formButton: 'Turpināt'
        },
        digitSpanForward: {
            title: 'Ciparu iegaumēšana',
            subtitle: 'Tiešā secība',
            instruction: 'Ekrānā tiks parādīta ciparu virkne. Jūsu uzdevums ir ievadīt ciparus tieši tādā pašā secībā, kādā tie tika attēloti. Nospiediet “Gatavs”, kad esat gatavi sākt.',
            currentLength: 'Pašreizējais ciparu skaits:',
        },
        digitSpanBackward: {
            title: 'Ciparu iegaumēšana',
            subtitle: 'Atgriezeniskā secība',
            instruction: 'Ekrānā tiks parādīta ciparu virkne. Jūsu uzdevums ir ievadīt ciparus atgriezeniskā secībā. Piemēram, ja redzējāt 4–7–2, jāievada 2–7–4. Nospiediet “Gatavs”, kad esat gatavi sākt.',
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
            title: 'Nosūtiet rezultātu!',
            description: 'Jūs esat pabeidzis testu. Nospiediet pogu zemāk, lai saglabātu un nosūtītu savus rezultātus.',
            thankYou: 'Paldies par dalību! ',
            successDescription: 'Jūsu rezultāti ir ierakstīti.',
            submitButton: 'NOSŪTĪT',
            resultsTitle: 'Jūsu rezultāti',
            forwardMaxLabel: 'Ciparu tests (tiešā secība)',
            backwardMaxLabel: 'Ciparu tests (atgriezeniskā secība)',
            quizScoreLabel: 'Attēlu tests',
            scoreFormat: 'pareizi no',
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
