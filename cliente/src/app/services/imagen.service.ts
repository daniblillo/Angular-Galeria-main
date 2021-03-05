import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})

export class ImagenService {
  CLOUDINARY_URL = 'cloudinary://621771792897986:dFJAKbUaW6Pkk7l3WE70f9jCyss@danielgv';
  imagenURL = 'http://localhost:8888/' + this.CLOUDINARY_URL + '/';

/**
 * @param httpClient
 */
  constructor(private httpClient: HttpClient) { }

/**
 * LISTAR
 * @return
 */
  public list(): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(this.imagenURL + 'list');
  }

/**
 * UPLOAD IMG
 * @param imagen 
 * @return
 */
  public upload(imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    return this.httpClient.post<any>(this.imagenURL + 'upload', formData);
  }

/**
 * ELIMINAR
 * @return
 */
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.imagenURL + `delete/${id}`);
  }
}
