
import { Youtube360Component } from './../../components/features/interactive/youtube360/youtube360.component';
import { VideoTimeStatusComponent } from './../../components/features/interactive/video-time-status/video-time-status.component';
import { VideoTimelineComponent } from './../../components/features/interactive/video-timeline/video-timeline.component';
import { WaypointSelectComponent } from './../../components/features/interactive/waypoint-select/waypoint-select.component';
import { HoleSelectComponent } from './../../components/features/interactive/hole-select/hole-select.component';
import { CourseSelectComponent } from './../../components/features/interactive/course-select/course-select.component';
import { CourseCompositeComponent } from './../../components/features/interactive/course-composite/course-composite.component';
import { PlayComponent } from './../../pages/golf/play/play.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { YardsLabelPipe } from 'app/custom-pipes/yards-label.pipe';
import { GoogleMapComponent } from 'app/components/features/interactive/google-map/google-map.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PlayComponent,
    CourseCompositeComponent,
    CourseSelectComponent,
    HoleSelectComponent,
    WaypointSelectComponent,
    VideoTimelineComponent,
    VideoTimeStatusComponent,
    Youtube360Component,
    YardsLabelPipe,
    GoogleMapComponent
  ]
})

export class AdminLayoutModule {}
