const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurCollection = dinosaurCollection
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur)
};

Park.prototype.removeDinosaur = function (species) {
  for (dinosaur of this.dinosaurCollection) {
    if (dinosaur.species === species) {
      const index = this.dinosaurCollection.indexOf()
      this.dinosaurCollection.splice(index, 1)
      return
    }
  }
};

module.exports = Park
