import { environment } from "./../../environments/environment";
import { UnsplashImage } from "./store/unsplash.model";
import { Image } from "./store/album.model";

export const getSearchURL = (url, query) => {
  return `${url}/search/photos?client_id=${
    environment.unsplash.applicationId
  }&query=${query}&per_page=${environment.unsplash.applicationId}`;
};

export const convertUnsplashImageToZoneImage = (
  images: UnsplashImage[],
): Image[] => {
  return images.map(img => ({
    id: img.id,
    src: img.urls.full,
    description: img.description,
    username: img.user.username,
    portfolio_url: img.user.portfolio_url,
  }));
};
