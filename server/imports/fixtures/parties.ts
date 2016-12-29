import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';


export function loadParties(){
 if (Parties.find().cursor.count() === 0) {
 const parties: Party[] = [{
 name: 'Awesome Party',
    description: 'Great music',
    location: 'London'
  }, {
    name: 'New years',
    description: 'Party till 17',
    location: 'Reading'
  }, {
    name: 'Savage',
    description: '21',
    location: 'Las Vegas'
 }];

 parties.forEach((party: Party) => Parties.insert(party));
 }
}
