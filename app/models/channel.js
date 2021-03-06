import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr name;
  @attr branch;
  @belongsTo('ecosystem') ecosystem;
}
