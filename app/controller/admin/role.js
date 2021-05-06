'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async index() {
    // this.ctx.body = '角色列表'
    await this.ctx.render('admin/role/index');
  }

  async add() {
    // this.ctx.body = '角色增加'
    await this.ctx.render('admin/role/add');
  }

  async edit() {
    // this.ctx.body = '角色编辑'
    await this.ctx.render('admin/role/edit');
  }

  async delete() {
    this.ctx.body = '角色删除'
  }
}

module.exports = RoleController;
