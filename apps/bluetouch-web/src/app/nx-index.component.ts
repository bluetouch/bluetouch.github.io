import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bluetouch-nx-index',
  template: `
    <style>
      #message {
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
        margin: 100px auto 16px;
        max-width: 360px;
        padding: 32px 24px;
      }

      #message h1 {
        color: rgba(0, 0, 0, .6);
        font-size: 22px;
        font-weight: 300;
        margin: 0 0 16px
      }

      #message a {
        text-decoration: none
      }
    </style>
    <div id="message">
      <h1>Blue Touch S.A de C.V.</h1>
      <!-- LinkedIn link with icon -->
      <a href="https://www.linkedin.com/company/blue-touch/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>

      <a href="mailto:info@bluetouch.mx" target="_blank" aria-label="Send an email to info@bluetouch.mx">Contact us</a>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxIndexComponent {}
