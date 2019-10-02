const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
let result = this.journeys.map((journey) => {
  return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
let result = this.journeys.map((journey) => {
  return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter((journey) => {
    if (journey.transport === transport) {
      return journey
    }
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter((journey) => {
    if (journey.distance > minDistance) {
      return journey;
    }
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let result = this.journeys.map((journey) => {
    return journey.transport;
  });
  return result;
};

module.exports = Traveller;
