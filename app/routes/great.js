import Route from '@ember/routing/route';

export default class GreatRoute extends Route {
  beforeModel(){
    return this.replaceWith('index');
  }
}
