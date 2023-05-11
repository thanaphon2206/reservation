const mongoose = require('mongoose');
const moment = require('moment-timezone');
const jwtSimple = require('jwt-simple');
const { jwt } = require('../config/vars');
const ObjectId = require('mongoose').Types.ObjectId

const role = ['CEO', 'HR', 'MANAGER', 'LEADER', 'MEMBER']

const userSchema = new mongoose.Schema({
  empId: { type: String, unique: true },
  firstname: { type: String, require: true},
  lastname: { type: String, unique: true, require: true},
  middlename: { type: String, require: true},
  firstname_en: { type: String },
  lastname_en: { type: String },
  middlename_en: { type: String },
  nickname: { type: String },
  email: {type: String, unique: true, require: true},
  password: { type: String, require: true },
  gender: { type: String, require: true },
  role: { type: String, enum: role, default: 'MEMBER' },
  company: { type: String, require: true},
  companyCode: { type: String, require: true},
  department: { type: String },
  position: { type: String },
  startDate: {type: String },
  createDate: {type: Date, default: Date.now},
  isApprove: { type: Boolean, default: false },
  ancestor: [{type: ObjectId, ref: 'hr-users'}],
  userPermission: [{ type: ObjectId, ref: 'groupusers' }],
  membergroup: [ { type: ObjectId, ref: 'groupusers' } ],
  phone: { type: String },
  under: { type: String },
  probation: { type: String },
  imagePath: { type: String },
  isApproveLeave: { type: Boolean, default: false },
  isApproveOT: { type: Boolean, default: false },
  level: { type: Number },
  registerToken: { type: String, unique: true },
  subpass: { type: String },
  parent: { type: ObjectId, require: true },
  ancestors: { type: Array, require: true },
});

userSchema.method({
  transform() {
    const user = this.toJSON();
    const transformed = {
      _id: user._id,
      empId: user.empId,
      firstname: user.firstname,
      lastname: user.lastname,
      middlename: user.middlename,
      email: user.email,
      gender: user.gender,
      company: user.company,
      companyCode: user.companyCode,
      department: user.department,
      position: user.position,
      startDate: user.startDate,
      createDate: user.createDate,
      role: user.role,
      isApprove: user.isApprove,
      ancestor: user.ancestor,
      userPermission: user.userPermission,
      phone: user.phone,
      nickname: user.nickname,
      under: user.under,
      probation: user.probation,
      membergroup: user.membergroup,
      imagePath: user.imagePath,
      isApproveLeave: user.isApproveLeave,
      isApproveOT: user.isApproveOT,
      level: user.level,
      registerToken: user.registerToken,
      subpass: this.subpass,
      parent: user.parent,
      ancestors: user.ancestors,
    };
    return transformed;
  },

  token() {
    const payload = {
      exp: moment().add(jwt.expirationInterval, 'minutes').unix(),
      iat: moment().unix(),
      _id: this._id,
      empId: this.empId,
      firstname: this.firstname,
      middlename: this.middlename,
      lastname: this.lastname,
      email: this.email,
      gender: this.gender,
      company: this.company,
      companyCode: this.companyCode,
      department: this.department,
      position: this.position,
      startDate: this.startDate,
      createDate: this.createDate,
      role: this.role,
      isApprove:this.isApprove,
      ancestor: this.ancestor,
      userPermission: this.userPermission,
      phone: this.phone,
      nickname: this.nickname,
      under: this.under,
      probation: this.probation,
      membergroup: this.membergroup,
      imagePath: this.imagePath,
      isApproveLeave: this.isApproveLeave,
      isApproveOT: this.isApproveOT,
      level: this.level,
      registerToken: this.registerToken,
      subpass: this.subpass,
      parent: this.parent,
      ancestors: this.ancestors
    };
    return jwtSimple.encode(payload, jwt.secret);
  },
});

userSchema.statics = {
  async findAndGenerateToken(email) {
    const data = await this.findOne({ email }).select('-__v');
    return { user: data.transform(), token: data.token() };
  },
};

module.exports = mongoose.model('hr-User', userSchema);
