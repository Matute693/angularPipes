import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [
  ]
})
export class NoCommonComponent {

  //i18nSelect 
  name: string = 'Matias';
  gender: string = 'male';
  inviteMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  //i18nPlural
  clients: string[] = ['Matias', 'Josh', 'Stella', 'Tefany', 'Vale', 'Richard'];
  clientMap = {
    '=0': "we don't have client waiting.",
    '=1': 'we have a client waiting.',
    '=2': 'we have 2 clients waiting.',
    'other': 'we have # clients waiting '
  }

  deleteClient() {
    // this.clients.splice(0,1);
    this.clients.pop();
  }

  changePerson() {
    this.name = 'Susan';
    this.gender = 'female';
  }

  //keyValuePipe
  person = {
    name: 'Matias',
    age: 24,
    direction: 'Córdoba, Argentina'
  }

  //JSON Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Spiderman',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    }
  ]

  ///Async Pipe
  myobservable$ = interval(1000);

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Finish promise.' );
    }, 3500);
  })

}
