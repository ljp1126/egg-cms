'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
  async index() {
    // this.ctx.body = '权限列表'
    await this.ctx.render('admin/access/index');
  }

  async add() {
    // this.ctx.body = '权限增加'
    await this.ctx.render('admin/access/add');
  }

  async edit() {
    // this.ctx.body = '权限编辑'
    await this.ctx.render('admin/access/edit');
  }

  async delete() {
    this.ctx.body = '权限删除'
  }
}

module.exports = AccessController;
