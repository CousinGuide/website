import { Component, Optional } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  constructor(@Optional() public modalRef: MdbModalRef<ContactComponent>) {}

  close(): void {
    if (this.modalRef) {
      const closeMessage = 'Modal closed';
      this.modalRef.close(closeMessage);
    }
  }
}
