import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsChannelsNewController extends Controller {
    @service store;
    
    @action
    async createChannel(model) {
      let ecosystem = this.model
      let channel = this.store.createRecord('channel', {
        name: model.name,
        ecosystem: ecosystem
      });
      await channel.save();
      this.transitionToRoute("ecosystem.settings.channels.channel", ecosystem, channel);
    }
    
}
