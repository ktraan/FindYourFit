const router = require("express");
const passport = require("passport");

router.post('/login', passport.authenticate("local", {
    successRedirect: '/about',
    failureRedirect: '/',
}))


module.exports = router;
