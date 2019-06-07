import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ForceUpdatableComponent } from '../force-updatable/force-updatable.component';
import { IVideoTime } from 'app/shared/services/video/IVideoTime';
import { VideoTimeService } from 'app/shared/services/video/video-time.service';
import { RedrawService } from 'app/shared/services/ui/redraw.service';


@Component({
  selector: 'app-waypoint-select',
  templateUrl: './waypoint-select.component.html',
  styleUrls: ['./waypoint-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaypointSelectComponent extends ForceUpdatableComponent implements OnInit, OnDestroy {

  @Input() info: object;
  infoObjectSubscription: Subscription;
  // @Output() registerAsChild: EventEmitter<any> = new EventEmitter();
  // @Output() waypointJumpEvent: EventEmitter<any> = new EventEmitter();

  videoTimeSubscription: Subscription;
  videoTimeWatcher: any;
  videoTime: IVideoTime;

  currentWaypointIndex = 0;

  constructor(protected changeDetectorRef: ChangeDetectorRef,
              protected _videoTimeService: VideoTimeService,
              protected _redrawService: RedrawService) {
    super(_redrawService, changeDetectorRef);
  }

  ngOnInit() {
    // const evtPayload = { purpose: 'register with composite', child: this };
    // this.registerAsChild.emit(evtPayload);
    // this.videoTimeSubscription = this._videoTimeService.videoTimeItem$.subscribe(item => this.videoTime = item);
    this.videoTimeSubscription = this._videoTimeService.videoTimeItem$.subscribe(item => this.updateFromVideoTime(item));
    this.infoObjectSubscription = this._redrawService.lastInfoObject$.subscribe(item => this.info = item);
  }

  ngOnDestroy() {
    if (this.videoTimeSubscription) { this.videoTimeSubscription.unsubscribe(); }
    if (this.infoObjectSubscription) { this.infoObjectSubscription.unsubscribe(); }
    if (this.changeDetectorRef) { this.changeDetectorRef.detach(); }
  }

  updateFromVideoTime(item) {
    this.videoTime = item;
    // this.currentWaypointIndex = item.videoYardsClosestIndex;
    this.setWaypointIndex(item.videoYardsClosestIndex);
  }

  waypointJump(idx) {
    // this.waypointJumpEvent.emit({index: idx});
  }

  setWaypointIndex(idx) {
    this.deltaDetection(idx);
  }
  deltaDetection(idx) {
    this.changeDetectorRef.markForCheck();
    this.currentWaypointIndex = idx;
    this.changeDetectorRef.detectChanges();
  }

}
