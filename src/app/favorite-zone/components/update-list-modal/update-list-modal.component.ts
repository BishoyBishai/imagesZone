import { getUpdateModalState } from "./../../store/favorite.selector";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AppState } from "../../../store/app.models";
import { Store, select } from "@ngrx/store";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToggleUpdateModal } from "../../store/favorite.actions";

@Component({
  selector: "update-list-modal",
  templateUrl: "./update-list-modal.component.html",
  styleUrls: ["./update-list-modal.component.scss"],
})
export class UpdateListModalComponent implements OnInit {
  @ViewChild("updateListModal") private updateListModal;

  constructor(private store: Store<AppState>, private modalService: NgbModal) {}

  ngOnInit() {
    // listen to changes on modal value
    // when value is true open modal
    // on close model with any way dispatch modal
    this.store.pipe(select(getUpdateModalState)).subscribe(modalState => {
      if (modalState) {
        this.modalService
          .open(this.updateListModal, { size: "lg" })
          .result.then(null, r => this.closeModal());
      } else {
        this.modalService.dismissAll();
      }
    });
  }

  closeModal() {
    this.store.dispatch(new ToggleUpdateModal(false));
  }
}
