import Session from "./synapse-session.mjs";
import { MeteorMap } from "/classes/MeteorMap.mjs";
import { User } from "/classes/User.mjs";
import { $, synapse, button, commonConnectedListener } from "./synapse.mjs";

// Synapse

synapse.on("connected", (user) => {
  commonConnectedListener(user);
  $("#code-results").innerHTML = "Bienvenue sur Nemrod Meteor ! Votre objectif : trouver la météorite échouée dans les environs afin d'aider les scientifiques dans l'exploration de notre univers. Pour ce faire, munis-toi de ton avatar, scientifique si tu veux découvrir l'espace ou chasseur si tu rêves d'aventure. \nA chaque mission réalisée, tu gagneras des jetons synapse. Ainsi, tes efforts seront récompensés !"
});

// Button listeners
$("#test").addEventListener("click", async () => {
  window.location.href = "profile/index.html";

});

// Map
let map = null;
let user = null;
window.addEventListener("DOMContentLoaded", () => {
  user = new User(synapse.me());
  map = new MeteorMap(user);
  console.log(map);
});