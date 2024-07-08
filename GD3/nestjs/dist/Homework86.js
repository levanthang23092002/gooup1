"use strict";
exports.__esModule = true;
exports.UserProfile = exports.User = void 0;
// File: user.ts
var User = /** @class */ (function () {
    function User() {
        this.profile = new UserProfile(this);
    }
    User.prototype.getProfile = function () {
        return this.profile;
    };
    return User;
}());
exports.User = User;
// File: userProfile.ts
var UserProfile = /** @class */ (function () {
    function UserProfile(user) {
        this.user = user;
    }
    UserProfile.prototype.getUser = function () {
        return this.user;
    };
    return UserProfile;
}());
exports.UserProfile = UserProfile;
