Page({
  data:{
    goods:[
      {id:101, name:'参芝阿胶玉灵膏（示例）', net:'55g×4瓶/盒', brief:'强调口感/食用节律/人群场景等信息，不做疾病功效表述。'},
      {id:102, name:'草本日常滋养膏（示例）', net:'75g/瓶', brief:'以风味、原料来源与日常食用建议为主，合规展示。'}
    ]
  },
  onShareAppMessage(){
    return { title:'精选商品（占位）', path:'/pages/goods/index' }
  }
})
