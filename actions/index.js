const userSchema = require("../models/userSchema");
const tenantSchema = require("../models/tenantSchema");
async function getTenantDataList(type, _page, name_like) {
    let count;
    if (_page) {
        let datalist = await tenantSchema.find({ type }, { _id: 0 });
        // this variable stores list of all tenant
        if (name_like !== " ") {
            const reg = new RegExp(name_like);
            datalist = datalist.filter((ele) => reg.test(ele.userid));
            // filter out userid which have name_like
        }
        count = Math.ceil(datalist.length / 10);
        // count total entries and have a round number for pagination.
        const start = (_page - 1) * 10;
        // calculate start of array to be sent according to page number.
        datalist = datalist.splice(start, 10);
        // array now contains list according to pagination.
        return { datalist, count };
    }
}

async function getTenantUserDataList(_page, name_like) {
    let count;
    if (_page) {
        let datalist = await userSchema.find({}, { _id: 0 });
        // this variable stores list of all tenant
        if (name_like !== " ") {
            const reg = new RegExp(name_like);
            datalist = datalist.filter((ele) => {
                return reg.test(ele.userName);
            });
            // filter out userid which have name_like
        }
        count = Math.ceil(datalist.length / 10);
        // count total entries and have a round number for pagination.
        const start = (_page - 1) * 10;
        // calculate start of array to be sent according to page number.
        datalist = datalist.splice(start, 10);
        // array now contains list according to pagination.

        return { datalist, count };
    }
}

async function updateTenant(params, body) {
    return tenantSchema.findOneAndUpdate(params, body);
}

function loginTenant(body) {
    return tenantSchema.find(body, { _id: 0 });
}

function deleteTenant(params) {
    return tenantSchema.findOneAndDelete(params);
}

async function addTenant(body) {
    let test = await tenantSchema.find({}).sort({ _id: -1 }).limit(1);
    body.id = test[0].id + 1;
    let tmp = new tenantSchema(body);
    return tmp.save();
}
// tenant user
async function addTenantUser(body) {
    let test = await userSchema.find({}).sort({ _id: -1 }).limit(1);
    body = {
        id: test[0].id + 1,
        userName: body.username,
        email: body.email,
        tenantName: body.tenantname,
        createdDateTime: "Mar 01 2022 11:51:39",
        isDeleted: false,
        isActive: true,
    };
    let tmp = new userSchema(body);
    return tmp.save();
}

async function updateTenantUser(params, body) {
    return userSchema.findOneAndUpdate(params, body);
}


async function deleteTenantUser(params) {
    return userSchema.findOneAndDelete(params);
}

module.exports = { getTenantDataList, getTenantUserDataList, updateTenant, loginTenant, deleteTenant, addTenant, addTenantUser, updateTenantUser, deleteTenantUser }
