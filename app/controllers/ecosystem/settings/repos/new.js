import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsReposNewController extends Controller {
    @service store;
    
    @action
    async createRepo(model) {
      let ecosystem = this.model
      let repo = this.store.createRecord('repo', {
        name: model.name,
        ecosystem: ecosystem,
      });
      await repo.save();
      this.transitionToRoute("ecosystem.settings.repos.repo", ecosystem, repo);
    }
    
}
