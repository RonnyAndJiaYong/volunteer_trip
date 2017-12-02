import {get} from './http.js'

export default function getVolunteer() {
  return get('/static/index.json');
}
