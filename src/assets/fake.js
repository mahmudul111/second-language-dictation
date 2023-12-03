import lesson1 from "./lesson1.mp3";
import lesson10 from "./lesson10.mp3";
import lesson11 from "./lesson11.mp3";
import lesson12 from "./lesson12.mp3";
import lesson13 from "./lesson13.mp3";
import lesson14 from "./lesson14.mp3";
import lesson15 from "./lesson15.mp3";
import lesson16 from "./lesson16.mp3";
import lesson17 from "./lesson17.mp3";
import lesson1male from "./lesson1male.mp3";
import lesson2 from "./lesson2.mp3";
import lesson3 from "./lesson3.mp3";
import lesson4 from "./lesson4.mp3";
import lesson5 from "./lesson5.mp3";
import lesson6 from "./lesson6.mp3";
import lesson7 from "./lesson7.mp3";

const data = [
  {
    id: 1,
    title: "Lesson 1",
    btn: "Task",
    btn_back: "Back to Home",
    para: " Amidst the rolling hills, a quaint village emerged. Colorful houses, cobblestone streets, and friendly locals made it a charming haven. I reveled in its simplicity and warmth.",
    chinese:
      "在连绵起伏的丘陵中，出现了一个古色古香的村庄。色彩缤纷的房屋、鹅卵石街道和友好的当地人使其成为一个迷人的避风港。我陶醉于它的简单和温暖。",
    bangla:
      "পাহাড়ের মাঝখানে এক অদ্ভুত গ্রাম আবির্ভূত হল। রঙিন বাড়ি, মোচিপাথরের রাস্তা এবং বন্ধুত্বপূর্ণ স্থানীয়রা এটিকে একটি মনোমুগ্ধকর স্বর্গে পরিণত করেছে। আমি এর সরলতা এবং উষ্ণতা উপভোগ করেছি।",
    audio: lesson1,
  },
  {
    id: 2,
    title: "Lesson 2",
    btn: "Task",
    btn_back: "Back to Home",
    para: "Beneath the starry sky, the campfire crackled . Friends shared stories , laughter , and toasted marshmallows . It was a night of connection and fond memories .",
    chinese:
      "星空下，篝火噼啪作响。朋友们分享故事、笑声和烤棉花糖。这是一个充满联系和美好回忆的夜晚。",
    bangla:
      "তারকাবহুল আকাশের নীচে, ক্যাম্পফায়ারটি ফাটল ধরেছিল। বন্ধুরা গল্প, হাসি এবং টোস্টেড মার্শম্যালো ভাগ করে নিয়েছিল। এটি ছিল সংযোগ এবং মধুর স্মৃতির একটি রাত।",
    audio: lesson2,
  },
  {
    id: 3,
    title: "Lesson 3",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The bustling city streets were alive with energy. Neon lights illuminated the night as people hurried along , each with their own story in this urban mosaic .",
    chinese:
      "熙熙攘攘的城市街道充满活力。霓虹灯照亮了夜晚，人们匆匆忙忙地走着，每个人都在这片城市马赛克中都有自己的故事。",
    bangla:
      "ব্যস্ত শহরের রাস্তাগুলি শক্তিতে প্রাণবন্ত ছিল। নিয়ন লাইটগুলি রাতকে আলোকিত করেছিল যখন লোকেরা তাড়াহুড়ো করছিল, প্রত্যেকে এই শহুরে মোজাইকে তাদের নিজস্ব গল্প নিয়ে ছিল।",
    audio: lesson3,
  },
  {
    id: 4,
    title: "Lesson 4",
    btn: "Task",
    btn_back: "Back to Home",
    para: "In the tranquil garden, flowers swayed in the breeze , and birds sang sweet melodies . It was a sanctuary of peace, a place to escape the world's chaos .",
    chinese:
      "静谧的花园里，花在微风中摇曳，鸟儿唱着甜美的旋律。这是一个和平的避难所，一个逃离世界混乱的地方。",
    bangla:
      "প্রশান্ত বাগানে, বাতাসে ফুল ঝলমল করছিল, এবং পাখিরা মিষ্টি সুর গেয়েছিল। এটি ছিল শান্তির অভয়ারণ্য, বিশ্বের বিশৃঙ্খলা থেকে বাঁচার জায়গা।",
    audio: lesson4,
  },
  {
    id: 5,
    title: "Lesson 5",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The ancient library housed knowledge from centuries past. Crumbling manuscripts and faded texts told stories of civilizations long gone , a treasure trove of history .",
    chinese:
      "这座古老的图书馆收藏了几个世纪以来的知识。摇摇欲坠的手稿和褪色的文字讲述了早已逝去的文明故事，这是历史的宝库。",
    bangla:
      "প্রাচীন গ্রন্থাগারটি শতাব্দী অতীতের জ্ঞান ধারণ করেছিল। ভেঙ্গে পড়া পাণ্ডুলিপি এবং ম্লান পাঠ্যগুলি অনেক আগেই সভ্যতার গল্প বলেছিল, ইতিহাসের ভান্ডার।",
    audio: lesson5,
  },
  {
    id: 6,
    title: "Lesson 6",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The tranquil lake mirrored the azure sky . Ripples danced as ducks glided , and children played by the shore. Nature's beauty was a serene escape from the world",
    chinese:
      "宁静的湖面映照着蔚蓝的天空。涟漪在鸭子滑行时翩翩起舞，孩子们在岸边玩耍。大自然的美丽是远离尘嚣的宁静之地。",
    bangla:
      "প্রশান্ত হ্রদটি নীল আকাশকে প্রতিফলিত করেছিল। হাঁসের ঝাঁকুনির সাথে সাথে রিপলস নাচছিল এবং শিশুরা তীরের পাশে খেলছিল। প্রকৃতির সৌন্দর্য ছিল পৃথিবী থেকে নির্মল পলায়ন।",
    audio: lesson6,
  },
  {
    id: 7,
    title: "Lesson 7",
    btn: "Task",
    btn_back: "Back to Home",
    para: "High in the mountains, the air was crisp, and pine trees reached for the heavens. Hikers explored trails, and wildlife roamed freely. It was a realm of adventure.",
    chinese:
      "高山上，空气清新，松树直冲云霄。徒步旅行者探索小径，野生动物自由漫步。这是一个冒险的领域。",
    bangla:
      "পাহাড়ের উচ্চতায়, বাতাস খাঁটি ছিল, এবং পাইন গাছগুলি স্বর্গের দিকে পৌঁছেছিল। পর্বতারোহীরা ট্রেইলগুলি অন্বেষণ করেছিলেন এবং বন্যপ্রাণীরা অবাধে ঘুরে বেড়াচ্ছিল। এটা ছিল দুঃসাহসিক এক রাজ্য।",
    audio: lesson7,
  },
  {
    id: 8,
    title: "Lesson 8",
    btn: "Task",
    btn_back: "Back to Home",
    para: "In the heart of the bustling market, vendors peddled exotic spices and colorful fabrics. A sensory delight, it offered a glimpse into the world's diverse cultures.",
    chinese:
      "在熙熙攘攘的市场中心，小贩兜售异国情调的香料和五颜六色的织物。它是一种感官上的享受，它提供了对世界多元文化的一瞥。",
    bangla:
      "জমজমাট বাজারের কেন্দ্রস্থলে, বিক্রেতারা বিদেশী মশলা এবং রঙিন কাপড় বিক্রি করে। একটি সংবেদনশীল আনন্দ, এটি বিশ্বের বৈচিত্র্যময় সংস্কৃতির একটি ঝলক সরবরাহ করে।",
    audio: lesson1,
  },
  {
    id: 9,
    title: "Lesson 9",
    btn: "Task",
    btn_back: "Back to Home",
    para: "In the arid desert, shifting dunes stretched endlessly. Despite the harshness , life thrived. The desert's beauty was a testament to resilience and adaptation.",
    chinese:
      "在干旱的沙漠中，移动的沙丘绵延不绝。尽管环境恶劣，但生活却蒸蒸日上。沙漠的美丽证明了韧性和适应力。",
    bangla:
      "শুষ্ক মরুভূমিতে, স্থানান্তরিত টিলাগুলি অবিরাম প্রসারিত হয়েছিল। কঠোরতা সত্ত্বেও, জীবন সমৃদ্ধ হয়েছিল। মরুভূমির সৌন্দর্য স্থিতিস্থাপকতা এবং অভিযোজনের একটি প্রমাণ ছিল।",
    audio: lesson1male,
  },
  {
    id: 10,
    title: "Lesson 10",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The island's remote beaches held secrets of the tides. Shells and seaweed told tales of the sea, while seagulls soared overhead. It was a world untouched.",
    chinese:
      "岛上偏远的海滩蕴藏着潮汐的秘密。贝壳和海藻讲述着大海的故事，而海鸥则在头顶翱翔。这是一个未受破坏的世界。",
    bangla:
      "দ্বীপের দুর্গম সৈকতগুলি জোয়ারের রহস্য ধারণ করেছিল। শেল এবং সামুদ্রিক শৈবাল সমুদ্রের গল্প বলত, যখন সামুদ্রিক শৈবালগুলি উপরে উড়ছিল। এটি ছিল অক্ষত এক জগৎ।",
    audio: lesson10,
  },
  {
    id: 11,
    title: "Lesson 11",
    btn: "Task",
    btn_back: "Back to Home",
    para: "As the sun dipped below the horizon , the sky transformed into a canvas of vibrant colors . Shades of orange , pink , and purple painted the evening sky, creating a breathtaking spectacle.",
    chinese:
      "当太阳落到地平线以下时，天空变成了一幅色彩鲜艳的画布。橙色、粉红色和紫色的色调描绘了傍晚的天空，营造出令人叹为观止的奇观。",
    bangla:
      "দিগন্তের নীচে সূর্য ডুবে যাওয়ার সাথে সাথে আকাশ প্রাণবন্ত রঙের ক্যানভাসে রূপান্তরিত হয়েছিল। কমলা, গোলাপী এবং বেগুনি রঙের শেডগুলি সন্ধ্যার আকাশকে আঁকিয়েছিল, একটি শ্বাসরুদ্ধকর দৃশ্য তৈরি করেছিল।",
    audio: lesson11,
  },
  {
    id: 12,
    title: "Lesson 12",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The ancient ruins stood as a testament to a bygone era , their weathered stones holding the secrets of centuries past. I wandered through the archaeological site, marveling at the craftsmanship of those who had built it.",
    chinese:
      "这些古老的废墟是过去时代的见证，它们风化的石头蕴藏着几个世纪前的秘密。我漫步在考古遗址中，惊叹于建造它的人的手艺。",
    bangla:
      "প্রাচীন ধ্বংসাবশেষগুলি বিগত যুগের সাক্ষ্য হিসাবে দাঁড়িয়েছিল, তাদের আবহাওয়াযুক্ত পাথরগুলি শতাব্দী অতীতের রহস্য ধারণ করেছিল। আমি প্রত্নতাত্ত্বিক স্থানটি ঘুরে দেখলাম, যারা এটি নির্মাণ করেছিলেন তাদের কারুশিল্প দেখে বিস্মিত হয়েছিলাম।",
    audio: lesson12,
  },
  {
    id: 13,
    title: "Lesson 13",
    btn: "Task",
    btn_back: "Back to Home",
    para: "In the heart of the bustling metropolis, the urban landscape was a tapestry of modernity. Skyscrapers reached for the sky, their glass facades shimmering in the sunlight. Pedestrians hurried along the streets, lost in the rhythm of city life.",
    chinese:
      "在繁华大都市的中心地带，城市景观是一幅现代性的挂毯。摩天大楼直冲云霄，玻璃幕墙在阳光下闪闪发光。行人匆匆忙忙地走在街道上，迷失在城市生活的节奏中。",
    bangla:
      "ব্যস্ত মহানগরীর কেন্দ্রস্থলে, শহুরে ল্যান্ডস্কেপ ছিল আধুনিকতার একটি টেপস্ট্রি। আকাশচুম্বী ভবনগুলি আকাশের দিকে পৌঁছেছিল, তাদের কাঁচের সম্মুখভাগ সূর্যের আলোতে ঝলমল করছিল। নগর জীবনের ছন্দে হারিয়ে পথচারীরা তাড়াহুড়ো করে রাস্তায় নেমে আসে।",
    audio: lesson13,
  },
  {
    id: 14,
    title: "Lesson 14",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The dense, ancient forest was a realm of mystique and wonder. Towering trees formed a canopy overhead, casting dappled sunlight on the forest floor. The air was thick with the scent of earth and foliage, a fragrant symphony of nature's offerings.",
    chinese:
      "茂密的古老森林是一个神秘而神奇的领域。参天大树在头顶形成树冠，将斑驳的阳光投射在森林地面上。空气中弥漫着泥土和树叶的香味，是大自然的芬芳交响乐。",
    bangla:
      "ঘন, প্রাচীন অরণ্যটি ছিল বিস্ময় ও বিস্ময়ের এক রাজ্য। উঁচু গাছগুলি উপরে একটি ছাদ তৈরি করেছিল, বনের মেঝেতে সূর্যের আলো নিক্ষেপ করেছিল। বাতাস ছিল মাটি ও পাতার গন্ধে ঘন, প্রকৃতির উৎসর্গের সুগন্ধযুক্ত সিম্ফনি।",
    audio: lesson14,
  },
  {
    id: 15,
    title: "Lesson 15",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The vast expanse of the desert stretched out before me, a landscape of golden sands and endless horizons. The sun beat down with intense heat, casting shimmering mirages on the arid terrain.",
    chinese:
      "广阔的沙漠在我面前展开，金色的沙滩和无尽的地平线。太阳带着酷热倾泻而下，在干旱的地形上投下闪闪发光的海市蜃楼。",
    bangla:
      "মরুভূমির বিস্তীর্ণ বিস্তৃতি আমার সামনে বিস্তৃত ছিল, সোনালী বালি এবং অন্তহীন দিগন্তের একটি ল্যান্ডস্কেপ। প্রচণ্ড গরমে সূর্য ধড়ফড় করছিল, শুষ্ক ভূখণ্ডে ঝলমলে মিরাজ ছড়িয়ে পড়েছিল।",
    audio: lesson15,
  },
  {
    id: 16,
    title: "Lesson 16",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The bustling market was a sensory feast, with stalls overflowing with colorful fruits, fragrant spices, and a symphony of voices speaking in different languages. Shoppers weaved their way through the crowded lanes, haggling with vendors and savoring the delights on display.",
    chinese:
      "熙熙攘攘的集市是一场感官盛宴，摊位上摆满了五颜六色的水果、芬芳的香料和用不同语言说话的交响乐。购物者在拥挤的小巷中穿梭，与供应商讨价还价，品尝展示的美食。",
    bangla:
      "জমজমাট বাজারটি ছিল একটি সংবেদনশীল ভোজ, যেখানে স্টলগুলি রঙিন ফল, সুগন্ধযুক্ত মশলা এবং বিভিন্ন ভাষায় কথা বলার সিম্ফনি দিয়ে উপচে পড়েছিল। ক্রেতারা জনাকীর্ণ গলির মধ্য দিয়ে যাত্রা শুরু করে, বিক্রেতাদের সাথে আড্ডা দেয় এবং প্রদর্শনীর আনন্দ উপভোগ করে।",
    audio: lesson16,
  },
  {
    id: 17,
    title: "Lesson 17",
    btn: "Task",
    btn_back: "Back to Home",
    para: "The remote island was a world unto itself, surrounded by pristine waters and untouched landscapes. I explored the rugged coastline, where cliffs met the sea with dramatic splendor.",
    chinese:
      "这个偏远的岛屿本身就是一个世界，周围环绕着原始的海水和未受破坏的风景。我探索了崎岖的海岸线，那里的悬崖与大海相遇，壮丽无比。",
    bangla:
      "দুর্গম দ্বীপটি নিজের জন্য একটি বিশ্ব ছিল, যা প্রাচীন জল এবং স্পর্শহীন ল্যান্ডস্কেপ দ্বারা বেষ্টিত ছিল। আমি দুর্গম উপকূলরেখাটি অন্বেষণ করলাম, যেখানে পাহাড়গুলি নাটকীয় জাঁকজমকের সাথে সমুদ্রের সাথে মিলিত হয়েছিল।",
    audio: lesson17,
  },
];

export default data;
