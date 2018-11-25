import { Image } from "./../../../search-zone/store/album.model";
export const getGalleryImages = (images: Image[]) => {
  return (
    images &&
    images.map(img => ({
      small: img.src.thumb,
      medium: img.src.regular,
      big: img.src.full,
      description: `<a (click)="deleteImg()" >${img.description}</a>`,
    }))
  );
};
