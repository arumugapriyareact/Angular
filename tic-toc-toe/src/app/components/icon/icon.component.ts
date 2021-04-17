import { Component, OnInit,Input } from '@angular/core';
import {faPen,faTimes,faCircle} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconName:string="empty";

  faPen=faPen;
  faTimes=faTimes;
  faCircle=faCircle;

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
