import { Component } from '@angular/core';

@Component({
  selector: 'app-ix-demo',
  templateUrl: './ix-demo.component.html',
  styleUrl: './ix-demo.component.css'
})
export class IxDemoComponent {
  data = {
    firstName: '',
    lastName: '',
    userName: '',
  };

  wasValidated = false;

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    this.wasValidated = true;
  }
}
