import { Component, OnInit } from '@angular/core';

function loadDate() {
  let n =  new Date();
  let  y = n.getFullYear();
  let  m = n.getMonth() + 1;
  let  d = n.getDate();
  document.getElementById("data").innerHTML = `${d}/${m}/${y}`;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadDate()
  }

}
