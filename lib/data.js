const quizDataList = [
  {
    category: "初級",
    question:
      "八王子ラーメンの特徴的なトッピングは？",
    options: [
      { id: 1, text: "刻み玉ねぎ" },
      { id: 2, text: "メンマ" },
      { id: 3, text: "チャーシュー" },
    ],
    correctAnswerId: 1,
    // // image: null,
    explanation: (
      <>
        八王子ラーメンの特徴は刻み玉ねぎが乗っている事です。
      </>
    ),
  },
  {
    category: "初級",
    question:
      "府中市の郷土料理は武蔵野〇〇？",
    options: [
      { id: 1, text: "うどん" },
      { id: 2, text: "そば" },
      { id: 3, text: "ラーメン" },
    ],
    correctAnswerId: 1,
    // image: "quiz_image_2.png",
    explanation: (
        "府中の郷土料理は武蔵野うどんです。"
    ),
  },
  {
    category: "初級",
    question:
      "多摩地域でよく栽培されている果物は？",
    options: [
      { id: 1, text: "りんご" },
      { id: 2, text: "桃" },
      { id: 3, text: "なし" },
    ],
    correctAnswerId: 3,
    // image: "quiz_image_3.png",
    explanation: (
      <>
        多摩地域では梨が盛んに栽培されています。
      </>
    ),
  },
  {
    category: "初級",
    question:
      "ジブリ映画に登場する三鷹市の野菜は？",
    options: [
      { id: 1, text: "きゅうり" },
      { id: 2, text: "とまと" },
      { id: 3, text: "とうもろこし" },
    ],
    correctAnswerId: 3,
    // image: "quiz_image_4.png",
    explanation: (
      <>
        メイちゃんがトウモコロシというところは印象的ですね。
      </>
    ),
  },
  {
    category: "初級",
    question:
      "国分寺市名物の甘いお菓子は？",
    options: [
      { id: 1, text: "多摩蘭坂まんじゅう" },
      { id: 2, text: "東京ばな奈" },
      { id: 3, text: "人形焼き" },
    ],
    correctAnswerId: 1,
    // image: "quiz_image_5.png",
    explanation: (
      <>
        多摩蘭坂まんじゅうは、国分寺市にある老舗の和菓子店「御菓子司さかもと」が販売しているかりんとう饅頭です。
      </>
    ),
  },
  {
    category: "中級",
    question: (
      "青梅市で製造されている伝統調味料は？ "
    ),
    options: [
      { id: 1, text: "八王子醤油" },
      { id: 2, text: "立川醤油" },
      { id: 3, text: "青梅醤油" },
    ],
    correctAnswerId: 3,
    // image: "quiz_image_6.png",
    explanation: (
      <>
        青梅醤油には、青梅の風味や甘みが特徴のもの、青梅と生醤油をブレンドした調味料などがあります。
      </>
    ),
  },
  {
    category: "中級",
    question: (
      <>
        八王子ナポリタンの特徴は？
      </>
    ),
    options: [
      { id: 1, text: "ソース味" },
      { id: 2, text: "ピーマン多め" },
      { id: 3, text: "玉ねぎ入り" },
    ],
    correctAnswerId: 3,
    // image: "quiz_image_7.png",
    explanation: (
      <>
        八王子ナポリタン（通称「はちナポ」）は、刻み玉ねぎと八王子産の食材をふんだんに使用したナポリタンで、ご当地グルメとして知られています。
      </>
    ),
  },
  {
    category: "中級",
    question:
      "調布市・深大寺名物の料理は？",
    options: [
      { id: 1, text: "深大寺ラーメン" },
      { id: 2, text: "深大寺うどん" },
      { id: 3, text: "深大寺そば" },
    ],
    correctAnswerId: 3,
    // image: "quiz_image_8.png",
    explanation: (
      <>
        深大寺そばは、そばの風味が強く、甘みがあり、コシがしっかりしているのが特徴です。そば粉の風味や食感が、職人の技と土地の気候によって生み出されています。
      </>
    ),
  },
  {
    category: "中級",
    question: (
      <>
        立川市の豚肉とキャベツを使った料理は？
      </>
    ),
    options: [
      { id: 1, text: "立川うどん" },
      { id: 2, text: "立川ぎょうざ" },
      { id: 3, text: "立川焼きそば" },
    ],
    correctAnswerId: 1,
    // image: "quiz_image_9.png",
    explanation: (
      <>
        ふすま小麦を使った麺で、風味豊かで食べ応えがあります。
      </>
    ),
  },
  {
    category: "中級",
    question: (
      <>
        武蔵村山市の特産品は？
      </>
    ),
    options: [
      { id: 1, text: "村山すいとん" },
      { id: 2, text: "村山焼きそば" },
      { id: 3, text: "村山かてうどん" },
    ],
    correctAnswerId: 3,
    // image: "quiz_image_10.png",
    explanation: (
      <>
        地粉を使った麺を温かい醤油ベースのだし汁につけ、野菜を添えて食べるのが特徴です。
      </>
    ),
  },
  {
    category: "上級",
    question: (
      <>
        福生市に多国籍料理が多い理由は？
      </>
    ),
    options: [
      { id: 1, text: "入間基地" },
      { id: 2, text: "横田基地" },
      { id: 3, text: "厚木基地" },
    ],
    correctAnswerId: 2,
    // image: "quiz_image_11.png",
    explanation: (
      <>
        横田基地がある福生市は外国人比率が約6.35％と高い為。
      </>
    ),
  },
  {
    category: "上級",
    question: (
      <>
        東久留米市の湧水を利用した特産野菜は？
      </>
    ),
    options: [
      { id: 1, text: "わさび" },
      { id: 2, text: "クレソン" },
      { id: 3, text: "セリ" },
    ],
    correctAnswerId: 1,
    // image: "quiz_image_12.png",
    explanation: (
      <>
        東久留米市の湧水を利用したわさびは、冷たい水で育つため固めで辛さが強く、鼻に抜ける涼やかな辛さが特徴です。
      </>
    ),
  },
  {
    category: "上級",
    question:
      "日の出町の珍しい柑橘類は？",
    options: [
      { id: 1, text: "シークヮーサー" },
      { id: 2, text: "かぼす" },
      { id: 3, text: "ゆず" },
    ],
    correctAnswerId: 3,
    // image: "quiz_image_13.png",
    explanation: (
      <>
        日の出町のゆずは香りが強いのが特徴です。
      </>
    ),
  },
  {
    category: "上級",
    question: (
      <>
        多摩市の高級キノコは？
      </>
    ),
    options: [
      { id: 1, text: "エリンギ" },
      { id: 2, text: "原木しいたけ" },
      { id: 3, text: "まつたけ" },
    ],
    correctAnswerId: 2,
    // image: "quiz_image_14.png",
    explanation: (
      <>
        多摩市で栽培される原木しいたけは、自然環境に影響されやすく、手間がかかるため、昔ながらの風味や味が特徴です。
      </>
    ),
  },
  {
    category: "上級",
    question: (
      <>
        檜原村の川魚郷土料理は？
      </>
    ),
    options: [
      { id: 1, text: "ヤマメの塩焼き" },
      { id: 2, text: "ニジマスの塩焼き" },
      { id: 3, text: "イワナの塩焼き" },
    ],
    correctAnswerId: 1,
    // image: "quiz_image_15.png",
    explanation: (
      <>
        檜原村のヤマメの塩焼きは、ふわふわとした身とカリカリの頭が特徴です。骨も柔らかいため、頭から尾まで美味しく食べることができます。
      </>
    ),
  },
  {
    category: "その他",
    question: "その他の問題１です",

    options: ["選択肢1", "選択肢2", "選択肢3"],
    correctAnswer: "選択肢1",
    explanation: "その他の問題１の解説です。",
  },
  {
    category: "その他",
    question: "その他の問題２です",
    options: ["選択肢1", "選択肢2", "選択肢3"],
    correctAnswer: "選択肢1",
    explanation: "その他の問題２の解説です。",
  },
  {
    category: "その他",
    question: "その他の問題３です",
    options: ["選択肢1", "選択肢2", "選択肢3"],
    correctAnswer: "選択肢1",
    explanation: "その他の問題３の解説です。",
  },
  {
    category: "その他",
    question: "その他の問題４です",
    options: ["選択肢1", "選択肢2", "選択肢3"],
    correctAnswer: "選択肢1",
    explanation: "その他の問題４の解説です。",
  },
  {
    category: "その他",
    question: "その他の問題５です",
    options: ["選択肢1", "選択肢2", "選択肢3"],
    correctAnswer: "選択肢1",
    explanation: "その他の問題５の解説です。",
  },
];

export default quizDataList;
