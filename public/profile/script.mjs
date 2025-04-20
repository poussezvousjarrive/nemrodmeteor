import { $, synapse, commonConnectedListener } from "../synapse.mjs";
import User from "../classes/User.mjs";
import Mission from "../classes/Mission.mjs";

synapse.on("connected", async (u) => {
  commonConnectedListener(u);
  const user = new User(u);
  const activity = user.activityReport;
  const missions = user.missions[0].title;
  const profile = user.profile;
  const city = user.city;
  const location = user.location;
  
  $("#bonjour").innerHTML = `Bienvenue ${user.syn_user.fullname} !`;
  if (profile == 0) $("#profile").innerHTML = `Profil : Scientist`;
  else $("#profile").innerHTML = `Profil : Adventurer`;
  $("#city").innerHTML = `Ville : ${city}`;
  $("#missions").innerHTML = `Missions : ${missions}`;

  $("#activity").innerHTML = `Activité : ${activity}`;

});