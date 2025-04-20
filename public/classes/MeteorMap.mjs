export class MeteorMap {
  constructor(user) {
    this.map = L.map("map");
    this.map.setView(user.location, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  }

  addCircle(pos, rad) {
    return L.circle(pos, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: rad
    }).addTo(map);
  }

  addMeteor(met) {
    let circle = this.addCircle(met.pos, met.incert);
    return L.popup()
      .setLatLng(met.pos)
      .setContent(met.popupText())
      .openOn(circle);
  }
}