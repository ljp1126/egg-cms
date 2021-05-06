// 父类
'use strict';

const Controller = require('egg').Controller;
var svgCaptcha = require('svg-captcha');

class BaseController extends Controller {
  async success(redirectUrl) {    
    await this.ctx.render('admin/public/success',{
      redirectUrl:redirectUrl
    });
  }

  async error(redirectUrl) {    
    await this.ctx.render('admin/public/error',{
      redirectUrl:redirectUrl
    });

  }

  async verify(redirectUrl) {
    const { ctx } = this

    var captcha = await this.service.tools.captcha();  //服务里面的方法

    ctx.response.type = 'image/svg+xml';   /*指定返回的类型*/

    ctx.body=captcha.data;      /*给页面返回一张图片*/
  }
}

module.exports = BaseController;
