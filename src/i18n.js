import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    'en': {
      translations: {
        Name: "He (Mackenzie) Jiang",
        "home":"Home",
        "about":"About",
        "experience":"Experience",
        "projects":"Projects",
        "contact":"Contact",
        "Welcome to my site!": "Welcome to my site!",
        "I am Mackenzie, a software engineering master's student graduated from San Jose State University in December 2020.": "I am Mackenzie, a software engineering master's student graduated from San Jose State University in December 2020.",
        "I am looking for a full-time software development position starting 2021.": "I am looking for a full-time software development position starting 2021.",
        "Please feel free to ":"Please feel free to ",
        "email": "email",
        "me if you have any opportunities for me! Thank you!": "me if you have any opportunities for me! Thank you!",
        "view resume":"view resume",
        "Education & Work": "Education & Work",
        "demo": "Demo",
        "Software Development Internship": "Software Development Internship",
        "- Built the startup’s website from scratch in React with reusable components and dynamic components, boosting the number of daily active users by 3x.":"- Built the startup’s website from scratch in React with reusable components and dynamic components, boosting the number of daily active users by 3x.",
        "- Rendered the app with an Express server, decreased load time by 50% through code splitting.": "- Rendered the app with an Express server, decreased load time by 50% through code splitting.",
        "- Worked in pair to implement and debug API functions in Python to maneuver data in DynamoDB.": "- Worked in pair to implement and debug API functions in Python to maneuver data in DynamoDB.",
        "- Built IFTTT integration for front & back-end, achieved ~1000 applet runs in a month of publishing.": "- Built IFTTT integration for front & back-end, achieved ~1000 applet runs in a month of publishing.",
        "- Individually implemented a web app in Vue for tracking health device status for internal use.": "- Individually implemented a web app in Vue for tracking health device status for internal use.",
        "- Tracked 200 devices with Google PubSub and reflected real-time statuses on a dashboard; the company could catch & locate offline devices within less than an hour, which would take days to be noticed before.":
        "- Tracked 200 devices with Google PubSub and reflected real-time statuses on a dashboard; the company could catch & locate offline devices within less than an hour, which would take days to be noticed before.",
        "B.S University of California, Berkeley": "B.S University of California, Berkeley",
        "Cognitive Science (concentration in Computer Science), Japanese Language and Literature": "Cognitive Science (concentration in Computer Science), Japanese Language and Literature",
        "M.S San Jose State University": "M.S San Jose State University",
        "Software Engineering": "Software Engineering",
        "Back to top": "Back to top",
        "Skills": "Skills",
        "1 - Programming": "1 - Programming",
        "2 - Web Development": "2 - Web Development",
        "3 - Database": "3 - Database",
        "4 - Languages": "4 - Languages",
        "Chinese": "Chinese",
        "English": "English",
        "Japanese - JLPT N1 certified": "Japanese - JLPT N1 certified",
        "Let's Talk":"Let's Talk",
        "Looking for full-time software development opportunities.":"Looking for full-time software development opportunities.",
        "LinkedIn": "LinkedIn",
        "Portfolio": "Portfolio",
        "Spontit Website": "Spontit Website",
        "This video provides a brief walkthrough and introduces some features of Spontit's website implemented by Mackenzie.": "This video provides a brief walkthrough and introduces some features of Spontit's website implemented by Mackenzie.",
        "Technologies": "Technologies",
        "Bus Location Tracker":"Bus Location Tracker",
        "- Individually designed and created a bus location tracking application in React with transportation data from 511.org API, showing real time bus locations on Google Maps and speed statistics with Victory charts.":
        "- Individually designed and created a bus location tracking application in React with transportation data from 511.org API, showing real time bus locations on Google Maps and speed statistics with Victory charts.",
        "Url Shortener": "Url Shortener",
        "- Individually designed and created an app in Node.JS that converts an inputted long url to a shorter url.":
        "- Individually designed and created an app in Node.JS that converts an inputted long url to a shorter url.",
        "Repo":"Repo",
        "Smart Sensor Dashboard":"Smart Sensor Dashboard",
        "- Led a team of 4 to create a Vue dashboard to display sensor data stored in MongoDB.":
        "- Led a team of 4 to create a Vue dashboard to display sensor data stored in MongoDB.",
        "Smart Coffee Maker": "Smart Coffee Maker",
        "Smart Coffee Maker is a web application simulating coffee ordering and customization activities from multiple clients.":
        "Smart Coffee Maker is a web application simulating coffee ordering and customization activities from multiple clients.",
        "The web client, java client, and server implementations follow the LWM2M Protocol.":"The web client, java client, and server implementations follow the LWM2M Protocol.",
        "All-in-One Marketplace":"All-in-One Marketplace",
        "All-in-One Marketplace is a group project. We created an online marketplace that supports user registration, review/rating submission, mostly/recently viewed tracking on multiple company websites.":
        "All-in-One Marketplace is a group project. We created an online marketplace that supports user registration, review/rating submission, mostly/recently viewed tracking on multiple company websites.",
        "View demo on Youtube": "View demo on Youtube",
      }
    },
    'zh-CN': {
      translations: {
        Name: "姜和",
        "home":"主页",
        "about":"关于",
        "experience":"相关经历",
        "projects":"个人项目",
        "contact":"联系方式",
        "Welcome to my site!": "欢迎来到我的个人网站！",
        "I am Mackenzie, a software engineering master's student graduated from San Jose State University in December 2020.": "我叫姜和，2020年12月于圣何塞州立大学获得软件工程硕士学位。",
        "I am looking for a full-time software development position starting 2021.": "我的求职意向为软件开发，计划2021年入职。",
        "Please feel free to ": "如果您认为有适合我的开放岗位，可以通过",
        "email": "邮件",
        "me if you have any opportunities for me! Thank you!": "联系我, 谢谢！",
        "view resume": "阅读简历",
        "Education & Work": "教育背景及工作经历",
        "demo": "视频演示",
        "Software Development Internship": "软件开发实习生",
        "- Built the startup’s website from scratch in React with reusable components and dynamic components, boosting the number of daily active users by 3x.":
        "- 帮助初创公司从头建立网站，运用React编写可再用组件，动态组件等，提升日活跃用户数量至3倍。",
        "- Rendered the app with an Express server, decreased load time by 50% through code splitting.": 
        "- 用Express呈现网站，通过代码拆分等方式减少了50%运行速度。",
        "- Worked in pair to implement and debug API functions in Python to maneuver data in DynamoDB.": 
        "- 与小组合作开发并调试后端Python应用程序接口，并操作DynamoDB数据",
        "- Built IFTTT integration for front & back-end, achieved ~1000 applet runs in a month of publishing.":
        "- 独立开发了公司IFTTT服务的前后端，于发布一个月内达到约1000次运行量",
        "- Individually implemented a web app in Vue for tracking health device status for internal use.":
        "- 用Vue独立创建了一个网站追踪健康仪器状态，供公司内部使用。",
        "- Tracked 200 devices with Google PubSub and reflected real-time statuses on a dashboard; the company could catch & locate offline devices within less than an hour, which would take days to be noticed before.":
        "- 运用Google PubSub追踪200台仪器，并将实时状态更新在概要面板上。可在一小时内捕捉并定位仪器异常，以往需要几天甚至更久才能发现。",
        "B.S University of California, Berkeley": "加州伯克利大学 学士学位",
        "Cognitive Science (concentration in Computer Science), Japanese Language and Literature": "认知科学（主修领域：计算机科学）以及日语双专业",
        "M.S San Jose State University": "圣何塞州立大学 硕士学位",
        "Software Engineering": "软件工程专业",
        "Back to top": "回到顶部",
        "Skills": "技能",
        "1 - Programming": "1. 编程语言",
        "2 - Web Development": "2. 网页开发",
        "3 - Database": "3. 数据库",
        "4 - Languages": "4. 语言",
        "Chinese": "汉语",
        "English": "英语",
        "Japanese - JLPT N1 certified": "日语（日本语能力考试N1合格）",
        "Chinese Xiang dialect": "汉语湘方言",
        "Let's Talk": "和我联系",
        "Looking for full-time software development opportunities.": "求职意向：全职软件开发",
        "LinkedIn": "领英",
        "Portfolio": "作品集",
        "Spontit Website": "Spontit 网站",
        "This video provides a brief walkthrough and introduces some features of Spontit's website implemented by Mackenzie.":
        "以下视频简单演练了Spontit网站，以及姜和实现的一些网站功能。",
        "Technologies": "技术",
        "Bus Location Tracker": "公交车实时定位",
        "- Individually designed and created a bus location tracking application in React with transportation data from 511.org API, showing real time bus locations on Google Maps and speed statistics with Victory charts.":
        "- 独自设计并创建了公交车实时定位的React应用， 调取了511.org的公交数据，显示公交车实时位置于谷歌地图上，并用Victory图表展示公交车速度统计。",
        "Url Shortener": "链接缩短服务",
        "- Individually designed and created an app in Node.JS that converts an inputted long url to a shorter url.":
        "- 独自设计并创建了一个可以将用户输入的长链接转化为短链接的Node.JS应用。",
        "Repo": "源码库",
        "Smart Sensor Dashboard": "传感器概要面板",
        "- Led a team of 4 to create a Vue dashboard to display sensor data stored in MongoDB.":
        "- 领导了四人团队，共同完成了一个从MongoDB调取传感器数据的Vue概要面板。",
        "Smart Coffee Maker": "智能咖啡机",
        "Smart Coffee Maker is a web application simulating coffee ordering and customization activities from multiple clients.":
        "智能咖啡机是一个可以接受多种请求的网页应用，模拟了咖啡点单和定制流程。",
        "The web client, java client, and server implementations follow the LWM2M Protocol.":
        "网络客户端，Java客户端，和服务器的结构遵从了LWM2M框架。",
        "All-in-One Marketplace":"网上集市",
        "All-in-One Marketplace is a group project. We created an online marketplace that supports user registration, review/rating submission, mostly/recently viewed tracking on multiple company websites.":
        "网上集市是一个小组合作的项目。我们创建的集市支持用户注册，评分/评论提交，多个商店的最常/最近浏览商品。",
        "View demo on Youtube": "前往YouTube观看视频",
      }
    },
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;