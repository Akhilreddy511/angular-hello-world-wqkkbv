import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-c-two',
  templateUrl: './c-two.component.html',
  styleUrls: ['./c-two.component.css']
})
export class CTwoComponent implements OnInit {
  comTwoData:any=""

  constructor(private shareDataService: ShareDataService) {}

  ngOnInit() {
    this.shareDataService.SharingData.subscribe((response) => {
      console.log('response::::', response);
      this.comTwoData = response
    });
  }

  submit(){
    this.shareDataService.SharingData.next(this.comTwoData)
  }
}