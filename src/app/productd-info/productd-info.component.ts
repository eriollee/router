import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";
@Component({
  selector: 'app-productd-info',
  templateUrl: './productd-info.component.html',
  styleUrls: ['./productd-info.component.css']
})
export class ProductdInfoComponent implements OnInit {
  
  private sellerId:number;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
  	this.sellerId = this.routeInfo.snapshot.params["id"];
  }

}
