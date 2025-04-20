import { $, synapse, commonConnectedListener } from "../synapse.mjs";
import User from "../classes/User.mjs";

synapse.on("connected", async (u) => {
  commonConnectedListener(u);
  const user = new User(u);
  const activity = user.activityReport;
  const missions = user.missions;
  const profile = user.profile;
  const city = user.city;
  const location = user.location;
  
  $("#bonjour").innerHTML = `Bienvenue ${user.syn_user.fullname} !`;
  if (profile == 0) $("#profile").innerHTML = `Profil : Scientist`;
  else $("#profile").innerHTML = `Profil : Adventurer`;
  $("#city").innerHTML = `Ville : ${city}`;
  $("#missions")

  $("#activity").innerHTML = `Activité : ${activity}`;

});