import { HttpClient } from '@angular/common/http';
import { getDebugNode, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gun } from '../common/gun';
import { map } from 'rxjs/operators'
import { GunCategory } from '../common/gun-category';

@Injectable({
  providedIn: 'root'
})
export class GunService {

  private gunsUrl = "http://localhost:8080/api/guns";
  private gunCategoriesUrl = "http://localhost:8080/api/gun-category";

  constructor(private httpClient: HttpClient) { }

  getGuns(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(this.gunsUrl).pipe(
      map(response => response._embedded.guns)
    );
  }

  getGun(id: number): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/${id}`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getAssaultRifles(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=1`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getSubmachineGuns(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=2`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getTaticalRifles(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=3`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getLightmachineGuns(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=4`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getSniperRifles(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=5`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getPistols(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=6`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getShotguns(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=7`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getLaunchers(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=8`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getMeleeSpecial(): Observable<Gun[]> {
    return this.httpClient.get<GetGunResponse>(`${this.gunsUrl}/search/findByCategoryId?id=9`).pipe(
      map(response => response._embedded.guns)
    );
  }

  getGunCategories(): Observable<GunCategory[]> {
    return this.httpClient.get<GetGunCategoryResponse>(`${this.gunCategoriesUrl}`).pipe(
      map(response => response._embedded.gunCategory)
    );
  }

  updateGunById(gId: number, gun: Gun): Observable<any> {
    return this.httpClient.put(`${this.gunsUrl}/${gId}/update`, gun);
  }

  updateGunCategoryById(gcId: number, gunCategory: GunCategory): Observable<any> {
    return this.httpClient.put(`${this.gunCategoriesUrl}/${gcId}/update`, gunCategory);
  }
  
  getGunById(gId: number) {
    return this.httpClient.get(`${this.gunsUrl}/${gId}`);
  }

  getGunCategoryById(gcId: number) {
    return this.httpClient.get(`${this.gunCategoriesUrl}/${gcId}`)
  }
}

interface GetGunResponse {
  _embedded: {
    guns: Gun[];
  }
}

interface GetGunCategoryResponse {
  _embedded: {
    gunCategory: GunCategory[];
  }
}
