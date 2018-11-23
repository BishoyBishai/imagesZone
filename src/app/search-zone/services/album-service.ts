import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AlbumServiceResponse } from "../store/album.model";
import { getSearchURL } from "../utils";

@Injectable()
export class AlbumService {
  private url = "https://api.unsplash.com"; // URL to web API
  constructor(private http: HttpClient) {}
  loadAlbum(tag: string): Observable<AlbumServiceResponse> {
    return this.http.get<AlbumServiceResponse>(getSearchURL(this.url,tag));
  }
}
