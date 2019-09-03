const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park1;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 60);
    dinosaur3 = new Dinosaur('stegosaurus', 'herbivore', 30);
    park1 = new Park ('Dinosaur Planet', 30, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function () {
    assert.strictEqual(park1.name, 'Dinosaur Planet');
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park1.ticketPrice, 30);
  });

  it('should have a collection of dinosaurs', function () {
    actual = park1.dinosaurCollection
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to add a dinosaur to its collection', function () {
    let dinosaur4 = new Dinosaur('triceratops', 'herbivore', 25);
    park1.addDinosaur(dinosaur4)
    actual = park1.dinosaurCollection.length
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park1.removeDinosaur('velociraptor')
    actual = park1.dinosaurCollection.length
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    actual = park1.mostGuestsAttracted()
    assert.deepStrictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    let dinosaur5 = new Dinosaur('velociraptor', 'carnivore', 29);
    park1.addDinosaur(dinosaur5);
    actual = park1.allDinosaursBySpecies('velociraptor');
    assert.strictEqual(actual.length, 2);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
