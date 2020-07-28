import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import moment from "moment";
import { pick } from "lodash";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // some meaningless code
    const start = moment()
      .startOf("day")
      .valueOf();
    of(start)
      .pipe(
        map(v => ({
          time: 10 * v
        }))
      )
      .subscribe(res => {
        console.log(pick(res, "time"));
      });
  }
}
