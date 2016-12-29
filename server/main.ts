import { loadParties } from './imports/fixtures/parties';

Meteor.startup(() => {
  loadParties();
});
