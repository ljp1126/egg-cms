'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render('index/home.nj', {
      username: '我是nj模板引擎'
    })
  }
}

module.exports = HomeController;
