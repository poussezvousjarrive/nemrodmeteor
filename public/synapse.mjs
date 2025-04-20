import Button from "./synapse-button.mjs";
import Session from "./synapse-session.mjs";

export const $ = (selector) => document.querySelector(selector);
export let synapse = new Session("https://api.connectome.fr");
export let button = new Button({
  selector: "#synapse-login",
  host: "https://api.connectome.fr"
});

export async function commonConnectedListener(user) {
  console.log("connected");
  button.connected(user); // update the login button

  $("#bonjour").innerHTML = `Bonjour ${user.fullname}`
}

synapse.on("updated", (user) => {

  // update the display with new user data

});

synapse.on("logout", (user) => {

  // reset the button to "Connect with Synapse"
  button = new Button("#synapse-login");

});

synapse.update();