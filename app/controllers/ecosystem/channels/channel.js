import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemChannelsChannelController extends Controller {
    
    @action
    async saveModel(model) {
      await this.model.save();
    }

}
