Page({
  data:{
    list:[
      {id:1, tag:'科普', readTime:2, title:'什么是“药食同源”？', desc:'介绍概念与历史渊源，强调日常饮食视角与合规提示（不涉及疾病功效）。'},
      {id:2, tag:'食用建议', readTime:3, title:'如何进行7天打卡式日常滋养', desc:'以作息与饮食搭配为核心，说明用量示例与注意事项，避免夸大表述。'},
      {id:3, tag:'注意事项', readTime:2, title:'适宜与不适宜人群说明', desc:'举例常见人群的注意点；建议个体差异需结合自身情况，必要时咨询专业人士。'}
    ]
  },
  onShareAppMessage(){
    return { title:'日常滋养科普合辑', path:'/pages/article/index' }
  }
})
