import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prName: string;
  convertedBranchName: string;

  doConvert() {
    const prNameParams = this.prName.split('\n');
    const ticketId = prNameParams[0];
    delete prNameParams[0];
    const ticketName = prNameParams.join(' ').trim().toLowerCase()
      .replace(/\n/g, '-')
      .replace(/ /g, '-')
      .replace(/\./g, '');
    this.convertedBranchName = `${ticketId}-${ticketName}`;
  }
}
