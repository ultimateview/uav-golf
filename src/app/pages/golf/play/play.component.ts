import { Component, OnInit } from '@angular/core';
import { GolfCourseObject, Master } from './../../../shared/golf-objects/golf.planet';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  master: Master;
  course: GolfCourseObject;
  courseList: Array<GolfCourseObject>;

  constructor() {
    this.master = new Master();
    this.course = this.master.planet.getCountry('USA', 'USA').getCourse('1234 Sherwood');
    this.courseList = this.master.planet.getCountry('USA', 'USA').courses;
  }

  ngOnInit() {
  }

}
