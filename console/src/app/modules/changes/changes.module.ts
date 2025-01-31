import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollableModule } from 'src/app/directives/scrollable/scrollable.module';
import { HasRolePipeModule } from 'src/app/pipes/has-role-pipe/has-role-pipe.module';
import { LocalizedDatePipeModule } from 'src/app/pipes/localized-date-pipe/localized-date-pipe.module';
import { TimestampToDatePipeModule } from 'src/app/pipes/timestamp-to-date-pipe/timestamp-to-date-pipe.module';
import { AvatarModule } from '../avatar/avatar.module';

import { ChangesComponent } from './changes.component';

@NgModule({
  declarations: [ChangesComponent],
  imports: [
    CommonModule,
    ScrollableModule,
    MatProgressSpinnerModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    HasRolePipeModule,
    ScrollingModule,
    LocalizedDatePipeModule,
    TimestampToDatePipeModule,
    MatTooltipModule,
    AvatarModule,
  ],
  exports: [ChangesComponent, ScrollableModule],
})
export class ChangesModule {}
