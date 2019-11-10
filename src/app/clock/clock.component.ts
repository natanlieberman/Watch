import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"]
})
export class ClockComponent {
  @Input() city: string;
  time: string;
  @Input() color:string;
  

  
  constructor() {
    this.setTime();
    setInterval(() => this.setTime(), 1000);
  }

  ngOnInit() {}
  setTime() {
    let d = new Date();
    let a = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    switch (this.city) {
      case "Jerusalem":
        a = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        col
        break;

      case "London":
        a = d.getHours()-2 + ":" + d.getMinutes() + ":" + d.getSeconds();
        break;

      case "Barcelona":
        a = d.getHours()-1 + ":" + d.getMinutes() + ":" + d.getSeconds();
        break;

      case "New York":
        a = d.getHours()-7 + ":" + d.getMinutes() + ":" + d.getSeconds();
        break;

      case "Shanghai":
        a = d.getHours()+6 + ":" + d.getMinutes() + ":" + d.getSeconds();
        break;
    }
    this.time = a
  }
}
