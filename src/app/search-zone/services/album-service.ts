import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Image } from "../store/album.model";

@Injectable()
export class AlbumService {
  private url = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http: HttpClient) {}
  loadAlbum(tag: string): Observable<Image[]> {
    return this.http.get<Image[]>(this.url);
  }
}
