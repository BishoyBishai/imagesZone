import { Image } from "./../../../search-zone/store/album.model";
export const getGalleryImages = (images: Image[]) => {
  return (
    images &&
    images.map(img => ({
      small: img.src,
      medium: img.src,
      big: img.src,
      description: `<a (click)="deleteImg()" >${img.description}</a>`,
    }))
  );
};
