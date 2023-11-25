import { Component } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  modalRef: MdbModalRef<ContactComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ContactComponent);
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

}
