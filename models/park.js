const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (species) {
  for (const dinosaur of this.dinosaurCollection) {
    if (dinosaur.species === species) {
      const index = this.dinosaurCollection.indexOf()
      this.dinosaurCollection.splice(index, 1);
      return;
    }
  }
};

Park.prototype.mostGuestsAttracted = function () {
  let foundDinosaur = this.dinosaurCollection[0];
  for (const dinosaur of this.dinosaurCollection) {
    if (dinosaur.guestsAttractedPerDay > foundDinosaur.guestsAttractedPerDay) {
      foundDinosaur = dinosaur;
    }
  }
  return foundDinosaur
};

Park.prototype.allDinosaursBySpecies = function (species) {
  const foundDinosaurs = []
  for (const dinosaur of this.dinosaurCollection) {
    if (dinosaur.species === species) {
      foundDinosaurs.push(dinosaur);
    }
  }
  return foundDinosaurs;
};

Park.prototype.totalVisitorsPerDay = function () {
  let total = 0;
  for (const dinosaur of this.dinosaurCollection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.totalVisitorsPerYear = function () {
  return this.totalVisitorsPerDay() * 365
};

Park.prototype.totalRevenuePerYear = function () {
  return this.totalVisitorsPerYear() * this.ticketPrice
};

module.exports = Park
