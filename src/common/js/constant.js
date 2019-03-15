import {DOMAIN} from './DOMAINS_ALLINFO'
const domains=DOMAIN;
const domainTypes = ['养老机构', '护理院', '长照', '快捷站', '日间照料中心', '居家', '其他'];

const ages = ['60岁以下', '61-70岁', '71-80岁', '81-90岁', '91-100岁', '100岁以上'];
const ages1 = ['20-30岁', '31-40岁', '41-50岁', '51-60岁', '60岁以上'];

const userTypes = [
  '独居',
  '老老介护',
  '与子女同住',
  '与保姆同住',
  '其他',
];

const userStates = ['自理能力', '疾病情况', '肢体运动', '认知功能', '精神行为症状'];

const userStatesMemo = [
  '生活基本自理',
  '轻度失能',
  '中度失能',
  '重度失能'];


const placeTypes = [
  {
    name: '固定场所',
    list:[
      '床上','床旁 ','居室内','卫生间 ','居室阳台 ',
      '洗浴间', '公共卫生间', '餐厅', '康复区 ', '多功能活动区', '走廊',
      '门厅/前台',  '电梯', '办公室', '接待室 ', '护士台'
    ]
  },
  {
    name:'移动场所',
    list:[
      '轮椅',
      '助行器',
      '其他',
    ]
  },

]

const eventTimes = [
  '5:01-8:00',
  '8:01-10:00',
  '10:01-12:00',
  '12:01-14:00',
  '14:01-16:00',
  '16:01-18:00',
  '18:01-20:00',
  '20:01-22:00',
  '22:01-00:00',
  '00:01-03:00',
  '03:01-05:00',
]
const eventScene = [
  '康复运动锻炼',
  '集体活动',
  '用餐饮水',
  '日间如厕',
  '洗浴服务',
  '移乘服务',
  '日常照护服务',
  '夜间如厕',
  '夜间其他离床状态',
]
const eventType = [
  {name:'后勤故障类',list:['停水', '停电', '智能设备故障', '康复设备故障', '电器故障 ', '其他'],},
  {name:'护理意外类',list:['触电','服药差错 ','烧伤/烫伤', '外出/不归', '误吸/噎食', '意外坠床/跌倒/滑落',  '压疮/褥疮', '其他'],},
  {name:'生命财产安全类',list:[ '猝死' ,  '精神异常' , '身故' ,  '自杀/自残' , '中暑' , '财产及物品丢失/损坏' , '其他'],},
  {name:'食品安全类',list:['食物中毒', '其他'],},
  {name:'突发疾病类',list:['传染病'  ,'院内感染' ,  '突发其他疾病'],},
  {name:'消防安全类',list:['传染病' , '院内感染',  '突发其他疾病'],},
  {name:'自然灾害类',list:['台风/雷雨' ,'突发浸水',   '其他'],},
  {name:'员工事件类',list:['员工纠纷' , '虐待',  '推销',  '其他'],},
  {name:'用户事件类',list:['用户肢体冲突' ,  '用户言语纠纷',  '其他'],},
  {name:'其他类',list:['非法侵害',  ,'其他']},]

const symptoms = [
  '无症状 ',
  '感冒(鼻塞、流涕、咳嗽、咳痰、咽痛等) ',
  '发热',
  '恶心/呕吐',
  '腹泻',
  '腹痛',
  '头痛/头晕',
  '昏迷/意识不清',
  '局部血肿/局部外伤/软组织挫伤',
  '肢体活动不利',
  '言语不利',
  '呛咳',
  '肢体功能障碍伴疼痛、肿胀、畸形（骨折可能）',
  '其他',
]
const disposes = [
  '无损伤，无处理 ',
  '生命体征异常，需加强观察',
  '需局部治疗处理',
  '需紧急送医治疗',
  '心理安抚和疏导',
  '其他',
  '紧急维修 ',
  '报警 ',
  '其他',
]
const workerTitle = [
  '无职称',
  '初级职称',
  '中级职称',
  '高级职称',
]
const workerTypes = [
  {name:'照护长（服务点负责人） ',list:workerTitle},
  {name:'护士 ',list:workerTitle},
  {name:'照护员',list:['无资质 ', '初级养老护理员 ', '中级养老护理员  ', '高级养老护理员 ',  '医疗照护员',  '健康照护员',]},
  {name:'康复师 ',list:workerTitle},
  {name:'其他人员',list:workerTitle},]



const eventLvs = ['未遂/隐患事件 ', '一般不良事件 ', '严重不良事件']
const eventResult = [
  '死亡 ',
  '遗留严重后遗症影响日常生活 ',
  '基本好转，遗留部分症状，不影响日常生活 ',
  '身体或心理状态恢复正常 ',
  '设施设备恢复正常 ',
  '转由第三方处理 07其他',
]
const eventReason = [
  {name:'用户原因',list:['肢体功能不佳' ,  '认知障碍' , '突发疾病原因',
    '原有疾病控制不佳' ,  '视力下降' ,  '听力下降'  , '鞋袜不适合',  '用户之间的原因如肢体冲突、言语纠纷等',  '其他'] },
  {name:'服务者原因',list:['知识和技能缺陷' ,   '未按照操作规范执行'  ,  '经验和意识缺乏' ,    '沟通能力不足',   '其他'] },
  {name:'环境及设施原因',list:['地面湿滑'   ,'地面摆放凌乱' ,  '地面有高差'  , '缺少扶手' , '缺少辅具' , '不安全、不适合的辅具' ,
    '设备故障'  ,'环境温差大',  '其他']},
  {name:'管理原因',
    list:['地面湿滑',   '地面摆放凌乱' , '地面有高差' , '缺少扶手'  , '缺少辅具' ,  '不安全、不适合的辅具'  , '设备故障'  , '环境温差大' ,  '其他']}]

const followUpl = [
  '对用户进行持续观察和心理疏导 ',
  '服务人员培训和演练（含知识、技能 规范、预案等）',
  '修理、更换硬件设施设备 ',
  '补充辅具、用品等物料 ',
  '就医治疗调整用药 ',
  '加强管理和管理规范的培训执行 ',
]
const qcUserType = [
  {name:'护士 ',list:workerTitle},
  {name:'照护员',list:['无资质 ', '初级养老护理员 ', '中级养老护理员  ', '高级养老护理员 ',  '医疗照护员',  '健康照护员',]},
  {name:'康复师 ',list:workerTitle},
  {name:'其他人员',list:workerTitle},]

const qcUserTitle = [
  '无职称 ',
  '初级职称',
  '中级职称',
  '高级职称',
]

const preventives = [
  '定期开展培训和演练 ',
  '日常质量检查（软硬件、服务规范、管理规范等） ',
  '用户状态时时全员了解 ',
  '其他',
]
const preventiveManageTitle = ['无职称', '初级职称', '中级职称', '高级职称']
const preventiveManagePost = ['护士', '照护员', '康复师', '其他']
const accidentLiability = [
  '无责，非事故；',
  '次责事故',
  '主责事故',
]

//数据看板
const dataBoard =[
  {
    type:'yanglao',
    name:'机构类型',
    data:{
      x:domainTypes,
      y:[29, 69, 20, 50, 25, 10, 59],
    }
  },
  {
    type:'place',
    name:'发生场所',
    data:{
      x:['固定场所','移动场所'],
      y:[115,147],
    }
  },
  {
    type:'scene',
    name:'场景',
    data:{
      x:eventScene,
      y:[28,19, 58,12, 12, 52,30, 9,42],
    }
  },
  {
    type:'scene',
    name:'症状',
    data:{
      x:symptoms,
      y:[23, 20,19,15, 23, 27,18, 26,15, 23,8,14,13,18],
    }
  },
  {
    type:'scene',
    name:'事件分级',
    data:{
      x:eventLvs,
      y:[140,103, 19],
    }
  },
  {
    type:'scene',
    name:'事件原因',
    data:{
      x:eventReason.map(val=>{return val.name}),
      y:[140, 65, 44,13],
    }
  },
]




export default {
  domainTypes,
  domains,
  ages,
  userTypes,
  userStates,
  userStatesMemo,
  placeTypes,
  eventTimes,
  eventScene,
  eventType,
  symptoms,
  disposes,
  workerTypes,
  workerTitle,
  ages1,
  eventLvs,
  eventResult,
  eventReason,
  followUpl,
  qcUserType,
  qcUserTitle,
  preventives,
  preventiveManageTitle,
  preventiveManagePost,
  accidentLiability
}

export {
  dataBoard
}
