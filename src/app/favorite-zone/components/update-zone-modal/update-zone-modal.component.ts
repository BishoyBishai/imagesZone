import { getUpdateModalState } from "./../../store/favorite.selector";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AppState } from "../../../store/app.models";
import { Store, select } from "@ngrx/store";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToggleUpdateModal } from "../../store/favorite.actions";

@Component({
  selector: "update-zone-modal",
  templateUrl: "./update-zone-modal.component.html",
  styleUrls: ["./update-zone-modal.component.scss"],
})
export class UpdateZoneModalComponent implements OnInit {
  @ViewChild("updateZoneModal") private updateZoneModal;

  constructor(private store: Store<AppState>, private modalService: NgbModal) {}

  ngOnInit() {
    // listen to changes on modal value
    // when value is true open modal
    // on close model with any way dispatch modal
    this.store.pipe(select(getUpdateModalState)).subscribe(modalState => {
      if (modalState) {
        this.modalService
          .open(this.updateZoneModal, { size: "lg" })
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
