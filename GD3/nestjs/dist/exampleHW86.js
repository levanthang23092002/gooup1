"use strict";
exports.__esModule = true;
// File: mediator.ts
var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    Mediator.prototype.setUser = function (user) {
        this.user = user;
    };
    Mediator.prototype.setUserProfile = function (userProfile) {
        this.userProfile = userProfile;
    };
    Mediator.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    Mediator.prototype.getUser = function () {
        return this.user;
    };
    return Mediator;
}());
var User = /** @class */ (function () {
    function User(mediator) {
        this.mediator = mediator;
    }
    User.prototype.getProfile = function () {
        return this.mediator.getUserProfile();
    };
    return User;
}());
var UserProfile = /** @class */ (function () {
    function UserProfile(mediator) {
        this.mediator = mediator;
    }
    UserProfile.prototype.getUser = function () {
        return this.mediator.getUser();
    };
    return UserProfile;
}());
var mediator = new Mediator();
