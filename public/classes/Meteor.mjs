export class Meteor {
  constructor() {
    this.name = null;
    this.description = null;
    this.lat = null;
    this.long = null;
    this.found = false;
  }

  toPopupText() {
    let txt = `<b>Météorite</b> : ${this.name}\n \
      ${this.description}\n \
      Tombée le ${this.fallDate.toLocaleString()}\n`;
    if (this.found) txt += `Découverte le ${this.foundDate.toLocaleString()}`;
    return txt;
  }
}