import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { IVideoTime } from 'app/shared/services/video/IVideoTime';
import { VideoTimeService } from 'app/shared/services/video/video-time.service';
import { ForceUpdatableComponent } from '../force-updatable/force-updatable.component';
import { RedrawService } from 'app/shared/services/ui/redraw.service';


@Component({
  selector: 'app-video-time-status',
  templateUrl: './video-time-status.component.html',
  styleUrls: ['./video-time-status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoTimeStatusComponent extends ForceUpdatableComponent implements OnInit, OnDestroy {

  videoTimeSubscription: Subscription;
  videoTimeWatcher: any;
  videoTime: IVideoTime;
  private _videoTimeSubject: BehaviorSubject<IVideoTime>;

  public get styleWidth(): number {
    // return 'width:' + Math.ceil(this.videoTime.percent * 100.0) + '%';
    return Math.ceil(this.videoTime.percent * 100.0);
  }

  constructor(protected _videoTimeService: VideoTimeService,
    protected _changeDetectorRef: ChangeDetectorRef,
    protected _redrawService: RedrawService) {
    super(_redrawService, _changeDetectorRef);
  }

  ngOnInit() {
    // this.videoTimeSubscription = this._videoTimeService.videoTimeItem$.subscribe(item => this.videoTime = item);
    this.videoTimeSubscription = this._videoTimeService.videoTimeItem$.subscribe(item => this.deltaDetection(item));
    // make local videoTime observable and call deltaDetection as needed...
    // this._videoTimeSubject = new BehaviorSubject<IVideoTime>(this.videoTime);
    // this._videoTimeSubject.subscribe(item => this.deltaDetection(item));

  }
  ngOnDestroy() {
    if (this.videoTimeSubscription) { this.videoTimeSubscription.unsubscribe(); }
    if (this.changeDetectorRef) { this.changeDetectorRef.detach(); }
    if (this.changeDetectorRef) { this.changeDetectorRef.detach(); }
  }

  deltaDetection(item) {
    this.videoTime = item;
    this._changeDetectorRef.markForCheck();
    // this._currentWaypointIndex = idx;
    this._changeDetectorRef.detectChanges();
  }

}
