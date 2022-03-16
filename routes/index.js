const express = require('express');
const router = express.Router()
const {
    addTenant,
    deleteTenant,
    updateTenant,
    getTenantDataList,
    getTenantUserDataList,
    loginTenant,
    addTenantUser,
    updateTenantUser,
    deleteTenantUser
} = require('../actions');

router.post("/login", async (req, res) => {
    try {
        const { body } = req;
        const uniqueUser = await loginTenant(body);
        return res.status(200).json(uniqueUser);
    } catch (err) {
        return res.status(500).end();
    }
});

router.get("/tenant", async (req, res) => {
    try {
        const { type, _page, name_like } = req.query;
        const { datalist, count } = await getTenantDataList(
            type,
            _page,
            name_like
        );
        return res.status(200).json({ list: datalist, count: count });
    } catch (err) {
        return res.status(500).end();
    }
});

router.get("/tenant-user", async (req, res) => {
    try {
        const { _page, name_like } = req.query;
        const { datalist, count } = await getTenantUserDataList(
            _page,
            name_like
        );
        return res.status(200).json({ list: datalist, count: count });
    } catch (err) {
        return res.status(500).end();
    }
});

router.put("/tenant/:id", async (req, res) => {
    try {
        const { params, body } = req;
        await updateTenant(params, body);
        return res.status(200).end();
    } catch (err) {
        return res.status(500).end();
    }
});

router.post("/tenant", async (req, res) => {
    try {
        const { body } = req;
        await addTenant(body);
        return res.status(200).end();
    } catch (err) {
        return res.status(500).end();
    }
});

router.delete("/tenant/:id", async (req, res) => {
    try {
        const { params } = req;
        await deleteTenant(params);
        return res.status(200).end();
    } catch (err) {
        return res.status(500).end();
    }
});
// tenant user routes
router.post("/tenant-user", async (req, res) => {
    try {
        const { body } = req;
        await addTenantUser(body);
        return res.status(200).end();
    } catch (err) {
        return res.status(500).end();
    }
});

router.put("/tenant-user/:id", async (req, res) => {
    try {
        const { params, body } = req;
        await updateTenantUser(params, body);
        return res.status(200).end();
    } catch (err) {
        return res.status(500).end();
    }
});

router.delete("/tenant-user/:id", async (req, res) => {
    try {
        const { params } = req;
        await deleteTenantUser(params);
        return res.status(200).end();
    } catch (err) {
        return res.status(500).end();
    }
});

module.exports = router;