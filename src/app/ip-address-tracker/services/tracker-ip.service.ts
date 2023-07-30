import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TrackerIpService {
  constructor(private http: HttpClient) {}

  private api_key = 'at_uFj7jLV2iHtu7pkqEFie5K8C5GmZk';
  getInfoIp(ip?: string) {
    const url = ip
      ? `https://geo.ipify.org/api/v2/country,city?apiKey=at_uFj7jLV2iHtu7pkqEFie5K8C5GmZk&ipAddress=${ip}`
      : 'https://geo.ipify.org/api/v2/country,city?apiKey=at_uFj7jLV2iHtu7pkqEFie5K8C5GmZk';

    return this.http.get(url);
  }

  //option1

  // getInfoIp2(ip: string) {
  //   this.http
  //     .get(
  //       `https://ipgeolocation.abstractapi.com/v1/?api_key=8d7db6bd4dfd419fb8fd61d24a5d4ab9&ip_address=${ip}`
  //     )
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
}
