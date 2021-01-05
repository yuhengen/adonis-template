'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('about-us', () => "About Us")

Route.get('view-record/:record_id', ({ params }) => {
  return `Post ${params.record_id}`
})

Route.get('special', () => "We the Specials!").as('special123')

Route.get('testing', ({ response }) => {
  // return setTimeout(function () {
  response.route('special123')
  // }, 3000);
})

Route.get('sightings', "SightingController.index")

Route.get('sightings/about', 'SightingController.about')
// Route.on('sightings/about').render('sighting-index')

// Route.get('sightings/about', ({ view }) => {
//   return view.render('sighting-index')
// })

Route.get('sightings/details/:detail_id/view', 'SightingController.details')

Route.get('sightings/details/create', 'SightingController.create')

Route.post('sightings/details/create', 'SightingController.processCreate')
