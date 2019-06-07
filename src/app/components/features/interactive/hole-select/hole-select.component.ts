import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { ForceUpdatableComponent } from '../force-updatable/force-updatable.component';
import { GolfCourseObject } from 'app/shared/golf-objects/golf.planet';
import { RedrawService } from 'app/shared/services/ui/redraw.service';

@Component({
  selector: 'app-hole-select',
  templateUrl: './hole-select.component.html',
  styleUrls: ['./hole-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoleSelectComponent extends ForceUpdatableComponent implements OnInit {

  @Input() holeSelectHandle: any;
  @Input() currentCourse: GolfCourseObject;

  constructor(protected _redrawService: RedrawService, protected changeDetectorRef: ChangeDetectorRef) {
    super(_redrawService, changeDetectorRef);
  }

  ngOnInit() {
    this.holeSelectHandle(1);
  }

}
