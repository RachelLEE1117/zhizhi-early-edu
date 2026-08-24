import type { ThemePack } from '../types';

// ============ 每周主题循环系统：7 周一循环 ============
export const THEME_ORDER = ['颜色', '水果', '动物', '五官', '日用物品', '家务', '自然'] as const;

export const THEMES: Record<string, ThemePack> = {
  '颜色': {
    key: '颜色', name: '颜色认知周', emoji: '🌈', color: '#FF8FAB',
    focus: [
      '红色：找找家里红色的东西（西红柿、红袜子、红色积木）',
      '黄色：香蕉、柠檬、小鸭子都是黄色的',
      '颜色配对：同色袜子配成双，同色积木放一起'
    ],
    talk: [
      '"这是红色的苹果，红红的。"',
      '"之之的袜子是什么颜色呀？红色的！"',
      '"我们把黄色的积木放在一起吧。"',
      '"这个气球是红色的，那个气球是黄色的。"'
    ],
    enWords: [
      { en: 'red', cn: '红色' }, { en: 'yellow', cn: '黄色' },
      { en: 'blue', cn: '蓝色' }, { en: 'green', cn: '绿色' }
    ],
    enSentences: [
      { en: 'The apple is red.', cn: '苹果是红色的。' },
      { en: 'Where is the yellow one?', cn: '黄色的是哪个？' }
    ],
    songId: 'song-rainbow',
    activityIds: ['fine-sort', 'lang-color', 'sen-colorwater', 'art-yogurt', 'art-crayon'],
    observeNote: '本周观察：宝宝能否把 2 种颜色区分开来（19-24 月龄能认识 1-2 种颜色就很棒）'
  },
  '水果': {
    key: '水果', name: '水果认知周', emoji: '🍎', color: '#FF6B6B',
    focus: [
      '认识 2-3 种水果：苹果、香蕉、橘子',
      '用看、摸、闻、尝认识每种水果',
      '剥皮自己吃：剥橘子、剥香蕉练精细动作'
    ],
    talk: [
      '"这是苹果，红红的，闻一闻香香的。"',
      '"香蕉要剥皮才能吃哦，之之自己剥。"',
      '"橘子一瓣一瓣的，甜甜的。"',
      '"水果宝宝要回家啦，放进篮子里。"'
    ],
    enWords: [
      { en: 'apple', cn: '苹果' }, { en: 'banana', cn: '香蕉' },
      { en: 'orange', cn: '橘子' }, { en: 'yummy', cn: '好吃' }
    ],
    enSentences: [
      { en: 'I like apples.', cn: '我喜欢苹果。' },
      { en: 'Peel the banana.', cn: '剥香蕉皮。' }
    ],
    songId: 'song-apple',
    activityIds: ['fine-orange', 'fine-banana', 'lang-fruit', 'sen-smell'],
    observeNote: '本周观察：宝宝看到苹果/香蕉时，会不会主动说出或指出名字'
  },
  '动物': {
    key: '动物', name: '动物认知周', emoji: '🐱', color: '#FFA94D',
    focus: [
      '认识 3-4 种动物：小猫、小狗、小鸭、小鸡',
      '模仿动物叫声：喵喵、汪汪、嘎嘎、叽叽',
      '动物玩偶藏猫猫：找到躲起来的小动物'
    ],
    talk: [
      '"小猫来了，喵——喵——"',
      '"小狗怎么叫？汪汪汪！"',
      '"小鸭子嘎嘎嘎，摇摇摆摆走路。"',
      '"小熊藏到哪里去啦？找一找。"'
    ],
    enWords: [
      { en: 'cat', cn: '猫' }, { en: 'dog', cn: '狗' },
      { en: 'duck', cn: '鸭子' }, { en: 'chick', cn: '小鸡' }
    ],
    enSentences: [
      { en: 'The cat says meow.', cn: '小猫喵喵叫。' },
      { en: 'Where is the dog?', cn: '小狗在哪里？' }
    ],
    songId: 'song-oldmac',
    activityIds: ['lang-animal-sound', 'lang-animal', 'fine-book', 'gross-peek'],
    observeNote: '本周观察：宝宝会不会模仿 1-2 种动物叫声——这是语言表达的好信号'
  },
  '五官': {
    key: '五官', name: '五官身体周', emoji: '👀', color: '#62B6E8',
    focus: [
      '指认五官：眼睛、鼻子、嘴巴、耳朵',
      '指认身体：小手、小脚、肚子、头发',
      '照镜子游戏：看看镜子里的自己'
    ],
    talk: [
      '"之之的眼睛在哪里？在这里！亮亮的。"',
      '"妈妈用鼻子闻一闻，之之也闻一闻。"',
      '"小脚丫藏起来啦，挠一挠。"',
      '"嘴巴张开，啊——吃一口饭。"'
    ],
    enWords: [
      { en: 'eyes', cn: '眼睛' }, { en: 'nose', cn: '鼻子' },
      { en: 'mouth', cn: '嘴巴' }, { en: 'ears', cn: '耳朵' }
    ],
    enSentences: [
      { en: 'Touch your nose.', cn: '摸摸鼻子。' },
      { en: 'Close your eyes.', cn: '闭上眼睛。' }
    ],
    songId: 'song-head',
    activityIds: ['lang-body', 'lang-face', 'life-hair'],
    observeNote: '本周观察：问"鼻子在哪里"时，宝宝能不能自己指出来（3 个部位以上很棒）'
  },
  '日用物品': {
    key: '日用物品', name: '日常物品周', emoji: '🧺', color: '#7FCB6E',
    focus: [
      '家里巡游：认识灯、门、鞋、杯子等日常物品',
      '指令练习：把杯子给妈妈、把球放进盒子里',
      '瓶盖配对、开关盒子练小手'
    ],
    talk: [
      '"这是杯子，之之喝水用的杯子。"',
      '"灯亮了，亮亮的；关灯，黑黑的。"',
      '"把球放进盒子里，球球回家啦。"',
      '"鞋子要摆好，两只放在一起。"'
    ],
    enWords: [
      { en: 'cup', cn: '杯子' }, { en: 'ball', cn: '球' },
      { en: 'shoes', cn: '鞋子' }, { en: 'book', cn: '书' }
    ],
    enSentences: [
      { en: 'Put the ball in the box.', cn: '把球放进盒子里。' },
      { en: 'Where is your cup?', cn: '你的杯子在哪里？' }
    ],
    songId: 'song-wheels',
    activityIds: ['fine-caps', 'fine-box', 'lang-name', 'lang-tour', 'lang-command'],
    observeNote: '本周观察：宝宝能否听懂并完成"把 XX 给妈妈"这类一步指令'
  },
  '家务': {
    key: '家务', name: '家务动手周', emoji: '🧹', color: '#A78BDA',
    focus: [
      '模仿家务：擦桌子、扔垃圾、收玩具',
      '食物准备：撕包菜、剥鸡蛋、揪面团',
      '自己的事情自己做：吃饭、脱袜、洗手'
    ],
    talk: [
      '"擦擦擦，桌子擦得亮晶晶。"',
      '"垃圾要扔进垃圾桶里，咻——"',
      '"玩具要回家啦，一个一个放进去。"',
      '"之之帮妈妈拿拖鞋，谢谢小帮手！"'
    ],
    enWords: [
      { en: 'clean', cn: '擦干净' }, { en: 'put away', cn: '收起来' },
      { en: 'throw', cn: '扔' }, { en: 'help', cn: '帮忙' }
    ],
    enSentences: [
      { en: 'Let\'s clean up.', cn: '我们一起收拾吧。' },
      { en: 'Throw it in the trash.', cn: '扔进垃圾桶里。' }
    ],
    songId: 'song-cleanup',
    activityIds: ['fine-cabbage', 'fine-egg', 'life-table', 'life-trash', 'life-toys', 'lang-sweep'],
    observeNote: '本周观察：宝宝会不会主动模仿大人做家务——模仿是 19-24 月龄最重要的学习方式'
  },
  '自然': {
    key: '自然', name: '自然探索周', emoji: '🍃', color: '#5BA85B',
    focus: [
      '户外探索：树叶、小草、花朵、石头',
      '天气感知：太阳暖暖的、风吹过来凉凉的',
      '自然收集盒：把捡到的宝贝带回家'
    ],
    talk: [
      '"小树叶掉下来啦，绿色的树叶。"',
      '"风吹过来，凉凉的，树叶沙沙响。"',
      '"小花闻一闻，香香的。"',
      '"我们捡一片最漂亮的树叶回家吧。"'
    ],
    enWords: [
      { en: 'tree', cn: '树' }, { en: 'flower', cn: '花' },
      { en: 'leaf', cn: '树叶' }, { en: 'sun', cn: '太阳' }
    ],
    enSentences: [
      { en: 'The sun is warm.', cn: '太阳暖暖的。' },
      { en: 'Look at the tree.', cn: '看那棵树。' }
    ],
    songId: 'song-twinkle',
    activityIds: ['lang-leaf', 'sen-nature', 'art-leaf', 'gross-texture', 'fine-beans'],
    observeNote: '本周观察：出门时宝宝会不会主动指外面的树/花/鸟——好奇心是最宝贵的'
  }
};

export const THEME_LIST: ThemePack[] = THEME_ORDER.map((k) => THEMES[k]);
