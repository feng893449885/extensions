import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@shared';

import {
  Text3dConfigurableComponent,
  text3dConfigurableExampleConfig,
} from './examples/configurable';

@Component({
  selector: 'app-text3d-overview',
  templateUrl: './text3d-overview.html',
})
export class Text3dOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-text3d-api',
  templateUrl: './text3d-api.html',
})
export class Text3dApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: Text3dOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [text3dConfigurableExampleConfig],
        },
      },
      {
        path: 'api',
        component: Text3dApiComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [Text3dOverviewComponent, Text3dConfigurableComponent],
})
export class Text3dModule {}
