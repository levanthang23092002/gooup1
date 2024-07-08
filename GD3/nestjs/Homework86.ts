// File: user.ts
class User {
  private profile: UserProfile;

  constructor() {
    this.profile = new UserProfile(this);
  }

  getProfile() {
    return this.profile;
  }
}

export { User };

// File: userProfile.ts
class UserProfile {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}

export { UserProfile };