import { environment } from "./../../environments/environment";
import { UnsplashImage } from "./store/unsplash.model";
import {
  Image,
  AlbumServicePayload,
  AlbumServiceResponse,
} from "./store/album.model";

export const getSearchURL = (url, query,page) => {
  return `${url}/search/photos?client_id=${
    environment.unsplash.applicationId
  }&query=${query}&per_page=${environment.unsplash.applicationId}&page=${page}`;
};

export const convertUnsplashImageToZoneImage = (
  images: UnsplashImage[],
): Image[] => {
  return images.map(img => ({
    id: img.id,
    src: img.urls.small,
    description: img.description,
    username: img.user.username,
    portfolio_url: img.user.portfolio_url,
  }));
};

export const convertUnsplashResponseToPayload = (
  res: AlbumServiceResponse,
): AlbumServicePayload => {
  return {
    imagesZone: convertUnsplashImageToZoneImage(res.results),
    currentPage: 1,
    total_pages: res.total_pages,
  };
};

export const isImageInZone = (images: Image[], currentImageId: string) => {
  return images.findIndex(img => img.id === currentImageId) !== -1;
};
