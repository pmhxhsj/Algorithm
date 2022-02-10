function solution(bridge_length, weight, truck_weights) {
  truck_weights = truck_weights.map((v) => [v, 0]);
  const passingTruck = [];
  const passedTruck = [];

  const len = truck_weights.length;
  let count = 1;

  while (passedTruck.length !== len) {
    count++;

    if (truck_weights.length > 0) {
      passingTruck.push(truck_weights.shift());
    }
    const truckWeight = passingTruck.reduce((prev, cur) => prev + cur[0], 0);

    if (truckWeight > weight) {
      truck_weights.unshift(passingTruck.pop());
    }

    passingTruck.map((v) => v[1]++);

    if (passingTruck[0][1] === bridge_length) {
      passedTruck.push(passingTruck.shift());
    }
  }

  return count;
}
