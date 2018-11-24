import { Component, OnInit, Input } from "@angular/core";
import { Image } from "../../../search-zone/store/album.model";
import { getGalleryImages } from "./utils";
import { NgxGalleryAnimation } from "ngx-gallery";

@Component({
  selector: "favorite-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  galleryOptions;
  @Input("images") images: Image[] = [];
  galleryImages;
  constructor() {}
  deleteImg(){
    alert("ya rab")
  }
  ngOnInit() {
    this.galleryOptions = [
      {
        previewFullscreen: true,
        previewKeyboardNavigation: true,
        previewCloseOnClick: true,
        previewSwipe: true,
        imageAnimation: "rotate",
        imageDescription: true,
        previewDownload:true,
        lazyLoading:true,
      },
      {
        breakpoint: 500,
        width: "300px",
        height: "300px",
        thumbnailsColumns: 3,
      },
      { breakpoint: 300, width: "100%", height: "200px", thumbnailsColumns: 2 },
    ];
    this.galleryImages = getGalleryImages(this.images) || [];
  }
}
