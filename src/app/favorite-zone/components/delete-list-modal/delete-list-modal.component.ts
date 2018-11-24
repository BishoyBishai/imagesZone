import { FavoriteList } from "./../../store/favorite.models";
import {
  getDeleteModalState,
  getCurrentList,
} from "./../../store/favorite.selector";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../store/app.models";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  ToggleDeleteModal,
  RemoveFavoriteList,
} from "../../store/favorite.actions";

@Component({
  selector: "delete-list-modal",
  templateUrl: "./delete-list-modal.component.html",
  styleUrls: ["./delete-list-modal.component.scss"],
})
export class DeleteListModalComponent implements OnInit {
  @ViewChild("deleteListModal") private deleteListModal;

  constructor(private store: Store<AppState>, private modalService: NgbModal) {}
  currentZone: FavoriteList;
  ngOnInit() {
    // listen to changes on modal value
    // when value is true open modal
    // on close model with any way dispatch modal
    this.store.pipe(select(getDeleteModalState)).subscribe(modalState => {
      if (modalState) {
        this.modalService
          .open(this.deleteListModal)
          .result.then(null, r => this.closeModal());
      } else {
        this.modalService.dismissAll();
      }
    });

    this.store.pipe(select(getCurrentList)).subscribe(zone => {
      this.currentZone = zone;
    });
  }

  deleteList() {
    this.store.dispatch(new RemoveFavoriteList(this.currentZone.id));
    this.modalService.dismissAll();

  }
  closeModal() {
    this.store.dispatch(new ToggleDeleteModal(false));
  }
}
