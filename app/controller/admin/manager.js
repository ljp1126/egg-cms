'use strict';

var BaseController = require('./base.js')

class ManagerController extends BaseController {
  async index() {
    // this.ctx.body = '管理员列表'
    await this.ctx.render('admin/manager/index', {
      username: '张三'
    })
  }

  async add() {
    // this.ctx.body = '管理员增加'
    await this.ctx.render('admin/manager/add')
  }

  async edit() {
    // this.ctx.body = '管理员编辑'
    await this.ctx.render('admin/manager/edit')
  }
}

module.exports = ManagerController;
