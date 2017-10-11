import Juicer from "local-Juicer";
import $ from "local-Zepto";
import Loading from "local-Loading";
const Tpl = require('./tpl/index.tpl');
const sensors = require('widgets/sensors/index');
require('widgets/csslib/base.css');
require('./sass/index.scss');
const util = require('widgets/util/index');
const guidePageDetail = {
	guidePageHead:require('./images/head.jpg'),
	imgOne:require('./images/img1.jpg'),
	imgTwo:require('./images/img2.jpg'),
	imgThree:require('./images/img3.jpg'),
	imgFour:require('./images/img4.jpg'),
	imgFive:require('./images/img5.jpg'),
	imgSix:require('./images/img6.jpg')

};

class GuidePage {
	constructor(args) {
		this.wrap = $('#wrap');
		this.loading;
		this.init()
	}

	get loading() {
		this._loading = new Loading();
	}

	init() {
		this._loading.init();
		this.render();
	}

	render() {
		this.wrap.html(Juicer(Tpl, guidePageDetail));
		util._bindLazyLoadBg();
		this._loading.remove();
	}
}

new GuidePage();
