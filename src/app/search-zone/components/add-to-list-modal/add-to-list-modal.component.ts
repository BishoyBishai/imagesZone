import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { State } from "../../store/album.model";
import { Store, select } from "@ngrx/store";
import { getModalState } from "../../store/album.selectors";
import { ToggleAddToListModalAction } from "../../store/album.actions";
@Component({
  selector: "add-to-list-modal",
  templateUrl: "./add-to-list-modal.component.html",
  styleUrls: ["./add-to-list-modal.component.scss"],
})
export class AddToListModalComponent implements OnInit {
  @ViewChild("addToListModal") private addToListModal;
  constructor(private store: Store<State>, private modalService: NgbModal) {}

  ngOnInit() {
    // listen to changes on modal value
    // when value is true open modal
    // on close model with any way dispatch modal
    this.store.pipe(select(getModalState)).subscribe(modalState => {
      if (modalState) {
        this.modalService
          .open(this.addToListModal,{ size: 'lg' })
          .result.then(null, r => this.closeModal());
      } else {
        this.modalService.dismissAll();
      }
    });
  }

  closeModal() {
    this.store.dispatch(new ToggleAddToListModalAction(false));
  }
}
