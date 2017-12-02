exports.locQuery = (coords, distance) => {
  return { loc: { $near: { $geometry: { type: "Point", coordinates: coords }, $maxDistance: parseInt(distance)}}}
}