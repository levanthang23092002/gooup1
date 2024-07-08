// File: mediator.ts
class Mediator {
    private user: User;
    private userProfile: UserProfile;
  
    setUser(user: User) {
      this.user = user;
    }
  
    setUserProfile(userProfile: UserProfile) {
      this.userProfile = userProfile;
    }
  
    getUserProfile() {
      return this.userProfile;
    }
  
    getUser() {
      return this.user;
    }
  }
  
  // File: user.ts
  import { Mediator } from './mediator';
  
  class User {
    private mediator: Mediator;
  
    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  
    getProfile() {
      return this.mediator.getUserProfile();
    }
  }
  
  // File: userProfile.ts
  import { Mediator } from './mediator';
  
  class UserProfile {
    private mediator: Mediator;
  
    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  
    getUser() {
      return this.mediator.getUser();
    }
  }

  const mediator = new Mediator();
  