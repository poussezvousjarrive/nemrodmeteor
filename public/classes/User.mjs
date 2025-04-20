import Mission from "./Mission.mjs";

export const Profile = Object.freeze({
  Scientist: 0, 
  Adventurer: 1
});

export default class User {
  constructor(user) {
    this.syn_user = user;
    this.location = null;
    this.activityReport = [];
    this.profile = Profile.Scientist;
    this.city = "Nice";
    this.missions = [new Mission()];
  }

  fetchPosition() {
    Geolocation.getCurrentPosition(this.#posSuccess, this.#posError);
  }

  #posSuccess(pos) {
    this.location = pos;
  }

  #posError(err) {
    console.log(err);
    this.location = [43.7, 7.25]; // Nice
  }
}