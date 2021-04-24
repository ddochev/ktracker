import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class OmapsService {
  // trucks: string = 'rest get call';
  trucks: string = '/assets/data/truck-sofia.geojson';

  constructor(private http: HttpClient) {
  }

  makeCapitalMarkers(map: L.map): void {
    this.http.get(this.trucks).subscribe((res: any) => {
      for (const c of res.truckList) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        marker.addTo(map);
      }
    });
  }
}
