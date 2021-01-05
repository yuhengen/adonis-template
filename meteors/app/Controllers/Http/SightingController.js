'use strict'

class SightingController {
  index({ request, response }) {
    return response.json({
      "sightings": [
        {
          "date": "22/01/2020",
          "coordinate": {
            "lat": 1.07,
            "lng": 2.02
          }
        }
      ]
    })
  }

  about(c) {
    return c.view.render('sighting-index')
  }

  details({ params, view }) {
    let detailId = params.detail_id
    return view.render('sightings-details', {
      'detailId': detailId
    })
  }

  create({ view }) {
    return view.render('sightings-create')
  }

  processCreate({ request }) {
    let sighting = request.post();
    return sighting

  }
}

module.exports = SightingController
