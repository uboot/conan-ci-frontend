import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemBuildsController extends Controller {

  @action
  startBuild(model) {
    model.status = 'new';
    model.save();
  }
  @action
  stopBuild(model) {
    model.status = 'stopping';
    model.save();
  }
  
}
