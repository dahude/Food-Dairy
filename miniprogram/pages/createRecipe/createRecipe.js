// miniprogram/pages/createRecipe/createRecipe.js
Page({
  data: {
    img_url: [],
    img_url_upload: [],
    content: '',
    weather: 'w3',
    mood: 'm1',
    title:'',
    ingredient:'',
    cuisine:'',
    w1_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-多云.png',
    w2_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-小雨.png',
    w3_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/晴.png',
    w4_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-暴雨.png',
    w5_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-闪电.png',
    w6_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-雪.png',
    m1_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/开心.png',
    m2_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/-难过.png',
    m3_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/-冷漠.png',
    m4_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/-愤怒.png'
  },
  onLoad: function (options) {

  },
  resetWeather: function(){
    this.setData({
      w1_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-多云.png',
      w2_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-小雨.png',
      w3_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-晴.png',
      w4_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-暴雨.png',
      w5_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-闪电.png',
      w6_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/-雪.png'
    })
  },
  resetMood: function () {
    this.setData({
      m1_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/-开心.png',
      m2_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/-难过.png',
      m3_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/-冷漠.png',
      m4_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/-愤怒.png'
    })
  },
  selectMood: function(e){
    this.resetMood();
    switch (e.target.id) {
      case 'm1': this.setData({ m1_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/开心.png' }); break;
      case 'm2': this.setData({ m2_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/难过.png' }); break;
      case 'm3': this.setData({ m3_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/冷漠.png' }); break;
      case 'm4': this.setData({ m4_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/愤怒.png' }); break;
      default: this.setData({ m1_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/开心.png' });
    }
    this.setData({
      mood: e.target.id
    });
  },
  selectWeather: function(e){
    this.resetWeather();
    switch(e.target.id){
      case 'w1': this.setData({ w1_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/多云.png'});break;
      case 'w2': this.setData({ w2_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/小雨.png'});break;
      case 'w3': this.setData({ w3_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/晴.png'});break;
      case 'w4': this.setData({ w4_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/暴雨.png'});break;
      case 'w5': this.setData({ w5_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/闪电.png'});break;
      case 'w6': this.setData({ w6_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/雪.png'});break;
      default: this.setData({ w3_url: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/晴.png'});
    }
    this.setData({
      weather: e.target.id
    });
  },
  input: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  ingredientInput: function (e) {
    this.setData({
      ingredient: e.detail.value
    })
  },
  cuisineInput: function (e) {
    this.setData({
      cuisine: e.detail.value
    })
  },
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 3, // 默认3  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {

        if (res.tempFilePaths.length > 0) {

          //图如果满了3张，不显示加图
          if (res.tempFilePaths.length == 3) {
            that.setData({
              hideAdd: 1
            })
          } else {
            that.setData({
              hideAdd: 0
            })
          }

          //把每次选择的图push进数组
          let img_url = that.data.img_url;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            img_url.push(res.tempFilePaths[i])
          }
          that.setData({
            img_url: img_url
          })

        }

      }
    })
  },
  //发布按钮事件
  //TODO: save data into database, upload images into CDN
  send: function () {
    var that = this;
    var user_id = wx.getStorageSync('userid');
    wx.showLoading({
      title: '上传中',
    });
    that.img_upload();
    wx.hideLoading();
  },
  //存储数据到数据库
  //TODO: Save realization
  save_data: function() {
    var moodDes = '开心';
    switch(this.data.mood){
      case "m1": moodDes = '开心';break;
      case "m2": moodDes = '难过';break;
      case "m3": moodDes = '冷漠';break;
      case "m4": moodDes = '愤怒';break;
    };
    var weatherDes = '晴';
    switch(this.data.weather){
      case "w1": weatherDes = '多云';break;
      case "w2": weatherDes = '小雨';break;
      case "w3": weatherDes = '晴';break;
      case "w4": weatherDes = '暴雨';break;
      case "w5": weatherDes = "闪电";break;
      case "w6": weatherDes = "雪";break;
    }
    wx.cloud.callFunction({
      name: 'login',
    }).then(res =>{
      const db = wx.cloud.database();
      const recipe = db.collection('Recipe');
      var openid = res.result.openid;
      recipe.add({
        data:{
        // _openid: openid,
        imgs: this.data.img_url_upload, 
        ingredients:this.data.ingredient,
        moodUrl: 'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/心情图标/'+moodDes+'.png',
        recipeContent: this.data.content,
        recipeTitle: this.data.title,
        score: {avgScore:0,numOfUser:0},
        weatherUrl:'cloud://fooddair-52e7ba.666f-fooddair-52e7ba/天气图标/'+weatherDes+'.png'
        }
      }).then(res => { }).catch(console.error);
    }).catch(console.error);
  },
  //图片上传
  //TODO
  img_upload: function () {
    let that = this;
    let img_url = that.data.img_url;
    console.log(img_url);
    let img_url_ok = [];
    //由于图片只能一张一张地上传，所以用循环
    for (let i = 0; i < img_url.length; i++) {
      wx.cloud.uploadFile({
        cloudPath: '食谱图片/' + Date.parse(new Date())+i+'.png',
        filePath: img_url[i],
        success: res=>{
          console.log(i);
          img_url_ok.push(res.fileID);
          if (i==img_url.length-1){
            this.setData({
              img_url_upload: img_url_ok
            });
            this.save_data();
            console.log(img_url_ok);
          }
        },
        fail: console.error
      });
    };
  }
})
