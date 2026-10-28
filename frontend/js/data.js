// data.js - All Gujarati rhyme data and game data

const RHYMES_DATA = [
  {
    id: 1,
    title: "ચકીબેન ચકીબેન",
    category: "birds",
    categoryLabel: "પક્ષીઓ",
    video: "RHYMES/chaki ben chaki ben.mp4",
    image: "assets/images/chaki_ben.jpg",
    preview: "ચકીબેન ચકીબેન,\nમારી સાથે રમવા આવશો કે નહીં?",
    fullLyrics: [
      "ચકીબેન ચકીબેન,",
      "મારી સાથે રમવા આવશો કે નહીં?",
      "બેસવાને પાટલો,",
      "સૂવાને ખાટલો;",
      "ઓઢવાને પીંછા આપીશ,",
      "ખાવાને દાણા આપીશ;",
      "ચકીબેન ચકીબેન,",
      "મારી સાથે રમવા આવશો કે નહીં?"
    ],
    words: [
      { word: "ચકીબેન", meaning: "Little Sparrow", emoji: "🐦", gujaratiMeaning: "વહાલી નાની ચકલી" },
      { word: "પાટલો", meaning: "Wooden Seat", emoji: "🪑", gujaratiMeaning: "બેસવા માટેનું આસન" },
      { word: "ખાટલો", meaning: "Cot / Bed", emoji: "🛏️", gujaratiMeaning: "સૂવા માટેની ખાટ" },
      { word: "દાણા", meaning: "Grains / Seeds", emoji: "🌾", gujaratiMeaning: "ચોખા કે બાજરીના દાણા" }
    ],
    color: "#F06292",
    emoji: "🐦",
    difficulty: "easy",
    quiz: [
      {
        question: "બાળક ચકીબેનને શું કરવા બોલાવે છે?",
        options: ["રમવા", "ઊંઘવા", "ભણવા"],
        answer: 0
      },
      {
        question: "ચકીબેનને બેસવા માટે શું આપવાની વાત છે?",
        options: ["સોફા", "પાટલો", "ખુરશી"],
        answer: 1
      },
      {
        question: "ચકીબેનને ખાવા માટે શું આપશે?",
        options: ["દાણા", "ફળ", "દૂધ"],
        answer: 0
      }
    ]
  },
  {
    id: 2,
    title: "હાથીભાઈ તો જાડા",
    category: "animals",
    categoryLabel: "પ્રાણીઓ",
    video: "RHYMES/Hathi bhai to jada.mp4",
    image: "assets/images/hathi_bhai.jpg",
    preview: "હાથીભાઈ તો જાડા,\nચાલે કેવા વાંકા-ચૂંકા!",
    fullLyrics: [
      "હાથીભાઈ તો જાડા,",
      "ચાલે કેવા વાંકા-ચૂંકા;",
      "સૂંઢ હલાવે આગળ-પાછળ,",
      "કાન ફફડાવે સુપડા જેવા;",
      "નાની પૂંછડી ટૂંકી-ટૂંકી,",
      "ધમ ધમ ધમ ધમ ચાલે."
    ],
    words: [
      { word: "હાથી", meaning: "Elephant", emoji: "🐘", gujaratiMeaning: "જંગલનું સૌથી મોટું પ્રાણી" },
      { word: "જાડા", meaning: "Big / Plump", emoji: "💪", gujaratiMeaning: "વિશાળ કદના" },
      { word: "સૂંઢ", meaning: "Trunk", emoji: "🐘", gujaratiMeaning: "હાથીનું લાંબુ નાક" },
      { word: "સુપડા", meaning: "Winnowing fan", emoji: "🌾", gujaratiMeaning: "કાન જેવા મોટા આકારનું સાધન" }
    ],
    color: "#90CAF9",
    emoji: "🐘",
    difficulty: "easy",
    quiz: [
      {
        question: "હાથીભાઈ કદમાં કેવા છે?",
        options: ["પાતળા", "નાના", "જાડા"],
        answer: 2
      },
      {
        question: "હાથીભાઈના કાન કેવા છે?",
        options: ["સુપડા જેવા", "પાંદડા જેવા", "દડા જેવા"],
        answer: 0
      },
      {
        question: "હાથી આગળ-પાછળ શું હલાવે છે?",
        options: ["પગ", "સૂંઢ", "માથું"],
        answer: 1
      }
    ]
  },
  {
    id: 3,
    title: "ટામેટું રે ટામેટું",
    category: "fun",
    categoryLabel: "મજેદાર",
    video: "RHYMES/Tametu-Re-Tametu.mp4",
    image: "assets/images/tametu_re_tametu.jpg",
    preview: "ટામેટું રે ટામેટું,\nનદીએ નાહવા જાતું'તું.",
    fullLyrics: [
      "ટામેટું રે ટામેટું,",
      "નદીએ નાહવા જાતું'તું;",
      "ઘી-ગોળ ખાતું'તું,",
      "લાલ લાલ હસતું'તું;",
      "પાણીમાં છબછબિયાં કરતું,",
      "ટામેટું મીઠું લાગતું'તું."
    ],
    words: [
      { word: "ટામેટું", meaning: "Tomato", emoji: "🍅", gujaratiMeaning: "લાલ રંગનું સ્વાદિષ્ટ શાકભાજી" },
      { word: "નદી", meaning: "River", emoji: "🌊", gujaratiMeaning: "વહેતું મીઠું જળ" },
      { word: "ઘી-ગોળ", meaning: "Ghee & Jaggery", emoji: "🍯", gujaratiMeaning: "પૌષ્ટિક અને મીઠો ખોરાક" },
      { word: "લાલ", meaning: "Red", emoji: "🔴", gujaratiMeaning: "સુંદર લાલ રંગ" }
    ],
    color: "#FF5252",
    emoji: "🍅",
    difficulty: "easy",
    quiz: [
      {
        question: "ટામેટું ક્યાં નાહવા જાતું'તું?",
        options: ["કુવામાં", "નદીએ", "ઘરમાં"],
        answer: 1
      },
      {
        question: "ટામેટાનો રંગ કેવો હોય છે?",
        options: ["પીળો", "લીલો", "લાલ"],
        answer: 2
      },
      {
        question: "ટામેટું શું ખાતું'તું?",
        options: ["ઘી-ગોળ", "રોટલી", "શાક"],
        answer: 0
      }
    ]
  },
  {
    id: 4,
    title: "આવ રે વરસાદ",
    category: "nature",
    categoryLabel: "પ્રકૃતિ",
    video: "RHYMES/aav re varsad.mp4",
    image: "assets/images/aav_re_varsad.jpg",
    preview: "આવ રે વરસાદ,\nઘેબરિયો પરસાદ.",
    fullLyrics: [
      "આવ રે વરસાદ,",
      "ઘેબરિયો પરસાદ;",
      "ઊની ઊની રોટલી ને,",
      "કારેલાનું શાક;",
      "વરસાદ વરસે ધોધમાર,",
      "નાચો કૂદો બાળ સહુ."
    ],
    words: [
      { word: "વરસાદ", meaning: "Rain", emoji: "🌧️", gujaratiMeaning: "આકાશમાંથી વરસતું પાણી" },
      { word: "રોટલી", meaning: "Indian Bread / Roti", emoji: "🫓", gujaratiMeaning: "ગરમા-ગરમ રોટલી" },
      { word: "કારેલાં", meaning: "Bitter Gourd", emoji: "🥒", gujaratiMeaning: "ગુણકારી શાકભાજી" },
      { word: "પરસાદ", meaning: "Blessed Food", emoji: "🍲", gujaratiMeaning: "મીઠો પ્રસાદ" }
    ],
    color: "#4FC3F7",
    emoji: "🌧️",
    difficulty: "easy",
    quiz: [
      {
        question: "રોટલી કેવી છે?",
        options: ["ઠંડી ઠંડી", "ઊની ઊની", "મીઠી મીઠી"],
        answer: 1
      },
      {
        question: "શાક શેનું બન્યું છે?",
        options: ["બટાકાનું", "કારેલાનું", "ટામેટાનું"],
        answer: 1
      },
      {
        question: "વરસાદ કેવો વરસે છે?",
        options: ["ધીમો", "ધોધમાર", "સૂકો"],
        answer: 1
      }
    ]
  },
  {
    id: 5,
    title: "એક બિલાડી જાડી",
    category: "animals",
    categoryLabel: "પ્રાણીઓ",
    video: "RHYMES/ek biladi jadi.mp4",
    image: "assets/images/ek_biladi_jadi.jpg",
    preview: "એક બિલાડી જાડી,\nતેણે પહેરી સાડી.",
    fullLyrics: [
      "એક બિલાડી જાડી,",
      "તેણે પહેરી સાડી;",
      "સાડી પહેરી ફરવા ગઈ,",
      "તળાવમાં તરવા ગઈ;",
      "તળાવમાં તો મગર મળે,",
      "બિલાડીબેન ડરીને પળે."
    ],
    words: [
      { word: "બિલાડી", meaning: "Cat", emoji: "🐱", gujaratiMeaning: "ઘરેલું સુંદર પ્રાણી (મીની)" },
      { word: "સાડી", meaning: "Saree", emoji: "🥻", gujaratiMeaning: "ભારતીય પરંપરાગત વસ્ત્ર" },
      { word: "તળાવ", meaning: "Pond", emoji: "🏞️", gujaratiMeaning: "નાનું જળાશય" },
      { word: "મગર", meaning: "Crocodile", emoji: "🐊", gujaratiMeaning: "પાણીમાં રહેતો મોટો જીવ" }
    ],
    color: "#BA68C8",
    emoji: "🐱",
    difficulty: "easy",
    quiz: [
      {
        question: "બિલાડીએ શું પહેર્યું હતું?",
        options: ["ફ્રોક", "સાડી", "ટોપી"],
        answer: 1
      },
      {
        question: "સાડી પહેરી બિલાડી ક્યાં ગઈ?",
        options: ["ફરવા અને તરવા", "બજારમાં", "શાળાએ"],
        answer: 0
      },
      {
        question: "તળાવમાં બિલાડીને કોણ મળ્યું?",
        options: ["માછલી", "મગર", "દેડકો"],
        answer: 1
      }
    ]
  },
  {
    id: 6,
    title: "સાઇકલ મારી સરરર",
    category: "fun",
    categoryLabel: "મજેદાર",
    video: "RHYMES/cycle mari sarara.mp4",
    image: "assets/images/cycle_mari_sarara.jpg",
    preview: "સાઇકલ મારી સરરર જાય,\nટ્રીન ટ્રીન ઘંટડી વાગતી જાય.",
    fullLyrics: [
      "સાઇકલ મારી સરરર જાય,",
      "ટ્રીન ટ્રીન ઘંટડી વાગતી જાય;",
      "પેડલ મારું સરરર દોડે,",
      "રસ્તા ઉપર પવન સરીખી;",
      "લાલ રંગની સાઇકલ મારી,",
      "મને લાગે ખૂબ પ્યારી."
    ],
    words: [
      { word: "સાઇકલ", meaning: "Bicycle", emoji: "🚲", gujaratiMeaning: "બે પૈડાંવાળું વાહન" },
      { word: "ઘંટડી", meaning: "Bicycle Bell", emoji: "🔔", gujaratiMeaning: "અવાજ કરતી ઘંટડી" },
      { word: "પેડલ", meaning: "Pedal", emoji: "⚙️", gujaratiMeaning: "પગ વડે ફેરવવાનો ભાગ" },
      { word: "પવન", meaning: "Wind", emoji: "🍃", gujaratiMeaning: "ઝડપી હવા" }
    ],
    color: "#26A69A",
    emoji: "🚲",
    difficulty: "easy",
    quiz: [
      {
        question: "સાઇકલની ઘંટડી કેવી વાગે છે?",
        options: ["પીં પીં", "ટ્રીન ટ્રીન", "ધમ ધમ"],
        answer: 1
      },
      {
        question: "સાઇકલ કઈ રીતે દોડે છે?",
        options: ["ધીમે ધીમે", "સરરર પવન સરીખી", "ઊંધી"],
        answer: 1
      },
      {
        question: "સાઇકલ ક્યા રંગની છે?",
        options: ["લાલ", "કાળી", "પીળી"],
        answer: 0
      }
    ]
  },
  {
    id: 7,
    title: "બે સસલાં રમતા'તા",
    category: "animals",
    categoryLabel: "પ્રાણીઓ",
    video: "RHYMES/Be Sasla Ramta Ta.mp4",
    image: "assets/images/be_sasla_ramta_ta.jpg",
    preview: "બે સસલાં રમતા'તા,\nગાજર-મૂળા ખાતા'તા.",
    fullLyrics: [
      "બે સસલાં રમતા'તા,",
      "બગીચામાં કૂદતા'તા;",
      "ગાજર-મૂળા ખાતા'તા,",
      "લાંબા કાન હલાવતા'તા;",
      "દોડમદોડ કરતા'તા,",
      "ખુશીથી નાચતા'તા."
    ],
    words: [
      { word: "સસલું", meaning: "Rabbit", emoji: "🐰", gujaratiMeaning: "સફેદ અને કૂદતું નાનું પ્રાણી" },
      { word: "ગાજર", meaning: "Carrot", emoji: "🥕", gujaratiMeaning: "મીઠું લાલ-કેસરી કંદમૂળ" },
      { word: "બગીચો", meaning: "Garden", emoji: "🌳", gujaratiMeaning: "ફૂલો અને વૃક્ષોવાળી જગ્યા" },
      { word: "કાન", meaning: "Ears", emoji: "👂", gujaratiMeaning: "સાંભળવાના અંગ" }
    ],
    color: "#FF80AB",
    emoji: "🐰",
    difficulty: "easy",
    quiz: [
      {
        question: "કેટલાં સસલાં રમતાં હતાં?",
        options: ["એક", "બે", "ત્રણ"],
        answer: 1
      },
      {
        question: "સસલાં શું ખાતાં હતાં?",
        options: ["ગાજર-મૂળા", "રોટલી", "ભાત"],
        answer: 0
      },
      {
        question: "સસલાંના કાન કેવા હોય છે?",
        options: ["નાના", "ગોળ", "લાંબા"],
        answer: 2
      }
    ]
  },
  {
    id: 8,
    title: "આવો મેઘરાજા",
    category: "nature",
    categoryLabel: "પ્રકૃતિ",
    video: "RHYMES/aavo megh raja.mp4",
    image: "assets/images/aavo_megh_raja.jpg",
    preview: "આવો મેઘરાજા,\nવગડાવો વાજાં!",
    fullLyrics: [
      "આવો મેઘરાજા,",
      "વગડાવો વાજાં;",
      "પીં પીં પીં પીં પંપોળી,",
      "ધમ ધમ ધમ ધમ ધોધમાર;",
      "રેલમછેલ નદી-નાળાં,",
      "સરરર સરરર વહેતાં પાણી."
    ],
    words: [
      { word: "મેઘરાજા", meaning: "Rain King", emoji: "⛈️", gujaratiMeaning: "વાદળો અને વરસાદના રાજા" },
      { word: "વાજાં", meaning: "Instruments / Music", emoji: "🎺", gujaratiMeaning: "સંગીતના સાધનો" },
      { word: "નદી-નાળાં", meaning: "Streams & Rivers", emoji: "🏞️", gujaratiMeaning: "પાણીના વહેણો" },
      { word: "રેલમછેલ", meaning: "Overflowing Joy", emoji: "🌊", gujaratiMeaning: "ચારે બાજુ પાણીથી ભરેલું" }
    ],
    color: "#5C6BC0",
    emoji: "⛈️",
    difficulty: "medium",
    quiz: [
      {
        question: "કોને આવવાનું આહ્વાન આપ્યું છે?",
        options: ["સૂરજદાદા", "મેઘરાજા", "પવન"],
        answer: 1
      },
      {
        question: "મેઘરાજાને શું વગાડવા કહ્યું?",
        options: ["વાજાં", "ઘંટડી", "ઢોલ"],
        answer: 0
      },
      {
        question: "વરસાદથી નદી-નાળાં કેવાં થયાં?",
        options: ["સૂકાં", "રેલમછેલ", "શાંત"],
        answer: 1
      }
    ]
  },
  {
    id: 9,
    title: "ગાડી ગાડી રમીએ",
    category: "fun",
    categoryLabel: "મજેદાર",
    video: "RHYMES/gadi gadi ramiye.mp4",
    image: "assets/images/gadi_gadi_ramiye.jpg",
    preview: "ગાડી ગાડી રમીએ,\nછુક છુક ગાડી ચલાવીએ.",
    fullLyrics: [
      "ગાડી ગાડી રમીએ,",
      "છુક છુક ગાડી ચલાવીએ;",
      "એકમેકના હાથ પકડી,",
      "લાંબી રેલ બનાવીએ;",
      "સીટી વાગે કૂક કૂક,",
      "આગળ દોડે છુક છુક."
    ],
    words: [
      { word: "ગાડી", meaning: "Train", emoji: "🚂", gujaratiMeaning: "છુક છુક દોડતી રેલગાડી" },
      { word: "સીટી", meaning: "Whistle", emoji: "🪈", gujaratiMeaning: "અવાજ કરતી સીટી" },
      { word: "રેલ", meaning: "Train line", emoji: "🛤️", gujaratiMeaning: "પાટા પર દોડતી ટ્રેન" },
      { word: "મિત્રો", meaning: "Friends", emoji: "👫", gujaratiMeaning: "સાથે રમનારા બાળમિત્રો" }
    ],
    color: "#FF7043",
    emoji: "🚂",
    difficulty: "easy",
    quiz: [
      {
        question: "બાળકો કઈ રમત રમે છે?",
        options: ["દડો", "ગાડી ગાડી", "સંતાકૂકડી"],
        answer: 1
      },
      {
        question: "ગાડી કઈ અવાજ સાથે દોડે છે?",
        options: ["છુક છુક", "પીં પીં", "ભૂ ભૂ"],
        answer: 0
      },
      {
        question: "બાળકો શું પકડીને લાંબી રેલ બનાવે છે?",
        options: ["લાકડી", "એકમેકના હાથ", "દોરી"],
        answer: 1
      }
    ]
  },
  {
    id: 10,
    title: "બે બાવા જાતા'તા",
    category: "fun",
    categoryLabel: "મજેદાર",
    video: "RHYMES/be bava jata ta.mp4",
    image: "assets/images/be_bava_jata_ta.jpg",
    preview: "બે બાવા જાતા'તા,\nચલમ-તપેલાં લાવ્યા'તા.",
    fullLyrics: [
      "બે બાવા જાતા'તા,",
      "રમતાં-હસતાં જાતા'તા;",
      "હાથમાં લાકડી રાખતા'તા,",
      "ભજન મીઠાં ગાતા'તા;",
      "બાળકોને આશીર્વાદ દેતા,",
      "આનંદે મગન રહેતા."
    ],
    words: [
      { word: "બાવા", meaning: "Sage / Baba", emoji: "🧘", gujaratiMeaning: "સાધુ મહાત્મા" },
      { word: "લાકડી", meaning: "Walking Stick", emoji: "🦯", gujaratiMeaning: "ટેકો લેવાની લાકડી" },
      { word: "ભજન", meaning: "Devotional Hymn", emoji: "🎶", gujaratiMeaning: "પ્રભુનું મીઠું ગીત" },
      { word: "આનંદ", meaning: "Joy / Bliss", emoji: "😄", gujaratiMeaning: "ખુશી અને પ્રસન્નતા" }
    ],
    color: "#FFA726",
    emoji: "🧙‍♂️",
    difficulty: "medium",
    quiz: [
      {
        question: "કેટલા બાવા જાતા હતા?",
        options: ["એક", "બે", "ચાર"],
        answer: 1
      },
      {
        question: "બાવા હાથમાં શું રાખતા હતા?",
        options: ["લાકડી", "પુસ્તક", "છત્રી"],
        answer: 0
      },
      {
        question: "બાવા શું ગાતા હતા?",
        options: ["ગીત", "ભજન", "કવિતા"],
        answer: 1
      }
    ]
  },
  {
    id: 11,
    title: "વાર્તા રે વાર્તા",
    category: "moral",
    categoryLabel: "નૈતિક",
    video: "RHYMES/varta re varta.mp4",
    image: "assets/images/varta_re_varta.jpg",
    preview: "વાર્તા રે વાર્તા,\nભાભો ઢોર ચારતો.",
    fullLyrics: [
      "વાર્તા રે વાર્તા,",
      "ભાભો ઢોર ચારતો;",
      "ચૂપચાપ સાંભળો વાત,",
      "મીઠી મધ જેવી વાત;",
      "ગામને પાદર વાર્તા થાતી,",
      "બાળકોને ખૂબ મજા આવતી."
    ],
    words: [
      { word: "વાર્તા", meaning: "Story / Tale", emoji: "📖", gujaratiMeaning: "દાદીમાની સુંદર વાર્તા" },
      { word: "ઢોર", meaning: "Cattle / Cows", emoji: "🐄", gujaratiMeaning: "ગાય અને વાછરડાં" },
      { word: "પાદર", meaning: "Village Common", emoji: "🏡", gujaratiMeaning: "ગામની ભાગોળ" },
      { word: "મધ", meaning: "Honey", emoji: "🍯", gujaratiMeaning: "મીઠાશથી ભરેલું" }
    ],
    color: "#8D6E63",
    emoji: "📜",
    difficulty: "medium",
    quiz: [
      {
        question: "ભાભો શું ચારતો હતો?",
        options: ["બકરીઓ", "ઢોર", "ઘેટાં"],
        answer: 1
      },
      {
        question: "વાર્તા કેવી હતી?",
        options: ["કડવી", "મીઠી મધ જેવી", "લાંબી"],
        answer: 1
      },
      {
        question: "વાર્તા સાંભળીને કોને મજા આવતી?",
        options: ["બાળકોને", "પક્ષીઓને", "નદીને"],
        answer: 0
      }
    ]
  }
];

// Categories
const CATEGORIES = [
  { id: "animals", label: "પ્રાણીઓ", emoji: "🐘" },
  { id: "birds", label: "પક્ષીઓ", emoji: "🐦" },
  { id: "nature", label: "પ્રકૃતિ", emoji: "🌧️" },
  { id: "moon", label: "ચાંદ-તારા", emoji: "🌙" },
  { id: "alphabet", label: "અક્ષરો", emoji: "🔤" },
  { id: "fun", label: "મજેદાર", emoji: "😄" },
  { id: "moral", label: "નૈતિક", emoji: "💡" }
];

// Games Data - 100% based on the 11 uploaded rhymes
const GAMES_DATA = {
  rhymeMatch: {
    id: "rhymeMatch",
    title: "જોડકણાં જોડો",
    description: "ગુજરાતી બાળગીતોના શબ્દો સાથે રાઇમ જોડો",
    emoji: "🔗",
    color: "#87CEEB",
    pairs: [
      { left: "ચકીબેન", right: "ખાટલો" },
      { left: "હાથીભાઈ", right: "જાડા" },
      { left: "ટામેટું", right: "નદી" },
      { left: "વરસાદ", right: "પરસાદ" },
      { left: "બિલાડી", right: "સાડી" },
      { left: "સાઇકલ", right: "ઘંટડી" },
      { left: "સસલાં", right: "ગાજર" },
      { left: "મેઘરાજા", right: "વાજાં" },
      { left: "ગાડી", right: "રેલ" },
      { left: "બાવા", right: "લાકડી" },
      { left: "વાર્તા", right: "ભાભો" }
    ]
  },
  fillBlank: {
    id: "fillBlank",
    title: "ખાલી જગ્યા ભરો",
    description: "ખૂટતો શબ્દ ભરો",
    emoji: "✏️",
    color: "#F48FB1",
    questions: [
      { sentence: "ચકીબેન ચકીબેન મારી સાથે ___ આવશો?", answer: "રમવા", options: ["રમવા", "ભણવા", "દોડવા"] },
      { sentence: "હાથીભાઈ તો ___, ચાલે કેવા વાંકા-ચૂંકા!", answer: "જાડા", options: ["જાડા", "પાતળા", "નાના"] },
      { sentence: "ટામેટું રે ટામેટું, ___ નાહવા જાતું'તું", answer: "નદીએ", options: ["નદીએ", "ઘેર", "ઝાડ પર"] },
      { sentence: "આવ રે વરસાદ, ઘેબરિયો ___", answer: "પરસાદ", options: ["પરસાદ", "ખોરાક", "શાક"] },
      { sentence: "એક બિલાડી જાડી, તેણે પહેરી ___", answer: "સાડી", options: ["સાડી", "ટોપી", "ફ્રોક"] },
      { sentence: "સાઇકલ મારી ___ જાય, ટ્રીન ટ્રીન ઘંટડી વાગે", answer: "સરરર", options: ["સરરર", "છુક છુક", "ધમ ધમ"] },
      { sentence: "બે સસલાં રમતા'તા, ___ ખાતા'તા", answer: "ગાજર-મૂળા", options: ["ગાજર-મૂળા", "રોટલી", "દૂધ"] },
      { sentence: "આવો મેઘરાજા, વગડાવો ___", answer: "વાજાં", options: ["વાજાં", "ઢોલ", "વાંસળી"] },
      { sentence: "ગાડી ગાડી રમીએ, ___ ગાડી ચલાવીએ", answer: "છુક છુક", options: ["છુક છુક", "પીં પીં", "સરરર"] },
      { sentence: "વાર્તા રે વાર્તા, ભાભો ___ ચારતો", answer: "ઢોર", options: ["ઢોર", "ચકલી", "સસલાં"] }
    ]
  },
  pictureId: {
    id: "pictureId",
    title: "ચિત્ર ઓળખો",
    description: "ચિત્ર જોઈ સાચું બાળગીત ઓળખો",
    emoji: "🖼️",
    color: "#A5D6A7",
    questions: [
      { emoji: "🐦", answer: "ચકીબેન ચકીબેન", options: ["ચકીબેન ચકીબેન", "એક બિલાડી જાડી", "બે સસલાં"] },
      { emoji: "🐘", answer: "હાથીભાઈ તો જાડા", options: ["હાથીભાઈ તો જાડા", "ગાડી ગાડી રમીએ", "વાર્તા રે વાર્તા"] },
      { emoji: "🍅", answer: "ટામેટું રે ટામેટું", options: ["ટામેટું રે ટામેટું", "આવ રે વરસાદ", "ચકીબેન ચકીબેન"] },
      { emoji: "🌧️", answer: "આવ રે વરસાદ", options: ["આવ રે વરસાદ", "આવો મેઘરાજા", "ટામેટું રે ટામેટું"] },
      { emoji: "🐱", answer: "એક બિલાડી જાડી", options: ["એક બિલાડી જાડી", "ચકીબેન ચકીબેન", "હાથીભાઈ તો જાડા"] },
      { emoji: "🚲", answer: "સાઇકલ મારી સરરર", options: ["સાઇકલ મારી સરરર", "ગાડી ગાડી રમીએ", "બે બાવા જાતા'તા"] },
      { emoji: "🐰", answer: "બે સસલાં રમતા'તા", options: ["બે સસલાં રમતા'તા", "એક બિલાડી જાડી", "વાર્તા રે વાર્તા"] },
      { emoji: "⛈️", answer: "આવો મેઘરાજા", options: ["આવો મેઘરાજા", "આવ રે વરસાદ", "સાઇકલ મારી સરરર"] },
      { emoji: "🚂", answer: "ગાડી ગાડી રમીએ", options: ["ગાડી ગાડી રમીએ", "સાઇકલ મારી સરરર", "હાથીભાઈ તો જાડા"] },
      { emoji: "🧙‍♂️", answer: "બે બાવા જાતા'તા", options: ["બે બાવા જાતા'તા", "વાર્તા રે વાર્તા", "ચકીબેન ચકીબેન"] },
      { emoji: "📜", answer: "વાર્તા રે વાર્તા", options: ["વાર્તા રે વાર્તા", "આવો મેઘરાજા", "બે સસલાં રમતા'તા"] }
    ]
  },
  arrangeOrder: {
    id: "arrangeOrder",
    title: "સાચો ક્રમ ગોઠવો",
    description: "જોડકણાની પંક્તિઓ ક્રમ પ્રમાણે ગોઠવો",
    emoji: "🔀",
    color: "#FFF176",
    questions: [
      {
        title: "ચકીબેન ચકીબેન",
        lines: [
          "ચકીબેન ચકીબેન,",
          "મારી સાથે રમવા આવશો કે નહીં?",
          "બેસવાને પાટલો,",
          "સૂવાને ખાટલો."
        ]
      },
      {
        title: "હાથીભાઈ તો જાડા",
        lines: [
          "હાથીભાઈ તો જાડા,",
          "ચાલે કેવા વાંકા-ચૂંકા;",
          "સૂંઢ હલાવે આગળ-પાછળ,",
          "કાન ફફડાવે સુપડા જેવા."
        ]
      },
      {
        title: "ટામેટું રે ટામેટું",
        lines: [
          "ટામેટું રે ટામેટું,",
          "નદીએ નાહવા જાતું'તું;",
          "ઘી-ગોળ ખાતું'તું,",
          "લાલ લાલ હસતું'તું."
        ]
      },
      {
        title: "આવ રે વરસાદ",
        lines: [
          "આવ રે વરસાદ,",
          "ઘેબરિયો પરસાદ;",
          "ઊની ઊની રોટલી ને,",
          "કારેલાનું શાક."
        ]
      },
      {
        title: "એક બિલાડી જાડી",
        lines: [
          "એક બિલાડી જાડી,",
          "તેણે પહેરી સાડી;",
          "સાડી પહેરી ફરવા ગઈ,",
          "તળાવમાં તરવા ગઈ."
        ]
      },
      {
        title: "સાઇકલ મારી સરરર",
        lines: [
          "સાઇકલ મારી સરરર જાય,",
          "ટ્રીન ટ્રીન ઘંટડી વાગતી જાય;",
          "પેડલ મારું સરરર દોડે,",
          "રસ્તા ઉપર પવન સરીખી."
        ]
      }
    ]
  },
  listenId: {
    id: "listenId",
    title: "સાંભળો અને ઓળખો",
    description: "શબ્દ સાંભળી સાચો જવાબ આપો",
    emoji: "👂",
    color: "#B39DDB",
    questions: [
      { word: "ચકીબેન", options: ["ચકીબેન", "બિલાડી", "હાથી"] },
      { word: "હાથીભાઈ", options: ["હાથીભાઈ", "સસલું", "ચકીબેન"] },
      { word: "ટામેટું", options: ["ટામેટું", "ગાજર", "કારેલાં"] },
      { word: "વરસાદ", options: ["વરસાદ", "પવન", "સૂરજ"] },
      { word: "બિલાડી", options: ["બિલાડી", "ચકીબેન", "સસલું"] },
      { word: "સાઇકલ", options: ["સાઇકલ", "ગાડી", "રેલ"] },
      { word: "સસલું", options: ["સસલું", "હાથી", "બિલાડી"] },
      { word: "મેઘરાજા", options: ["મેઘરાજા", "વરસાદ", "વાજાં"] },
      { word: "ગાડી", options: ["ગાડી", "સાઇકલ", "નદી"] }
    ]
  },
  letterGame: {
    id: "letterGame",
    title: "અક્ષર રમત",
    description: "અક્ષર સાથે બાળગીતનું પાત્ર જોડો",
    emoji: "🔤",
    color: "#FFCC80",
    questions: [
      { letter: "ચ", answer: "🐦", hint: "ચ - ચકીબેન", options: [{ emoji: "🐦", label: "ચ - ચકીબેન" }, { emoji: "🐘", label: "હ - હાથીભાઈ" }, { emoji: "🐱", label: "બ - બિલાડી" }] },
      { letter: "હ", answer: "🐘", hint: "હ - હાથીભાઈ", options: [{ emoji: "🐘", label: "હ - હાથીભાઈ" }, { emoji: "🍅", label: "ટ - ટામેટું" }, { emoji: "🚲", label: "સ - સાઇકલ" }] },
      { letter: "ટ", answer: "🍅", hint: "ટ - ટામેટું", options: [{ emoji: "🍅", label: "ટ - ટામેટું" }, { emoji: "🐰", label: "સ - સસલું" }, { emoji: "🚂", label: "ગ - ગાડી" }] },
      { letter: "વ", answer: "🌧️", hint: "વ - વરસાદ", options: [{ emoji: "🌧️", label: "વ - વરસાદ" }, { emoji: "🐦", label: "ચ - ચકીબેન" }, { emoji: "🧙‍♂️", label: "બ - બાવા" }] },
      { letter: "બ", answer: "🐱", hint: "બ - બિલાડી", options: [{ emoji: "🐱", label: "બ - બિલાડી" }, { emoji: "📜", label: "વ - વાર્તા" }, { emoji: "🐘", label: "હ - હાથી" }] },
      { letter: "સ", answer: "🚲", hint: "સ - સાઇકલ", options: [{ emoji: "🚲", label: "સ - સાઇકલ" }, { emoji: "🍅", label: "ટ - ટામેટું" }, { emoji: "🌧️", label: "વ - વરસાદ" }] },
      { letter: "ગ", answer: "🚂", hint: "ગ - ગાડી", options: [{ emoji: "🚂", label: "ગ - ગાડી" }, { emoji: "🐰", label: "સ - સસલું" }, { emoji: "🐦", label: "ચ - ચકીબેન" }] }
    ]
  }
};

// Badges data
const BADGES_DATA = [
  {
    id: "rhyme_wizard",
    title: "જોડકણાંનો જાદુગર",
    description: "5 જોડકણાં પૂર્ણ કરો",
    emoji: "🧙",
    requirement: { type: "completedRhymes", count: 5 }
  },
  {
    id: "melodious_singer",
    title: "સુરિલો ગાયક",
    description: "બધાં ૧૧ બાળગીતો જુઓ અને સાંભળો",
    emoji: "🎤",
    requirement: { type: "completedRhymes", count: 11 }
  },
  {
    id: "word_friend",
    title: "શબ્દોના મિત્ર",
    description: "3 જોડકણાંમાં શબ્દ ભંડોળ પૂર્ણ કરો",
    emoji: "📚",
    requirement: { type: "vocabulary", count: 3 }
  },
  {
    id: "game_hero",
    title: "રમત વીર",
    description: "બધી 6 રમત પૂર્ણ કરો",
    emoji: "🏆",
    requirement: { type: "completedGames", count: 6 }
  },
  {
    id: "star_king",
    title: "તારાઓ કો રાજ",
    description: "50 તારા મેળવો",
    emoji: "⭐",
    requirement: { type: "stars", count: 50 }
  }
];

// Daily challenges
const DAILY_CHALLENGES = [
  { rhymeId: 1, task: "ચકીબેન ચકીબેન - વિડિયો જુઓ!", reward: 5 },
  { rhymeId: 2, task: "હાથીભાઈ તો જાડા - ગાઓ!", reward: 5 },
  { rhymeId: 3, task: "ટામેટું રે ટામેટું - ક્વિઝ પૂર્ણ કરો!", reward: 10 },
  { rhymeId: 4, task: "આવ રે વરસાદ - રમત રમો!", reward: 10 },
  { rhymeId: 5, task: "એક બિલાડી જાડી - શીખી લો!", reward: 5 },
  { rhymeId: 6, task: "સાઇકલ મારી સરરર - વિડિયો માણો!", reward: 5 },
  { rhymeId: 7, task: "બે સસલાં રમતા'તા - શબ્દો શીખો!", reward: 8 },
  { rhymeId: 8, task: "આવો મેઘરાજા - ગાઈ જુઓ!", reward: 8 },
  { rhymeId: 9, task: "ગાડી ગાડી રમીએ - રેલ બનાવો!", reward: 10 },
  { rhymeId: 10, task: "બે બાવા જાતા'તા - ક્વિઝ આપો!", reward: 10 },
  { rhymeId: 11, task: "વાર્તા રે વાર્તા - મજા કરો!", reward: 10 }
];
