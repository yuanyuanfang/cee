import Juicer from "local-Juicer";
import $ from "local-Zepto";
const Tpl = require('./tpl/index.tpl');
const sensors = require('widgets/sensors/index');
const util = require('widgets/util/index');
require('widgets/csslib/base.css');
require('./sass/index.scss');
const header = require('widgets/header/index.js');
const loading = require('widgets/loading/index');
const Alert = require('widgets/alert/index-new');
const apiConfig = require('widgets/apiConfig/index');
const ajax = require('widgets/ajax/index');
const identifyImg = {
     realName:require('./img/real-name.png'),
     car:require('./img/car.png'),
     job:require('./img/job.png'),
     right:require('./img/right.png'),
     process:require('./img/process.png'),
     check:require('./img/check.png'),
     standards:require('./img/standards.png')
}
class GuideIdentify {
	   constructor() {
	   	 this.cacheDom();
		 this.cacheData();
		 
	   }
	cacheData() {
		this.data = {
			identifyImg:identifyImg,
			queryObj: util.getQueryJson(),

		};
		this.data.guideId = (this.data.queryObj && this.data.queryObj.guideId) || '';

        if (!this.data.guideId) {
            loading._hide();
            let params = {
                msg: '司导Id错误'
            };
            let alert = new Alert(params);
            return;
        }

        this._getGuideData(rs => {
            this.data = $.extend(this.data, rs);
            console.log(this.data);
            this.renderUI();
            this.bindEvent();
        })
	}
	cacheDom() {
		this.dom = {
		    wrap: $('#wrap')
		}
	}
	bindEvent(){
		this.dom.wrap
            .on('click','.five-check-detail',function(){
                try {
                    window.javaObj.doAction(`{"t":"1","u":"${apiConfig.act}/h5/cactivity/guidePageDetail/index.html"}`)
                     //window.javaObj.doAction(`{"t":"1","u":"http://act.dev.huangbaoche.com:8080/h5/cactivity/guidePage/index.html"}`)
               } catch (e) {
                     window.location.href = `/h5/cactivity/guidePageDetail/index.html`;
                }
            })
	}
	renderUI() {
		this.dom.wrap.html(Juicer(Tpl, this.data));
	}
    _getGuideData(suc) {
        loading.init();
        let that = this;
        let param = {
            url: apiConfig.guideIdentify,
            data: { guideId: that.data.guideId},
            method: "GET",
            success: function (res) {
                loading._hide();
                if (res.status == 200) {
                    suc && suc(res.data);
                } else {
                    let params = {
                        msg: res.message,
                    };
                    let alert = new Alert(params);
                }
            },
            error: function () {
                loading._hide();
                let params = {
                    msg: '网络原因请求发送失败'
                };
                let alert = new Alert(params);
            }
        }
        ajax.sendRequest(param);
    }

}

new GuideIdentify();
