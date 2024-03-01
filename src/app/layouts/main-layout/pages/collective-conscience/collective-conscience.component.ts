import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collective-conscience',
  templateUrl: './collective-conscience.component.html',
  styleUrls: ['./collective-conscience.component.scss'],
})
export class CollectiveConscienceComponent {
  constructor(
    private router: Router,
  ) {
  }
  editMode: boolean = false;
  healthPoints = [
    { label: '1.', placeholder: 'All people are healthy, and the world is disease-free' },
    { label: '2.', placeholder: 'All people have access to organic healthy food' },
    { label: '3.', placeholder: 'People have joyful well-paid work and they are compensated for the individual value they create in the world. As a result of this joyful contribution through loving the world (partially as an expression of their work) we collectively create enough abundance that the following conditions can be experienced' },
    { label: '4.', placeholder: 'All people live in abundance and have access to homes' },
    { label: '5.', placeholder: 'Free energy technology is available to all' },
    { label: '6.', placeholder: 'Free healthcare is available to all' },
    { label: '7.', placeholder: 'We live free and have no authoritative government' },
    { label: '8.', placeholder: 'Higher level knowledge is available to all' },
    { label: '9.', placeholder: 'A unit of transaction is used for trade and transactions for goods and services to provide a record of transaction' },
    { label: '10.', placeholder: 'We live in abundance in all aspects of life' }
  ];
  
  fields = [
    { label: '1.', name: 'first', placeholder: 'Enter Point' },
    { label: '2.', name: 'second', placeholder: 'Enter Point' },
    { label: '3.', name: 'third', placeholder: 'Enter Point' },
    { label: '4.', name: 'fourth', placeholder: 'Enter Point' },
    { label: '5.', name: 'fifth', placeholder: 'Enter Point' },
    { label: '6.', name: 'sixth', placeholder: 'Enter Point' },
    { label: '7.', name: 'seventh', placeholder: 'Enter Point' },
    { label: '8.', name: 'eight', placeholder: 'Enter Point' },
    { label: '9.', name: 'nineth', placeholder: 'Enter Point' },
    { label: '10.', name: 'tenth', placeholder: 'Enter Point' },
  ];
  fieldData: any = {};

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  nextPageSearch() {
    console.log('Field values:', this.fieldData);
    this.router.navigate(['/home']);
  }
}
