import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-c-one',
  templateUrl: './c-one.component.html',
  styleUrls: ['./c-one.component.css'],
})
export class COneComponent implements OnInit {
  comOneData: any = '';
  constructor(private shareDataService: ShareDataService) {}

  ngOnInit() {
    this.shareDataService.SharingData.subscribe((response) => {
      console.log('response::::', response);
      this.comOneData = response
    });
  }

  submit(inp){
    console.log(inp)
    this.shareDataService.SharingData.next(inp)
  }
}
