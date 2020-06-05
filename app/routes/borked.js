import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class BorkedRoute extends Route {

  async beforeModel(){
    await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return this.replaceWith('index');
  }
}
