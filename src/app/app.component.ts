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
    const tempString = this.removeSpecialCharacters(this.prName)
                           .replace(/[\n ]/g, '-');
    const tempStringSplitParams = tempString.split('-');
    // First two params is ticket id
    const ticketId = tempStringSplitParams.splice(0, 2).join('-');
    // The rest of the params is ticketname which should be lower case
    const ticketName = tempStringSplitParams.join('-').toLowerCase();
    this.convertedBranchName = `${ticketId}-${ticketName}`;
  }

  /**
   * Remove all special characters in a string
   * @param {string} inputString
   * @returns {string}
   */
  removeSpecialCharacters(inputString: string) {
    return inputString.replace(/[^[a-zA-Z0-9\-\n ]/g, '');
  }
}
