import type { EnWord, EnSentence, SssSong, TprGame, ParentPhrase } from '../types';

// ============ 8 大基础颜色 ============
export const BASIC_COLORS: (EnWord & { hex: string })[] = [
  { en: 'red', cn: '红色', hex: '#FF6B6B' },
  { en: 'yellow', cn: '黄色', hex: '#FFC94D' },
  { en: 'blue', cn: '蓝色', hex: '#62B6E8' },
  { en: 'green', cn: '绿色', hex: '#7FCB6E' },
  { en: 'orange', cn: '橙色', hex: '#FFA94D' },
  { en: 'purple', cn: '紫色', hex: '#A78BDA' },
  { en: 'brown', cn: '棕色', hex: '#B08968' },
  { en: 'white', cn: '白色', hex: '#E8E4DC' }
];

// ============ 日常单词库（磨耳朵用，不认读不拼写） ============
export const WORD_BANK: Record<string, EnWord[]> = {
  '颜色': [
    { en: 'red', cn: '红色' }, { en: 'yellow', cn: '黄色' }, { en: 'blue', cn: '蓝色' },
    { en: 'green', cn: '绿色' }, { en: 'orange', cn: '橙色' }, { en: 'purple', cn: '紫色' }
  ],
  '水果': [
    { en: 'apple', cn: '苹果' }, { en: 'banana', cn: '香蕉' }, { en: 'orange', cn: '橘子' },
    { en: 'grape', cn: '葡萄' }, { en: 'watermelon', cn: '西瓜' }, { en: 'peach', cn: '桃子' }
  ],
  '动物': [
    { en: 'cat', cn: '猫' }, { en: 'dog', cn: '狗' }, { en: 'duck', cn: '鸭子' },
    { en: 'pig', cn: '猪' }, { en: 'cow', cn: '牛' }, { en: 'chick', cn: '小鸡' }
  ],
  '五官': [
    { en: 'eyes', cn: '眼睛' }, { en: 'nose', cn: '鼻子' }, { en: 'mouth', cn: '嘴巴' },
    { en: 'ears', cn: '耳朵' }, { en: 'hands', cn: '手' }, { en: 'feet', cn: '脚' }
  ],
  '日用物品': [
    { en: 'cup', cn: '杯子' }, { en: 'ball', cn: '球' }, { en: 'shoes', cn: '鞋子' },
    { en: 'book', cn: '书' }, { en: 'spoon', cn: '勺子' }, { en: 'door', cn: '门' }
  ],
  '家务': [
    { en: 'clean', cn: '擦干净' }, { en: 'wash', cn: '洗' }, { en: 'sweep', cn: '扫' },
    { en: 'put away', cn: '收起来' }, { en: 'help', cn: '帮忙' }, { en: 'trash', cn: '垃圾' }
  ],
  '自然': [
    { en: 'tree', cn: '树' }, { en: 'flower', cn: '花' }, { en: 'leaf', cn: '树叶' },
    { en: 'sun', cn: '太阳' }, { en: 'rain', cn: '雨' }, { en: 'bird', cn: '小鸟' }
  ]
};

// ============ 超短句库 ============
export const SHORT_SENTENCES: EnSentence[] = [
  { en: 'Good morning!', cn: '早上好！' },
  { en: 'Peek-a-boo!', cn: '躲猫猫！' },
  { en: 'Clap your hands!', cn: '拍拍手！' },
  { en: 'Wave bye-bye!', cn: '挥手拜拜！' },
  { en: 'Open it.', cn: '打开它。' },
  { en: 'Put it in.', cn: '放进去。' },
  { en: 'Good job!', cn: '真棒！' },
  { en: 'Yummy!', cn: '真好吃！' },
  { en: 'More, please.', cn: '还要一点。' },
  { en: 'Roll the ball.', cn: '滚球球。' },
  { en: 'Catch it!', cn: '接住！' },
  { en: 'Stand up!', cn: '站起来！' },
  { en: 'Sit down!', cn: '坐下！' },
  { en: 'Kiss for mommy!', cn: '亲亲妈妈！' },
  { en: 'Wash your hands.', cn: '洗洗手。' },
  { en: 'Time to sleep.', cn: '该睡觉啦。' },
  { en: 'Good night!', cn: '晚安！' },
  { en: 'I love you!', cn: '我爱你！' },
  { en: 'Where is it?', cn: '在哪里？' },
  { en: 'There it is!', cn: '在那里！' },
  { en: 'Come here!', cn: '到这里来！' },
  { en: 'It\'s a dog. Woof woof!', cn: '是小狗，汪汪！' }
];

// ============ SSS 儿歌（磨耳朵核心，可点击播放关键歌词） ============
export const SSS_SONGS: SssSong[] = [
  {
    id: 'song-head', title: 'Head Shoulders Knees and Toes', cn: '头、肩膀、膝盖、脚趾',
    lyric: 'Head, shoulders, knees and toes, knees and toes. Eyes and ears and mouth and nose.',
    lyricCn: '头、肩膀、膝盖、脚趾……眼睛、耳朵、嘴巴、鼻子。',
    action: '边唱边点宝宝对应的部位；宝宝不会点时，抓着他的手一起点',
    tip: '五官身体周必听；节奏慢、动作直接，宝宝很快能跟做'
  },
  {
    id: 'song-wheels', title: 'The Wheels on the Bus', cn: '公交车的轮子',
    lyric: 'The wheels on the bus go round and round, round and round.',
    lyricCn: '公交车的轮子转呀转，转呀转。',
    action: '坐着时扶着宝宝一起转圈圈；唱到 wipers 时挥手擦擦',
    tip: '出门坐车时唱效果最好；bounce 版本适合举高高'
  },
  {
    id: 'song-oldmac', title: 'Old MacDonald Had a Farm', cn: '老麦克唐纳有个农场',
    lyric: 'Old MacDonald had a farm. E-I-E-I-O. And on that farm he had a duck. Quack quack!',
    lyricCn: '老麦克唐纳有个农场，咿呀咿呀哟，农场里有只鸭子，嘎嘎！',
    action: '用动物玩偶/指偶表演，唱到哪种动物就举起来，学叫声',
    tip: '动物认知周必听；换动物时故意停一下，等宝宝接叫声'
  },
  {
    id: 'song-twinkle', title: 'Twinkle Twinkle Little Star', cn: '一闪一闪小星星',
    lyric: 'Twinkle, twinkle, little star. How I wonder what you are.',
    lyricCn: '一闪一闪小星星，多么想知道你是什么。',
    action: '手指一张一合模仿星星闪烁；睡前抱着轻轻摇',
    tip: '睡前安神曲首选；哼唱版比播放版更适合哄睡'
  },
  {
    id: 'song-monkeys', title: 'Five Little Monkeys', cn: '五只小猴子',
    lyric: 'Five little monkeys jumping on the bed. One fell off and bumped his head.',
    lyricCn: '五只小猴子在床上跳，一只摔下来撞到头。',
    action: '用手指数猴子；"bumped his head"时摸摸宝宝的头',
    tip: '数字启蒙顺便做；宝宝超爱"掉下来"的剧情'
  },
  {
    id: 'song-row', title: 'Row Row Row Your Boat', cn: '划小船',
    lyric: 'Row, row, row your boat, gently down the stream.',
    lyricCn: '划呀划呀划小船，轻轻地顺流而下。',
    action: '对坐拉手，一前一后做划船动作',
    tip: '亲子互动的经典；幅度大一点，宝宝会笑出声'
  },
  {
    id: 'song-happy', title: 'If You\'re Happy and You Know It', cn: '如果感到幸福你就拍拍手',
    lyric: 'If you\'re happy and you know it, clap your hands.',
    lyricCn: '如果感到幸福，你就拍拍手。',
    action: '唱到动作就带宝宝一起做：拍手、跺脚（坐着踩）',
    tip: 'TPR 启蒙神曲；宝宝不会做时妈妈做得夸张些'
  },
  {
    id: 'song-finger', title: 'One Little Finger', cn: '一根小手指',
    lyric: 'One little finger, tap tap tap. Point your finger up, point your finger down.',
    lyricCn: '一根小手指，敲敲敲，指上去，指下来。',
    action: '妈妈用食指带着宝宝点：点头、点鼻子、点天花板',
    tip: '五官认知周的好搭配；指令慢，适合刚开始听指令的宝宝'
  },
  {
    id: 'song-rainbow', title: 'I See Something Blue', cn: '我看见蓝色的东西',
    lyric: 'Blue! I see something blue. Find something blue!',
    lyricCn: '蓝色！我看见蓝色的东西，快找蓝色的东西！',
    action: '唱到颜色就带宝宝在家找同色物品，指出来',
    tip: '颜色认知周必听；"find"指令把磨耳朵变成寻宝游戏'
  },
  {
    id: 'song-cleanup', title: 'Clean Up Song', cn: '收拾歌',
    lyric: 'Clean up, clean up, everybody clean up. Put your things away.',
    lyricCn: '收拾啦，收拾啦，大家一起收拾啦，把东西放好。',
    action: '收玩具时唱，边唱边放玩具回篮子里',
    tip: '把英语和家务习惯一起建立；固定流程后用歌声代替催促'
  },
  {
    id: 'song-apple', title: 'Apple Round Apple Red', cn: '苹果圆圆苹果红',
    lyric: 'Apple round, apple red. Apple juicy, apple sweet.',
    lyricCn: '苹果圆圆，苹果红红，苹果多汁，苹果甜甜。',
    action: '拿着真苹果边唱边指：圆圆的、红红的、咬一口',
    tip: '水果认知周必听；歌词超短，是宝宝的第一首水果歌'
  },
  {
    id: 'song-shark', title: 'Baby Shark', cn: '鲨鱼宝宝',
    lyric: 'Baby shark, doo doo doo doo doo doo. Baby shark!',
    lyricCn: '鲨鱼宝宝，嘟嘟嘟嘟嘟嘟。',
    action: '用手势做大鲨鱼、小鲨鱼，抓痒痒逗宝宝',
    tip: '不用跟唱，听节奏做手势就好；宝宝会自己"嘟嘟嘟"'
  }
];

// ============ TPR 游戏（全身反应教学法：听指令做动作） ============
export const TPR_GAMES: TprGame[] = [
  {
    id: 'tpr-clap', name: '拍拍手', emoji: '👏',
    actions: [
      { en: 'Clap your hands!', cn: '拍拍手', do: '妈妈先拍，宝宝跟着拍' },
      { en: 'Clap slowly!', cn: '慢慢拍', do: '放慢节奏，感受快慢' },
      { en: 'Clap fast!', cn: '快快拍', do: '加快节奏，笑成一团' }
    ],
    tip: '不需要宝宝会说，只要听到 clap 就拍手，就是成功'
  },
  {
    id: 'tpr-wave', name: '挥挥手', emoji: '👋',
    actions: [
      { en: 'Wave bye-bye!', cn: '挥手拜拜', do: '出门、睡前对家人挥手' },
      { en: 'Say hi!', cn: '说嗨', do: '见到人挥挥手打招呼' }
    ],
    tip: '融入真实告别场景，动作和语言绑定'
  },
  {
    id: 'tpr-kiss', name: '飞吻', emoji: '😘',
    actions: [
      { en: 'Blow a kiss!', cn: '飞一个吻', do: '妈妈先飞吻，宝宝模仿' },
      { en: 'Kiss for mommy!', cn: '亲亲妈妈', do: '把脸凑过去，等宝宝亲' }
    ],
    tip: '最有爱的 TPR；宝宝亲过来时大声说 Thank you!'
  },
  {
    id: 'tpr-peek', name: '躲猫猫', emoji: '🙈',
    actions: [
      { en: 'Where is mommy?', cn: '妈妈在哪里', do: '用手遮脸' },
      { en: 'Peek-a-boo!', cn: '躲猫猫', do: '打开手露出脸' }
    ],
    tip: '全世界宝宝的第一个英语游戏；重复几十次都不腻'
  },
  {
    id: 'tpr-head', name: '摸摸头', emoji: '👶',
    actions: [
      { en: 'Touch your head!', cn: '摸摸头', do: '妈妈示范摸头' },
      { en: 'Touch your nose!', cn: '摸摸鼻子', do: '从头顶到鼻子，逐部位来' },
      { en: 'Touch your tummy!', cn: '摸摸肚子', do: '挠痒痒式摸摸' }
    ],
    tip: '五官身体周核心 TPR；先一个部位，熟了再加'
  },
  {
    id: 'tpr-highfive', name: '击掌', emoji: '🖐️',
    actions: [
      { en: 'Give me five!', cn: '击个掌', do: '伸出手掌，宝宝拍上来' },
      { en: 'Good job!', cn: '真棒', do: '击掌后立刻夸' }
    ],
    tip: '完成任何小任务都用击掌收尾，仪式感满满'
  },
  {
    id: 'tpr-ball', name: '滚球球', emoji: '⚽',
    actions: [
      { en: 'Roll the ball!', cn: '滚球球', do: '把球滚给宝宝' },
      { en: 'Catch it!', cn: '接住', do: '宝宝抱稳球' },
      { en: 'Roll it back!', cn: '滚回来', do: '宝宝推回来' }
    ],
    tip: '坐姿就能玩；滚球是爬行期最好的互动球类'
  },
  {
    id: 'tpr-open', name: '开与关', emoji: '📦',
    actions: [
      { en: 'Open the box!', cn: '打开盒子', do: '打开藏着玩具的盒子' },
      { en: 'Close the box!', cn: '关上盒子', do: '盖上盖子' }
    ],
    tip: '和精细动作"开关盒子"联动；动作即指令'
  },
  {
    id: 'tpr-tickle', name: '挠痒痒', emoji: '🤗',
    actions: [
      { en: 'Tickle, tickle!', cn: '挠痒痒', do: '轻轻挠宝宝的肚子' },
      { en: 'Again?', cn: '再来一次？', do: '等宝宝点头或笑，再来' }
    ],
    tip: '笑声是最好的课堂氛围；等宝宝"还要"的眼神'
  },
  {
    id: 'tpr-tummy', name: '拍拍肚子', emoji: '🥁',
    actions: [
      { en: 'Pat your tummy!', cn: '拍拍肚子', do: '拍拍自己的肚子' },
      { en: 'Pat your knees!', cn: '拍拍膝盖', do: '坐着拍膝盖' },
      { en: 'Pat your head!', cn: '拍拍头', do: '轻轻拍头' }
    ],
    tip: '坐着就能做的全身 TPR，适合爬行期宝宝'
  },
  {
    id: 'tpr-up', name: '站起来坐下', emoji: '🧍‍♀️',
    actions: [
      { en: 'Stand up!', cn: '站起来', do: '扶站时鼓励宝宝站起' },
      { en: 'Sit down!', cn: '坐下', do: '慢慢坐回地面' },
      { en: 'Up, up, up! Down, down, down!', cn: '上上上，下下下', do: '抱着做升降游戏' }
    ],
    tip: '和扶站练习联动；之之目前扶站期，只做扶物站起'
  },
  {
    id: 'tpr-stretch', name: '伸懒腰', emoji: '🙆‍♀️',
    actions: [
      { en: 'Stretch up high!', cn: '伸高高', do: '双手举过头顶' },
      { en: 'Reach the sky!', cn: '够天空', do: '踮起够高处的东西' }
    ],
    tip: '早晨起床后做，配着 Good morning 一起'
  }
];

// ============ 亲子口语：按场景的日常对话 ============
export const PARENT_PHRASES: ParentPhrase[] = [
  {
    scene: '早晨', emoji: '🌅',
    phrases: [
      { en: 'Good morning, baby!', cn: '早上好，宝贝！' },
      { en: 'Did you sleep well?', cn: '睡得好吗？' },
      { en: 'Let\'s get dressed.', cn: '我们穿衣服吧。' },
      { en: 'Open your eyes!', cn: '睁开眼睛！' }
    ]
  },
  {
    scene: '吃饭', emoji: '🍚',
    phrases: [
      { en: 'Time to eat!', cn: '吃饭啦！' },
      { en: 'Yummy, yummy!', cn: '真好吃！' },
      { en: 'Open your mouth. Ah~', cn: '张开嘴，啊~' },
      { en: 'More?', cn: '还要吗？' },
      { en: 'All done!', cn: '吃完啦！' }
    ]
  },
  {
    scene: '玩耍', emoji: '🧸',
    phrases: [
      { en: 'Let\'s play!', cn: '一起玩吧！' },
      { en: 'Where is the ball?', cn: '球在哪里？' },
      { en: 'There it is!', cn: '在那里！' },
      { en: 'Good job!', cn: '真棒！' }
    ]
  },
  {
    scene: '洗澡', emoji: '🛁',
    phrases: [
      { en: 'Time for a bath.', cn: '洗澡时间到。' },
      { en: 'Wash your tummy.', cn: '洗洗肚子。' },
      { en: 'Splash, splash!', cn: '哗啦哗啦！' }
    ]
  },
  {
    scene: '出门', emoji: '🚶‍♀️',
    phrases: [
      { en: 'Let\'s go out!', cn: '出门啦！' },
      { en: 'Put on your shoes.', cn: '穿上鞋子。' },
      { en: 'Look, a bird!', cn: '看，小鸟！' },
      { en: 'Wave bye-bye!', cn: '挥手拜拜！' }
    ]
  },
  {
    scene: '睡前', emoji: '🌙',
    phrases: [
      { en: 'Time to sleep.', cn: '该睡觉啦。' },
      { en: 'Close your eyes.', cn: '闭上眼睛。' },
      { en: 'Good night. I love you!', cn: '晚安，我爱你！' }
    ]
  },
  {
    scene: '鼓励', emoji: '🌟',
    phrases: [
      { en: 'Good job!', cn: '真棒！' },
      { en: 'Well done!', cn: '做得好！' },
      { en: 'You did it!', cn: '你做到啦！' },
      { en: 'High five!', cn: '击掌！' }
    ]
  },
  {
    scene: '危险提醒', emoji: '🛑',
    phrases: [
      { en: 'Be careful!', cn: '小心！' },
      { en: 'No, no.', cn: '不可以。' },
      { en: 'It\'s hot.', cn: '烫烫的。' },
      { en: 'Come here, please.', cn: '到这里来。' }
    ]
  }
];

export const EN_PRINCIPLES: string[] = [
  '只磨耳朵：每天 10-15 分钟，不认读、不拼写、不背单词',
  '建立画面对应：说 apple 时拿真苹果，声音和实物同时出现',
  '无压力：不要求跟读、不测试、不纠正，输入够了自然输出',
  '妈妈开口 > 播放器：真人对话的效果远好于纯音频',
  '同一素材重复一周：重复是低龄宝宝记忆的唯一方式'
];
