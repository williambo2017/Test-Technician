import { Component, OnInit } from '@angular/core';
import { Map, icon, marker, tileLayer } from 'leaflet';
import { TrackerIpService } from '../../services/tracker-ip.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  infoIP: any;
  ipTrackerControl = new FormControl();

  myMap!: Map;

  constructor(private trackerIpService: TrackerIpService) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.trackerIpService.getInfoIp().subscribe((data) => {
      this.infoIP = data;
      this.buildMap(this.infoIP.location.lat, this.infoIP.location.lng);
    });
  }

  buildMap(lat: number, log: number) {
    this.myMap = new Map('map').setView([lat, log], 13);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 12,
      attribution: '© OpenStreetMap',
    }).addTo(this.myMap);
    const greenIcon = icon({
      iconUrl: 'assets/icon-location.svg',
    });
    const currentMarker = marker([lat, log], {
      icon: greenIcon,
    }).addTo(this.myMap);

    this.myMap.fitBounds([
      [currentMarker.getLatLng().lat, currentMarker.getLatLng().lng],
    ]);

    this.myMap.zoomControl.remove();
  }
  trackerIp() {
    this.ipTrackerControl.value;
    this.getInfo(this.ipTrackerControl.value);
  }

  updateMap(lat: number, log: number) {
    const greenIcon = icon({
      iconUrl: 'assets/icon-location.svg',
    });
    const currentMarker = marker([lat, log], {
      icon: greenIcon,
    }).addTo(this.myMap);

    this.myMap.fitBounds([
      [currentMarker.getLatLng().lat, currentMarker.getLatLng().lng],
    ]);
  }

  getInfo(ip: string) {
    this.trackerIpService.getInfoIp(ip).subscribe((data) => {
      this.infoIP = data;
      this.updateMap(this.infoIP.location.lat, this.infoIP.location.lng);
    });
  }
}
