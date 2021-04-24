import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {OmapsService} from './omaps.service';

// const iconRetinaUrl = 'assets/marker-icon-2x.png';
// const iconUrl = 'assets/marker-icon.png';
// const shadowUrl = 'assets/marker-shadow.png';

const iconRetinaUrl = 'assets/img/truck.jpeg';
const iconUrl = 'assets/img/truck.jpeg';
const shadowUrl = 'assets/marker-shadow.png';


const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-omaps',
  templateUrl: './omaps.component.html',
  styleUrls: ['./omaps.component.scss']
})
export class OmapsComponent implements AfterViewInit {
  private map;

  title = 'Open Street Map';

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 42.6000, 23.5000 ],
      zoom: 11
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  constructor(private omapService: OmapsService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.omapService.makeCapitalMarkers(this.map);
  }

}
