
var classInfo = [
  { "time": "1-2节", "classname": 'awdaw',"classroom":'A201' },
  { "time": "3-4节", "classname": 'awdawd', "classroom": '' },
  { "time": "5", "classname": '', "classroom": '' },
  { "time": "5-6节", "classname": '多媒体通讯技术', "classroom": '' },
  { "time": "7-8节", "classname": '', "classroom": '' },
  { "time": "5", "classname": '', "classroom": '' },
  { "time": "9-11节", "classname": '', "classroom": '' },
]

var WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

var currentWeek = WEEK[new Date().getDay()]

Page({
  data: {
    classInfo: classInfo,
    current_week: currentWeek,
    inputValue: '', //用于显示输入语句
    searchinput: '', //用户输入的查询语句
  }
})