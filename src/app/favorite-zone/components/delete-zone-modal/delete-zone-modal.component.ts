import { FavoriteZone } from "./../../store/favorite.models";
import {
  getDeleteModalState,
  getCurrentZone,
} from "./../../store/favorite.selector";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../store/app.models";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  ToggleDeleteModal,
  RemoveFavoriteZone,
} from "../../store/favorite.actions";

@Component({
  selector: "delete-zone-modal",
  templateUrl: "./delete-zone-modal.component.html",
  styleUrls: ["./delete-zone-modal.component.scss"],
})
export class DeleteZoneModalComponent implements OnInit {
  @ViewChild("deleteZoneModal") private deleteZoneModal;

  constructor(private store: Store<AppState>, private modalService: NgbModal) {}
  currentZone: FavoriteZone;
  ngOnInit() {
    // listen to changes on modal value
    // when value is true open modal
    // on close model with any way dispatch modal
    this.store.pipe(select(getDeleteModalState)).subscribe(modalState => {
      if (modalState) {
        this.modalService
          .open(this.deleteZoneModal)
          .result.then(null, r => this.closeModal());
      } else {
        this.modalService.dismissAll();
      }
    });

    this.store.pipe(select(getCurrentZone)).subscribe(zone => {
      this.currentZone = zone;
    });
  }

  deleteZone() {
    this.store.dispatch(new RemoveFavoriteZone(this.currentZone.id));
    this.modalService.dismissAll();

  }
  closeModal() {
    this.store.dispatch(new ToggleDeleteModal(false));
  }
}
