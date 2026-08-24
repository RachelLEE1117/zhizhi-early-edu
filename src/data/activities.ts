import type { Activity } from '../types';

// ============ 活动库：全部使用真实生活物品，实物操作优于玩具 ============
export const ACTIVITIES: Activity[] = [
  // ---------- 精细动作&专注力 ----------
  {
    id: 'fine-egg', title: '剥鸡蛋壳', domain: '精细动作', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['熟鸡蛋 1 个'],
    steps: ['妈妈先把蛋壳敲出裂纹', '示范捏起一小片壳', '让宝宝自己一片一片剥下来', '剥好后和妈妈一起吃，夸夸宝宝'],
    benefit: '手指捏力、双手配合、超长专注', tips: '鸡蛋放凉到温热再玩；从裂口处开始最好剥', minutes: 5, crawl: true
  },
  {
    id: 'fine-orange', title: '剥橘子皮', domain: '精细动作', themes: ['水果'], stages: ['13-18', '19-24'],
    materials: ['好剥的蜜桔 1 个'],
    steps: ['妈妈撕开一个小口', '宝宝顺着口拉下大块橘皮', '剥完自己吃，建立"剥了才能吃"的因果'],
    benefit: '撕拉动作、手指力量、因果认知', tips: '选皮软好剥的品种；小块皮让宝宝扔进小碗', minutes: 5, crawl: true
  },
  {
    id: 'fine-banana', title: '剥香蕉', domain: '精细动作', themes: ['水果'], stages: ['13-18', '19-24'],
    materials: ['香蕉半根'],
    steps: ['妈妈在顶端撕开一个小口', '宝宝捏住皮往下拉', '剥一段吃一段'],
    benefit: '捏拉力量、手指分化', tips: '从半根开始练，皮短更好拉', minutes: 3, crawl: true
  },
  {
    id: 'fine-cabbage', title: '撕包菜', domain: '精细动作', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['包菜叶 3-4 片'],
    steps: ['包菜叶洗净沥干', '妈妈示范撕成小块', '宝宝跟着撕，撕进盘子里'],
    benefit: '双手反向用力、手指力量', tips: '撕好的菜真的用来做饭，宝宝超有成就感', minutes: 8, crawl: true
  },
  {
    id: 'fine-beans', title: '捡豆豆', domain: '精细动作', themes: ['自然', '颜色'], stages: ['13-18', '19-24'],
    materials: ['大颗芸豆 8-10 颗、小碗'],
    steps: ['豆子散放在大盘子里', '妈妈示范一颗颗捏起放进小碗', '宝宝自己捡，捡完倒出来再来一轮'],
    benefit: '拇食指捏取、专注力、耐心', tips: '一定要用大颗豆，防误吞；全程陪同', minutes: 8, crawl: true
  },
  {
    id: 'fine-sort', title: '豆子分类', domain: '精细动作', themes: ['颜色'], stages: ['19-24'],
    materials: ['白芸豆、红豆各 4-5 颗、两个小碗'],
    steps: ['豆子混放在一个盘里', '妈妈先分两颗做示范："白豆回家，红豆回家"', '宝宝尝试按颜色分到两个碗'],
    benefit: '分类思维、颜色配对、捏取', tips: '从两种颜色开始，数量少一点；豆子要大颗', minutes: 8, crawl: true
  },
  {
    id: 'fine-spoon', title: '勺子转移', domain: '精细动作', themes: ['家务'], stages: ['19-24'],
    materials: ['小勺、两个碗、干豆或大米'],
    steps: ['一个碗装满米/豆，一个空碗', '妈妈示范用勺舀起来倒进空碗', '宝宝自己舀，撒出来没关系'],
    benefit: '手腕控制、手眼协调', tips: '先用手抓转移，熟练后再上勺子', minutes: 8, crawl: true
  },
  {
    id: 'fine-pasta', title: '通心粉串珠', domain: '精细动作', themes: ['日用物品'], stages: ['19-24'],
    materials: ['大孔通心粉若干、粗鞋带（头缠胶带）'],
    steps: ['妈妈穿一颗示范', '宝宝自己一颗颗穿进去', '穿完系起来当项链，戴给家人看'],
    benefit: '双手配合、专注、耐心', tips: '鞋带头缠一圈胶带变硬，好穿很多', minutes: 10, crawl: true
  },
  {
    id: 'fine-beads', title: '大木珠串珠', domain: '精细动作', themes: ['日用物品'], stages: ['19-24'],
    materials: ['大孔木珠 3-5 颗、鞋带'],
    steps: ['鞋带一端打结防滑落', '宝宝一颗颗穿进去', '穿完挂起来展示'],
    benefit: '手指分化、手眼协调、耐心', tips: '没有木珠就用卷纸芯剪成的环代替，一样好玩', minutes: 10, crawl: true
  },
  {
    id: 'fine-caps', title: '瓶盖配对', domain: '精细动作', themes: ['日用物品'], stages: ['19-24'],
    materials: ['大小不同的空瓶子 3-4 个'],
    steps: ['妈妈把瓶盖都拧下来', '宝宝把盖子拧回去', '熟练后打乱盖子，练习找配对'],
    benefit: '拧的动作、配对思维', tips: '先只练"拧回去"，配对找盖是进阶', minutes: 8, crawl: true
  },
  {
    id: 'fine-coin', title: '塞卡片', domain: '精细动作', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['纸箱开一条缝、大卡片/纸牌几张'],
    steps: ['纸箱顶开一条横缝', '宝宝把卡片一张张从缝里塞进去', '塞完开箱倒出来，惊喜！'],
    benefit: '对准插入、手眼协调', tips: '缝开得宽一些（约 1cm），先成功后收紧', minutes: 8, crawl: true
  },
  {
    id: 'fine-straw', title: '插吸管', domain: '精细动作', themes: ['日用物品'], stages: ['19-24'],
    materials: ['蒸架或纸箱打孔、粗吸管 4-6 根'],
    steps: ['把蒸架立起来或纸箱戳小孔', '宝宝把吸管对准孔插进去', '插满后拔出来重来'],
    benefit: '对准、双手配合', tips: '先用粗吸管大孔；蒸架在厨房随手可得', minutes: 8, crawl: true
  },
  {
    id: 'fine-tear', title: '撕纸', domain: '精细动作', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['旧杂志、广告纸几张'],
    steps: ['妈妈先撕出一个小口', '宝宝顺着撕成条，再撕成小片', '撕下的纸片收进盒子里'],
    benefit: '双手反向用力、手指力量', tips: '撕好的纸片留着做撕纸拼贴画（联动艺术创意）', minutes: 10, crawl: true
  },
  {
    id: 'fine-sticker', title: '贴纸游戏', domain: '精细动作', themes: ['通用'], stages: ['19-24'],
    materials: ['大贴纸、白纸（画好大圆点）'],
    steps: ['妈妈示范撕下一张贴纸', '宝宝把贴纸贴到圆点上', '贴满后展示成果'],
    benefit: '撕贴动作、定位能力', tips: '先让宝宝撕下贴纸，再练习对准贴', minutes: 8, crawl: true
  },
  {
    id: 'fine-book', title: '翻书页', domain: '精细动作', themes: ['动物'], stages: ['13-18', '19-24'],
    materials: ['硬板书 1 本'],
    steps: ['和宝宝一起看硬板书', '宝宝自己一页页翻', '边翻边指认："小猫在这里"'],
    benefit: '手指分化、阅读习惯', tips: '硬板书不怕撕；先教"翻页"这个动作，翻到哪页看哪页', minutes: 5, crawl: true
  },
  {
    id: 'fine-clip', title: '夹夹子', domain: '精细动作', themes: ['家务'], stages: ['19-24'],
    materials: ['晾衣夹 3-5 个、纸盒边沿'],
    steps: ['妈妈示范捏开夹子夹在盒子边', '宝宝练习把夹子拔下来', '熟练后尝试自己夹上去'],
    benefit: '手部捏力、力量控制', tips: '选弹力小的大夹子；夹在低处宝宝好操作', minutes: 8, crawl: true
  },
  {
    id: 'fine-toss', title: '投物入筐', domain: '精细动作', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['洗衣篮、袜子团/软球 5-6 个'],
    steps: ['袜子团放在篮边', '宝宝一个个捡起来投进篮子', '投完和妈妈一起数一数'],
    benefit: '手眼协调、对准', tips: '距离由近到远；"咣当"落筐的声音宝宝超爱', minutes: 8, crawl: true
  },
  {
    id: 'fine-cups', title: '拆套杯', domain: '精细动作', themes: ['日用物品'], stages: ['19-24'],
    materials: ['大小套碗/套杯 4-5 个'],
    steps: ['妈妈把套杯拆开排成一排', '宝宝按大小套回去', '也可以反过来叠高高'],
    benefit: '大小感知、双手配合', tips: '洗澡时用套杯玩水，一举两得', minutes: 10, crawl: true
  },
  {
    id: 'fine-band', title: '橡皮筋套瓶', domain: '精细动作', themes: ['日用物品'], stages: ['19-24'],
    materials: ['矿泉水瓶、粗橡皮筋 4-6 根'],
    steps: ['妈妈示范双手撑开皮筋', '套到瓶身上', '宝宝自己套，套满后全部取下重来'],
    benefit: '双手撑开配合、手指力量', tips: '这个动作有难度，多示范少代劳，套不上也没关系', minutes: 8, crawl: true
  },
  {
    id: 'fine-box', title: '开关盒子', domain: '精细动作', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['鞋盒、小罐等 3-4 个'],
    steps: ['在每个盒子里藏一个小玩具', '宝宝开盖找到惊喜', '再把盖子盖上'],
    benefit: '开合动作、客体永久性认知', tips: '藏的玩具换着来，保持新鲜感', minutes: 8, crawl: true
  },
  {
    id: 'fine-velcro', title: '撕贴魔术贴', domain: '精细动作', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['围嘴、学步鞋的魔术贴'],
    steps: ['妈妈示范撕开魔术贴', '宝宝反复撕开、贴上', '穿鞋脱鞋时顺手练习'],
    benefit: '撕拉力量、生活技能', tips: '融入穿脱衣服的场景，不做单独练习', minutes: 5, crawl: true
  },
  {
    id: 'fine-stick', title: '插棍子', domain: '精细动作', themes: ['通用'], stages: ['19-24'],
    materials: ['面团或橡皮泥一团、吸管段 4-6 根'],
    steps: ['面团按扁做成底座', '宝宝把吸管一根根插进去立起来', '插满后拔下来重来'],
    benefit: '插入动作、手眼协调', tips: '底座用米碗/面团都行；"小树长出来啦"边玩边说', minutes: 8, crawl: true
  },
  {
    id: 'fine-dough', title: '揪面团', domain: '精细动作', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['和好的面团一小块'],
    steps: ['妈妈示范捏、按、揪', '宝宝把面团揪成小块', '揪好的面块一起煮了吃'],
    benefit: '手指力量、触觉', tips: '真面团比橡皮泥更好——能吃、不心疼', minutes: 10, crawl: true
  },
  {
    id: 'fine-water', title: '舀水倒水', domain: '精细动作', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['两个小杯子、洗澡水'],
    steps: ['洗澡时用杯子舀水', '倒进另一个杯子', '再倒回澡盆，看水花'],
    benefit: '手腕控制、手眼协调', tips: '洗澡场景顺手进行，不需要额外准备', minutes: 5, crawl: true
  },
  {
    id: 'fine-rings', title: '套环', domain: '精细动作', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['卷纸芯立柱（粘在纸板上）、布环/木环 3-5 个'],
    steps: ['妈妈示范把环套进立柱', '宝宝一个个套进去', '套完取下重来'],
    benefit: '对准、双手配合', tips: '卷纸芯+纸板 DIY，5 分钟做好', minutes: 8, crawl: true
  },
  {
    id: 'fine-zipper', title: '拉链练习', domain: '精细动作', themes: ['日用物品'], stages: ['19-24'],
    materials: ['带大拉链的包/外套'],
    steps: ['妈妈把拉链头对齐', '宝宝捏住拉链头上下拉', '打开看看里面有什么'],
    benefit: '捏拉动作、手指分化', tips: '拉链头缝个小布条当把手，更好抓', minutes: 5, crawl: true
  },
  {
    id: 'fine-ball', title: '塞球取球', domain: '精细动作', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['空纸巾盒、乒乓球/绒球 4-5 个'],
    steps: ['球从纸巾盒口塞进去', '摇一摇听声音', '开盖倒出来，再塞一遍'],
    benefit: '对准塞入、因果认知', tips: '塞进去→摇一摇→倒出来，一个完整因果链', minutes: 8, crawl: true
  },

  // ---------- 大运动+感统（爬行期→扶站期） ----------
  {
    id: 'gross-tunnel', title: '纸箱隧道', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['大纸箱（两端开口）、小玩具'],
    steps: ['纸箱两端开口做成隧道', '妈妈在另一头呼唤、摇玩具', '宝宝爬进隧道爬出来'],
    benefit: '四肢协调、空间感知、胆量', tips: '箱口大小刚好能爬过；出口处放宝宝最爱的小玩具', minutes: 10, crawl: true
  },
  {
    id: 'gross-pillow', title: '枕头翻山', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['枕头、靠垫 3-4 个'],
    steps: ['枕头堆成小山坡', '宝宝从这头爬到那头', '爬过"山顶"拿到对面的玩具'],
    benefit: '肢体协调、平衡、力量', tips: '坡不要太高太软，宝宝爬得动才有成就感', minutes: 10, crawl: true
  },
  {
    id: 'gross-crab', title: '扶站横移', domain: '大运动', themes: ['通用'], stages: ['19-24'],
    materials: ['沙发或茶几沿、小玩具'],
    steps: ['把玩具放在沙发另一头', '宝宝扶站后横向挪步去拿', '妈妈在旁保护，鼓励"慢慢挪"'],
    benefit: '下肢力量、扶站信心', tips: '光脚抓地更稳；地面铺好垫子', minutes: 8, crawl: true
  },
  {
    id: 'gross-squat', title: '蹲下捡玩具', domain: '大运动', themes: ['通用'], stages: ['19-24'],
    materials: ['小玩具 3-4 个'],
    steps: ['宝宝扶沙发站着，玩具放脚边', '引导蹲下捡起玩具', '捡起来放上沙发，再捡下一个'],
    benefit: '蹲起力量、平衡控制', tips: '扶物蹲起是学走路的关键预备动作', minutes: 8, crawl: true
  },
  {
    id: 'gross-push', title: '推箱跪走', domain: '大运动', themes: ['家务'], stages: ['19-24'],
    materials: ['装了书的小箱子/小板凳'],
    steps: ['箱子装满书让它变重', '宝宝跪着推箱子前进', '推到指定位置（把书"运"到书架边）'],
    benefit: '下肢力量、核心稳定', tips: '箱子重一点不滑，膝盖垫软垫；顺便收书，一举两得', minutes: 8, crawl: true
  },
  {
    id: 'gross-slope', title: '爬坡', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['床垫或沙发垫搭成小坡'],
    steps: ['用垫子搭一个 15-20° 的小坡', '宝宝爬上坡顶，再转身爬下来', '坡顶放个小玩具当奖励'],
    benefit: '协调、力量、空间感知', tips: '坡度要缓；"上山下山"比平爬有趣得多', minutes: 10, crawl: true
  },
  {
    id: 'gross-ball', title: '坐姿滚球', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['大软球 1 个'],
    steps: ['和宝宝对坐（距离 1 米内）', '把球滚给宝宝，让宝宝滚回来', '熟练后轻轻抛接'],
    benefit: '手眼协调、上肢力量、社交', tips: '用大而软的球，好接不伤人；"球球来啦——接住！"', minutes: 10, crawl: true
  },
  {
    id: 'gross-bubble', title: '追泡泡', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['泡泡水'],
    steps: ['妈妈吹出大泡泡', '宝宝爬着追、伸手抓', '扶站时引导拍打高处的泡泡'],
    benefit: '追视、大动作、手眼协调', tips: '泡泡飞得慢，正适合爬行期的宝宝追', minutes: 10, crawl: true
  },
  {
    id: 'gross-pull', title: '拉绳取物', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['小玩具、绳子一根'],
    steps: ['玩具系上绳子放到稍远处', '示范拉绳子把玩具拉过来', '宝宝自己拉，拿到玩具'],
    benefit: '因果理解、上肢力量', tips: '这是最早的"工具使用"，绳子粗一点好抓', minutes: 8, crawl: true
  },
  {
    id: 'gross-swing', title: '毯子荡秋千', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['大浴巾或床单'],
    steps: ['宝宝躺在浴巾中间', '爸妈各执两端轻轻抬起、缓慢摇摆', '边摇边唱儿歌，观察宝宝表情'],
    benefit: '前庭觉、平衡、安全感', tips: '幅度要小、离地要低；宝宝紧张就停下，抱抱再玩', minutes: 5, crawl: true
  },
  {
    id: 'gross-yogaball', title: '坐摇摇球', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['瑜伽球/大龙球'],
    steps: ['爸爸扶稳宝宝坐在球上', '妈妈轻摇球前后左右', '边摇边唱歌'],
    benefit: '前庭刺激、核心肌群、平衡', tips: '大人全程双手扶稳；宝宝抗拒就下次再玩', minutes: 5, crawl: true
  },
  {
    id: 'gross-turn', title: '抱抱转圈圈', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['无'],
    steps: ['妈妈横抱宝宝，缓慢转圈', '配着音乐轻轻舞动', '停下来亲亲额头'],
    benefit: '前庭觉、亲子依恋', tips: '转速要慢，时刻观察表情；晕了就停', minutes: 3, crawl: true
  },
  {
    id: 'gross-stairs', title: '爬台阶', domain: '大运动', themes: ['通用'], stages: ['19-24'],
    materials: ['矮台阶或楼梯 1-2 级'],
    steps: ['选 1-2 级低矮台阶', '宝宝手膝并用爬上去', '妈妈在身后保护，转身爬下来'],
    benefit: '四肢协调、胆量、力量', tips: '只在家人全程看护时进行；先教"倒着退下来"', minutes: 8, crawl: true
  },
  {
    id: 'gross-hurdle', title: '跨越障碍', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['低矮枕头横放 2-3 个'],
    steps: ['爬行路线上横放矮枕头', '宝宝爬过去，跨过障碍', '到终点拿到玩具'],
    benefit: '协调、身体规划能力', tips: '障碍高度逐渐增加，但别超过宝宝腿长的一半', minutes: 10, crawl: true
  },
  {
    id: 'gross-stand', title: '跪坐起立', domain: '大运动', themes: ['通用'], stages: ['19-24'],
    materials: ['沙发、小玩具'],
    steps: ['玩具放沙发上', '宝宝从跪姿扶沙发站起来拿', '拿到后慢慢坐回地面', '反复练习'],
    benefit: '站起技能、下肢力量、平衡', tips: '这是独走前的核心练习，每天来几组', minutes: 8, crawl: true
  },
  {
    id: 'gross-hit', title: '悬挂拍打', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['气球或轻风铃'],
    steps: ['气球挂低一点（宝宝伸手能够到）', '坐着或扶站伸手拍打', '看气球荡来荡去'],
    benefit: '上肢伸展、手眼协调', tips: '气球别吹太满；扶站拍打顺便练平衡', minutes: 8, crawl: true
  },
  {
    id: 'gross-roll', title: '床上翻滚', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['床'],
    steps: ['和宝宝一起躺在床上', '示范从仰卧滚成俯卧', '宝宝跟着翻滚，来回几次'],
    benefit: '前庭觉、身体意识', tips: '翻滚时注意床边安全；配着"轱辘轱辘转"更欢乐', minutes: 5, crawl: true
  },
  {
    id: 'gross-texture', title: '触感爬行', domain: '大运动', themes: ['自然'], stages: ['13-18', '19-24'],
    materials: ['地毯、毛巾、凉席等不同材质'],
    steps: ['地面铺几种不同材质', '宝宝光脚、光手在上面爬', '感受软软的、毛茸茸的、凉凉的'],
    benefit: '触觉整合、感统发育', tips: '边爬边说感受："凉凉的""毛茸茸的"', minutes: 8, crawl: true
  },
  {
    id: 'gross-chase', title: '追物爬行', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['回力车/会动的小玩具'],
    steps: ['让小车跑起来', '宝宝爬着追', '追到了拿给妈妈看'],
    benefit: '爬行速度、协调、目标感', tips: '小车跑慢一点，让宝宝"差点追上"最兴奋', minutes: 8, crawl: true
  },
  {
    id: 'gross-peek', title: '爬爬藏猫猫', domain: '大运动', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['沙发、门后'],
    steps: ['妈妈躲到沙发侧面喊"来找妈妈"', '宝宝循声爬过去', '找到后大笑庆祝，换爸爸躲'],
    benefit: '大运动、听声辨位、社交', tips: '躲的位置由易到难，永远让宝宝找得到', minutes: 10, crawl: true
  },

  // ---------- 语言认知 ----------
  {
    id: 'lang-body', title: '指认身体部位', domain: '语言认知', themes: ['五官'], stages: ['13-18', '19-24'],
    materials: ['无（洗澡/穿衣时进行）'],
    steps: ['边洗边问："之之的小手在哪里？"', '宝宝指出来就大大夸奖', '肚子、脚丫、鼻子、耳朵轮流来'],
    benefit: '词汇积累、听指令、自我认知', tips: '融入洗澡穿衣场景，不问"考"，只做游戏', minutes: 5, crawl: true
  },
  {
    id: 'lang-animal-sound', title: '动物叫声模仿', domain: '语言认知', themes: ['动物'], stages: ['13-18', '19-24'],
    materials: ['动物玩偶或绘本'],
    steps: ['拿起小猫玩偶："小猫怎么叫？喵——"', '鼓励宝宝跟着学', '轮流玩小狗汪汪、小鸭嘎嘎'],
    benefit: '模仿发音、词汇、表达欲', tips: '模仿动物叫声是语言爆发期的天然跳板', minutes: 5, crawl: true
  },
  {
    id: 'lang-command', title: '指令游戏', domain: '语言认知', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['日常物品'],
    steps: ['从一步指令开始："把球给妈妈"', '做到就夸张鼓励', '慢慢升级："把球拿起来，放进盒子里"'],
    benefit: '听懂指令、短句理解', tips: '指令只说一遍，不重复催促；做不到就自己示范', minutes: 5, crawl: true
  },
  {
    id: 'lang-hide', title: '藏猫猫找玩偶', domain: '语言认知', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['小玩偶'],
    steps: ['当着宝宝的面把玩偶藏在布下', '问："小熊去哪里了？"', '宝宝掀开找到："在这里！"'],
    benefit: '客体永久性、疑问句理解', tips: '先当面藏，再背过身藏', minutes: 5, crawl: true
  },
  {
    id: 'lang-photo', title: '照片认家人', domain: '语言认知', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['全家福照片'],
    steps: ['一起看照片', '指认："这是谁呀？妈妈！"', '每天翻一翻，宝宝会先认出最亲的人'],
    benefit: '人物命名、亲情连接', tips: '家人不在场时看照片，缓解分离焦虑', minutes: 5, crawl: true
  },
  {
    id: 'lang-name', title: '实物命名游戏', domain: '语言认知', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['家里的常见物品 3-5 件'],
    steps: ['拿起杯子："这是杯子"', '放进宝宝手里，再说一遍', '下次拿起来时问："这是什么？"'],
    benefit: '词汇积累、物品命名', tips: '只命名不测试；宝宝说错不纠正，直接再说一遍正确的', minutes: 5, crawl: true
  },
  {
    id: 'lang-size', title: '大球小球', domain: '语言认知', themes: ['通用'], stages: ['19-24'],
    materials: ['一大一小两个球'],
    steps: ['滚大球："这是大球，大大的"', '滚小球："这是小球，小小的"', '让宝宝拿大球/拿小球'],
    benefit: '大小概念、词汇对比', tips: '对比词成对教：大-小、多-少、高-矮', minutes: 5, crawl: true
  },
  {
    id: 'lang-count', title: '分豆子多少', domain: '语言认知', themes: ['通用'], stages: ['19-24'],
    materials: ['大颗豆子、两个碗'],
    steps: ['一个碗里多放，一个少放', '指着说："这里多多的，这里少少的"', '让宝宝把"多"的那碗指出来'],
    benefit: '多少概念、数量感知', tips: '用大颗豆防误吞；多少差距要明显', minutes: 5, crawl: true
  },
  {
    id: 'lang-inout', title: '里外认知', domain: '语言认知', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['盒子、小玩具'],
    steps: ['边做边说："玩具放进盒子里"', '"拿出来，放到盒子外面"', '反复几次，让宝宝自己放'],
    benefit: '里外概念、方位词', tips: '和收玩具结合："积木回家，放进盒子里"', minutes: 5, crawl: true
  },
  {
    id: 'lang-coldhot', title: '冷热感知', domain: '语言认知', themes: ['通用'], stages: ['19-24'],
    materials: ['温水杯、凉水杯'],
    steps: ['摸温水："温温的"', '摸凉水："凉凉的"', '让宝宝自己摸一摸、说一说'],
    benefit: '冷热概念、感官语言', tips: '温度要安全：温水不烫手，凉水不太冰', minutes: 5, crawl: true
  },
  {
    id: 'lang-drywet', title: '干湿感知', domain: '语言认知', themes: ['家务'], stages: ['19-24'],
    materials: ['干毛巾、湿毛巾'],
    steps: ['摸干毛巾："干干的"', '摸湿毛巾："湿湿的"', '让宝宝帮妈妈把湿毛巾晾起来'],
    benefit: '干湿概念、触觉语言', tips: '和晒衣服场景结合，顺带生活技能', minutes: 5, crawl: true
  },
  {
    id: 'lang-color', title: '颜色配对', domain: '语言认知', themes: ['颜色'], stages: ['19-24'],
    materials: ['同色袜子/积木 4-6 件'],
    steps: ['红色袜子配成一双："两只都是红色的"', '宝宝找出红色的那一只', '换黄色再来'],
    benefit: '颜色认知、配对', tips: '从一种颜色开始，一周专注 1-2 种颜色', minutes: 8, crawl: true
  },
  {
    id: 'lang-high', title: '搭高高', domain: '语言认知', themes: ['通用'], stages: ['19-24'],
    materials: ['积木或纸盒 4-6 块'],
    steps: ['一块一块搭："高高的"', '推倒："倒啦！"', '宝宝自己搭，妈妈配音'],
    benefit: '高低概念、搭建能力', tips: '推倒是宝宝的乐趣，别阻止，一起大笑', minutes: 8, crawl: true
  },
  {
    id: 'lang-updown', title: '上上下下', domain: '语言认知', themes: ['通用'], stages: ['19-24'],
    materials: ['玩具、桌子'],
    steps: ['玩具放桌上："在上面"', '放桌下："在下面"', '让宝宝按指令放：放上面/放下面'],
    benefit: '上下方位、指令理解', tips: '方位词要边说边做，动作和语言同步', minutes: 5, crawl: true
  },
  {
    id: 'lang-fruit', title: '水果指认', domain: '语言认知', themes: ['水果'], stages: ['13-18', '19-24'],
    materials: ['真水果 2-3 种'],
    steps: ['水果放进篮子里', '拿起苹果："这是苹果，红红的"', '让宝宝指：苹果在哪里？', '切一块尝尝'],
    benefit: '水果命名、多感官输入', tips: '看、摸、闻、尝——调动所有感官认识一种水果', minutes: 8, crawl: true
  },
  {
    id: 'lang-animal', title: '动物指认', domain: '语言认知', themes: ['动物'], stages: ['13-18', '19-24'],
    materials: ['绘本或动物玩偶'],
    steps: ['翻开动物绘本："小狗在哪里？"', '宝宝指出："在这里！"', '出门遇到真猫真狗就现场教学'],
    benefit: '动物认知、命名', tips: '真动物 > 玩偶 > 图片，顺序别反', minutes: 5, crawl: true
  },
  {
    id: 'lang-face', title: '照镜子指五官', domain: '语言认知', themes: ['五官'], stages: ['13-18', '19-24'],
    materials: ['镜子'],
    steps: ['抱着宝宝照镜子', '"之之的鼻子在哪里？"指一指', '妈妈的眼睛、耳朵、嘴巴轮流指'],
    benefit: '五官认知、自我意识', tips: '镜子游戏对自我意识发展特别重要', minutes: 5, crawl: true
  },
  {
    id: 'lang-tour', title: '家里巡游', domain: '语言认知', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['无'],
    steps: ['抱着或牵着宝宝在家里慢慢逛', '"这是灯，亮亮的"', '"这是门，打开——关上"', '每天逛一圈，指认不断扩充'],
    benefit: '日常物品命名、词汇爆发', tips: '同样的物品每天重复说，宝宝才记得牢', minutes: 10, crawl: true
  },
  {
    id: 'lang-leaf', title: '自然观察', domain: '语言认知', themes: ['自然'], stages: ['13-18', '19-24'],
    materials: ['树叶、花瓣、小草'],
    steps: ['出门捡一片树叶："树叶，绿色的"', '摸一摸小草、闻一闻花', '带回家放进"自然收集盒"'],
    benefit: '自然认知、词汇、观察力', tips: '每周的自然收集盒是很好的回顾素材', minutes: 10, crawl: true
  },
  {
    id: 'lang-sweep', title: '模仿家务', domain: '语言认知', themes: ['家务'], stages: ['19-24'],
    materials: ['小抹布一块'],
    steps: ['妈妈擦桌子，给宝宝一块小抹布', '宝宝跟着擦："擦擦擦"', '边做边说动作词'],
    benefit: '模仿学习、动词积累', tips: '19 月龄宝宝超爱模仿家务，别嫌"帮倒忙"', minutes: 8, crawl: true
  },

  // ---------- 感官探索 ----------
  {
    id: 'sen-rice', title: '米盆寻宝', domain: '感官探索', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['大盆、大米、小玩具 2-3 个'],
    steps: ['玩具埋进米盆里', '宝宝伸手摸、挖、找', '找到的玩具放旁边，全部找到后重来'],
    benefit: '触觉探索、精细动作、专注', tips: '米撒出来没关系，玩完一起扫，顺便练生活技能', minutes: 15, crawl: true
  },
  {
    id: 'sen-beanbag', title: '豆袋触感', domain: '感官探索', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['小布袋 3 个、不同豆类'],
    steps: ['布袋里分别装红豆、黄豆、绿豆', '宝宝捏一捏、抓一抓', '感受不一样的触感和声音'],
    benefit: '触觉分辨、手指力量', tips: '袋子缝死防漏；边捏边说感受', minutes: 8, crawl: true
  },
  {
    id: 'sen-water', title: '温水凉水体验', domain: '感官探索', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['两小盆水'],
    steps: ['一盆温水、一盆凉水', '宝宝先摸温水，再摸凉水', '"温温的""凉凉的"反复感受'],
    benefit: '温度知觉、感官语言', tips: '水温安全第一：40°C 以内、不低于 25°C', minutes: 10, crawl: true
  },
  {
    id: 'sen-ice', title: '冰块融化', domain: '感官探索', themes: ['自然'], stages: ['19-24'],
    materials: ['小冰块 1-2 块、温水小盆'],
    steps: ['冰块放进温水里', '宝宝看冰块越来越小', '伸手摸一摸："凉凉的"'],
    benefit: '温度知觉、观察力、因果', tips: '第一次玩冰块可能惊讶，妈妈先示范再邀请', minutes: 8, crawl: true
  },
  {
    id: 'sen-dough', title: '面团探索', domain: '感官探索', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['面团一小块'],
    steps: ['面团放宝宝面前，随便捏随便玩', '按手印、戳洞洞、揪小块', '玩过的面蒸熟吃掉'],
    benefit: '触觉、手指力量、创造力', tips: '这是最安全的"橡皮泥"', minutes: 15, crawl: true
  },
  {
    id: 'sen-bubble', title: '泡泡游戏', domain: '感官探索', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['泡泡水'],
    steps: ['妈妈吹泡泡', '宝宝追、抓、戳破泡泡', '看泡泡飞高飞低'],
    benefit: '追视、触觉、大动作', tips: '晴天在阳光下玩，泡泡五颜六色更吸引', minutes: 10, crawl: true
  },
  {
    id: 'sen-sponge', title: '海绵吸水', domain: '感官探索', themes: ['家务'], stages: ['19-24'],
    materials: ['海绵 2 块、两小盆水'],
    steps: ['海绵放进水里吸饱水', '拿出来挤干："水出来啦"', '宝宝自己吸、自己挤'],
    benefit: '触觉、手部力量、因果', tips: '洗澡时顺手玩；挤水动作很练手劲', minutes: 8, crawl: true
  },
  {
    id: 'sen-bell', title: '铃铛瓶', domain: '感官探索', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['透明小瓶 2-3 个、豆子/铃铛/米'],
    steps: ['瓶子里分别装豆子、铃铛、米', '宝宝摇一摇听不同的声音', '找一找声音从哪里来'],
    benefit: '听觉分辨、因果认知', tips: '瓶盖拧紧防漏；"沙沙沙""叮铃铃"边摇边配音', minutes: 8, crawl: true
  },
  {
    id: 'sen-smell', title: '闻一闻', domain: '感官探索', themes: ['水果'], stages: ['19-24'],
    materials: ['橘子皮、柠檬片'],
    steps: ['剥开的橘子皮凑近宝宝鼻子', '"闻一闻，香香的"', '换柠檬片，闻不同的味道'],
    benefit: '嗅觉探索、感官语言', tips: '做饭切水果时顺手进行，0 准备成本', minutes: 5, crawl: true
  },
  {
    id: 'sen-shadow', title: '光与影', domain: '感官探索', themes: ['通用'], stages: ['19-24'],
    materials: ['手电筒'],
    steps: ['拉上窗帘', '手电筒照墙上，慢慢移动', '宝宝看光斑、伸手抓影子'],
    benefit: '追视、好奇心', tips: '睡前小游戏，安静又神奇', minutes: 5, crawl: true
  },
  {
    id: 'sen-board', title: '触感板', domain: '感官探索', themes: ['通用'], stages: ['19-24'],
    materials: ['硬纸板、绒布/砂纸/泡泡纸等'],
    steps: ['不同材质贴在纸板上', '宝宝用手摸每一格', '感受软软的、糙糙的、鼓鼓的'],
    benefit: '触觉分辨、专注', tips: 'DIY 10 分钟做好；材质选安全无小件的', minutes: 8, crawl: true
  },
  {
    id: 'sen-nature', title: '自然触感', domain: '感官探索', themes: ['自然'], stages: ['13-18', '19-24'],
    materials: ['树叶、花瓣、小草'],
    steps: ['出门摸树叶、闻花香', '踩一踩草地（抱着或扶站）', '捡一片最喜欢的带回家'],
    benefit: '触觉、嗅觉、自然兴趣', tips: '下雨后摸摸湿树叶，感受又不一样', minutes: 10, crawl: true
  },
  {
    id: 'sen-colorwater', title: '彩色的水', domain: '感官探索', themes: ['颜色'], stages: ['19-24'],
    materials: ['透明杯 3 个、食用色素'],
    steps: ['三个杯子里滴不同颜色', '看颜色在水里散开', '宝宝搅一搅、倒一倒'],
    benefit: '颜色认知、视觉追踪', tips: '食用色素安全；每次只玩 2-3 种颜色', minutes: 10, crawl: true
  },

  // ---------- 生活技能 ----------
  {
    id: 'life-spoon', title: '自己用勺吃饭', domain: '生活技能', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['小勺、黏稠的食物（粥/土豆泥）'],
    steps: ['食物选黏稠好舀的', '宝宝自己舀、自己送嘴里', '撒了没关系，吃进去就鼓励'],
    benefit: '自理能力、手腕控制、自信', tips: '先喂一半垫底，再让宝宝自己来；罩衣+餐垫，妈妈不焦虑', minutes: 15, crawl: true
  },
  {
    id: 'life-handfood', title: '手指食物自喂', domain: '生活技能', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['蒸软的胡萝卜条、南瓜块等'],
    steps: ['食物切条蒸软放餐盘', '宝宝自己抓、自己吃', '妈妈陪着一起吃'],
    benefit: '抓握、咀嚼、自主进食', tips: '食物软到能捏碎，形状做成方便抓的长条', minutes: 15, crawl: true
  },
  {
    id: 'life-cup', title: '自己用杯喝水', domain: '生活技能', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['小开口杯（倒 1-2 口水）'],
    steps: ['杯子里只倒一点水', '宝宝双手捧杯喝', '喝完夸："自己喝水啦！"'],
    benefit: '自理能力、双手协调', tips: '从吸管杯过渡到小开口杯；洒了擦擦就好', minutes: 5, crawl: true
  },
  {
    id: 'life-wipe', title: '擦嘴擦手', domain: '生活技能', themes: ['家务'], stages: ['19-24'],
    materials: ['小毛巾'],
    steps: ['吃完饭把毛巾给宝宝', '"擦擦嘴，擦擦手"', '妈妈也一起擦，做示范'],
    benefit: '自理能力、模仿', tips: '用宝宝专属小毛巾，挂在宝宝够得到的地方', minutes: 3, crawl: true
  },
  {
    id: 'life-trash', title: '扔垃圾', domain: '生活技能', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['垃圾桶、纸巾/尿不湿'],
    steps: ['换下的尿不湿让宝宝自己扔进桶', '"扔进去啦，真棒！"', '日常小垃圾都请宝宝帮忙'],
    benefit: '自理意识、指令理解', tips: '垃圾桶放固定位置；这几乎是所有宝宝最爱的家务', minutes: 3, crawl: true
  },
  {
    id: 'life-toys', title: '收玩具', domain: '生活技能', themes: ['家务'], stages: ['19-24'],
    materials: ['玩具收纳篮'],
    steps: ['玩完一起收："玩具要回家啦"', '宝宝放回篮子里，妈妈唱收拾歌', '收完击掌庆祝'],
    benefit: '秩序感、责任感', tips: '固定收纳位置+固定流程，宝宝很快养成习惯', minutes: 8, crawl: true
  },
  {
    id: 'life-socks', title: '脱袜子', domain: '生活技能', themes: ['日用物品'], stages: ['19-24'],
    materials: ['宽松袜子'],
    steps: ['妈妈把袜口拉松', '宝宝从脚尖往下拽', '脱下来扔进脏衣篮'],
    benefit: '自理能力、手指力量', tips: '先学会脱再学穿；睡觉前固定流程练一练', minutes: 3, crawl: true
  },
  {
    id: 'life-dress', title: '配合穿衣服', domain: '生活技能', themes: ['日用物品'], stages: ['13-18', '19-24'],
    materials: ['衣服'],
    steps: ['穿袖子："小手伸出来——"', '宝宝配合伸胳膊', '穿裤子时抬抬脚'],
    benefit: '配合意识、身体认知', tips: '边穿边唱儿歌，把穿衣变成游戏', minutes: 5, crawl: true
  },
  {
    id: 'life-wash', title: '洗手', domain: '生活技能', themes: ['家务'], stages: ['19-24'],
    materials: ['洗手台/小水盆'],
    steps: ['饭前一起洗手', '搓搓手心、搓搓手背', '"泡泡冲干净啦"'],
    benefit: '卫生习惯、自理', tips: '准备宝宝踩脚凳；玩水是洗手最大的动力', minutes: 5, crawl: true
  },
  {
    id: 'life-table', title: '擦桌子', domain: '生活技能', themes: ['家务'], stages: ['19-24'],
    materials: ['小抹布'],
    steps: ['给宝宝一块湿抹布', '一起擦桌子："擦擦擦"', '擦完把抹布放回原位'],
    benefit: '模仿家务、大臂运动', tips: '不纠正动作，擦到哪里都算数', minutes: 5, crawl: true
  },
  {
    id: 'life-give', title: '帮忙递东西', domain: '生活技能', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['拖鞋、遥控器等'],
    steps: ['"帮妈妈把拖鞋拿过来"', '宝宝爬过去拿过来', '收到后认真道谢'],
    benefit: '指令理解、助人意识', tips: '宝宝爱当"小帮手"，指令要具体到一件物品', minutes: 5, crawl: true
  },
  {
    id: 'life-hair', title: '照镜子梳头', domain: '生活技能', themes: ['五官'], stages: ['19-24'],
    materials: ['小梳子、镜子'],
    steps: ['给宝宝一把小梳子', '照镜子梳一梳', '妈妈也梳，互相梳'],
    benefit: '自我意识、自理', tips: '镜子前宝宝能玩很久，是很好的安静游戏', minutes: 5, crawl: true
  },
  {
    id: 'life-shoe', title: '自己穿鞋', domain: '生活技能', themes: ['日用物品'], stages: ['19-24'],
    materials: ['魔术贴鞋子'],
    steps: ['宝宝把脚伸进鞋子', '妈妈帮忙把后跟提上', '宝宝自己按上魔术贴'],
    benefit: '自理能力、配合', tips: '选宽口魔术贴鞋；出门前多留 5 分钟给宝宝自己来', minutes: 5, crawl: true
  },

  // ---------- 艺术创意 ----------
  {
    id: 'art-yogurt', title: '酸奶手指画', domain: '艺术创意', themes: ['颜色'], stages: ['13-18', '19-24'],
    materials: ['酸奶、食用色素、大盘子'],
    steps: ['酸奶分三份，滴不同颜色', '宝宝用手指在盘子上涂、抹、画', '画完可以舔一口（能吃！）'],
    benefit: '触觉、颜色认知、涂鸦兴趣', tips: '酸奶可食用，不怕吃手；罩衣备好', minutes: 15, crawl: true
  },
  {
    id: 'art-crayon', title: '大蜡笔涂鸦', domain: '艺术创意', themes: ['颜色'], stages: ['19-24'],
    materials: ['大蜡笔 2-3 支、大张纸'],
    steps: ['纸用胶带固定在地上/桌面', '宝宝握着蜡笔随意涂', '妈妈在旁边一起画，不纠正'],
    benefit: '握笔、手腕控制、色彩', tips: '选粗蜡笔（鸡蛋形状的最好握）；纸越大越好', minutes: 10, crawl: true
  },
  {
    id: 'art-tear-paste', title: '撕纸拼贴', domain: '艺术创意', themes: ['通用'], stages: ['19-24'],
    materials: ['彩纸、米糊、大张纸'],
    steps: ['把彩纸撕成小片', '涂米糊贴到大纸上', '贴成任意图案'],
    benefit: '手指力量、创造力', tips: '用米糊代替胶水，安全可舔；和"撕纸"活动联动', minutes: 15, crawl: true
  },
  {
    id: 'art-print', title: '蔬菜拓印', domain: '艺术创意', themes: ['自然'], stages: ['19-24'],
    materials: ['土豆切块、秋葵、颜料'],
    steps: ['土豆切面蘸颜料', '印在纸上："盖章！"', '秋葵切面印出小星星'],
    benefit: '色彩、因果、创造力', tips: '用可水洗颜料；土豆块切大一点好抓', minutes: 15, crawl: true
  },
  {
    id: 'art-dough-print', title: '面团手印', domain: '艺术创意', themes: ['家务'], stages: ['13-18', '19-24'],
    materials: ['面团、小叉子'],
    steps: ['面团按扁', '宝宝按手印、戳洞洞', '用叉子压出花纹'],
    benefit: '触觉、手部力量、因果', tips: '蒸熟吃掉或晒干留念都是好结局', minutes: 10, crawl: true
  },
  {
    id: 'art-sticker-pic', title: '贴纸画', domain: '艺术创意', themes: ['通用'], stages: ['19-24'],
    materials: ['大贴纸、画好的树/气球轮廓'],
    steps: ['画纸上画棵光秃秃的大树', '宝宝把贴纸贴在树枝上', '"树上结满果子啦！"'],
    benefit: '定位、审美、成就感', tips: '贴纸大一点好撕；主题随季节换', minutes: 10, crawl: true
  },
  {
    id: 'art-leaf', title: '树叶拼贴', domain: '艺术创意', themes: ['自然'], stages: ['19-24'],
    materials: ['捡来的树叶、米糊、纸'],
    steps: ['一起挑喜欢的树叶', '背面涂米糊贴在纸上', '拼成大树/小船的形状'],
    benefit: '自然审美、创造力', tips: '和自然探索周联动，捡回来的树叶做拼贴', minutes: 15, crawl: true
  },
  {
    id: 'art-sponge', title: '海绵印章', domain: '艺术创意', themes: ['颜色'], stages: ['19-24'],
    materials: ['海绵剪成形状、颜料、纸'],
    steps: ['海绵蘸颜料', '印在纸上', '看形状一个个出现'],
    benefit: '手部力量、因果、色彩', tips: '海绵柄留长一点好抓握', minutes: 10, crawl: true
  },
  {
    id: 'art-marble', title: '盒子滚珠画', domain: '艺术创意', themes: ['颜色'], stages: ['19-24'],
    materials: ['纸盒、大珠子、颜料、纸'],
    steps: ['纸铺在盒底，滴几点颜料', '珠子放进去，宝宝端盒子摇一摇', '珠子滚出彩色轨迹'],
    benefit: '色彩、大臂运动、因果', tips: '珠子要大到吞不下；摇盒子顺便练大运动', minutes: 10, crawl: true
  },
  {
    id: 'art-water', title: '清水水画', domain: '艺术创意', themes: ['通用'], stages: ['13-18', '19-24'],
    materials: ['清水、毛笔/刷子、深色地面'],
    steps: ['毛笔蘸清水', '在地砖/深色纸上画', '看水痕出现又消失'],
    benefit: '涂鸦兴趣、因果观察', tips: '零成本零清洁，浴室地面也能画', minutes: 8, crawl: true
  }
];

export const byDomain = (d: string) => ACTIVITIES.filter((a) => a.domain === d);
export const byTheme = (t: string) => ACTIVITIES.filter((a) => a.themes.includes(t as never));
export const byId = (id: string) => ACTIVITIES.find((a) => a.id === id);
