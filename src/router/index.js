import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// import Present from '@/components/Present'
// import Rank from '@/components/Rank'
import Home from '@/components/home/Index'
import Intro from '@/components/Intro'
import YbtIntro from '@/components/YbtIntro'
import Question from '@/components/Question'
import YbtQuestion from '@/components/YbtQuestion'
import ForecastYbt from '@/components/ForecastYbt'
import Plan from '@/components/Plan'
// import Nindex from '@/components/Nindex'
import Team from '@/components/Team'
// import Rankn from '@/components/Rankn'
import Activities from '@/components/Activities'
import Usercase from '@/components/Usercase'
import PresentUpgrad from '@/components/present/Index.vue'
import RankList from '@/components/rank/Index.vue'
import FlmIntro from '@/components/ybtth/Intro.vue'
import FcRank from '@/components/fcrank/Index'
import CqsTh from '@/components/cqsth/Index'
import CqsThQa from '@/components/questions/CqsThQa'
Vue.use(Router)

const router = new Router({ // 回滚
      scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      },
      routes: [{
          path: '/ybtth/:id',
          name: 'flmintro',
          component: FlmIntro,
          meta: {
            txt: '营销活动'
          }
        },
        {
          path: '/fcrank',
          name: 'fcrank',
          component: FcRank,
          meta: {
            txt: '活动风云榜'
            }
          },
          {
            path: '/cqsthqa/:id',
            name: 'cqsthqa',
            component: CqsThQa,
            meta: {
              txt: '调查问卷'
              }
            },
          {
            path: '/cqsth/:id',
            name: 'cqsth',
            component: CqsTh,
            meta: {
              txt: '王牌组合'//常青树特惠版
              }
            },
          {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
              txt: '我要推介'
            }
          },
          {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
              txt: '抽奖回执'
            }
          },
          {
            path: '/intro/:id',
            name: 'intro',
            component: Intro,
            meta: {
              txt: '产品介绍'
            }
          },
          {
            path: '/ybtintro/:id',
            name: 'ybtintro',
            component: YbtIntro,
            meta: {
              txt: '产品介绍'
            }
          },
          {
            path: '/question/:id',
            name: 'question',
            component: Question,
            meta: {
              txt: '少儿成长调查问卷'
            }
          },
          {
            path: '/ybtquestion/:id',
            name: 'ybtquestion',
            component: YbtQuestion,
            meta: {
              txt: '少儿成长调查问卷'
            }
          },
          {
            path: '/present/:id',
            name: 'present',
            component: PresentUpgrad,
            meta: {
              txt: '抽奖'
            }
          },
          {
            path: '/present/:id/:pid',
            name: 'presents',
            component: PresentUpgrad,
            meta: {
              txt: '抽奖'
            }
          },
          {
            path: '/rank/:id',
            name: 'rank',
            component: RankList,
            meta: {
              txt: '排行榜'
            }
          },
          {
            path: '/rank',
            name: 'ranks',
            component: RankList,
            meta: {
              txt: '排行榜'
            }
          },
          // {
          //   path: '/rankn',
          //   name: 'rankn',
          //   component: Rankn,
          //   meta: {
          //     txt: '排行榜'
          //   }
          // },
          {
            path: '/forecastybt',
            name: 'forecastybt',
            component: ForecastYbt,
            meta: {
              txt: '家庭保障DIY体验'
            }
          },
          {
            path: '/planbook/:salesmanid/:luck_code',
            name: 'planbook',
            component: Plan,
            meta: {
              txt: '计划书详情'
            }
          },
          {
            path: '/index',
            name: 'nindex',
            component: Index,
            meta: {
              txt: '抽奖回执'
            }
          },
          {
            path: '/team',
            name: 'team',
            component: Team,
            meta: {
              txt: '团队获客'
            }
          },
          {
            path: '/activities',
            name: 'activities',
            component: Activities,
            meta: {
              txt: '营销活动'
            }
          },
          {
            path: '/usercase',
            name: 'usercase',
            component: Usercase,
            meta: {
              txt: '客户赔付案例'
            }
          },
        ]
      });

    router.beforeEach((to, from, next) => {
      if (to.meta.txt) {
        document.title = to.meta.txt;
        // if(from.meta.txt&&from.meta.txt!='产品介绍'&&to.meta.txt=='产品介绍'){
        //   window.location.reload();
        // }
      }
      next();
    });
    // listener.back(router);
    export default router;
