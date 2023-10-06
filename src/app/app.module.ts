import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CdkDrag, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { NgxsModule } from '@ngxs/store';
import { VideoService } from './video.service';
import { SearchComponent } from './components/search/search.component';
import { VideoState } from './state/video.state';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [
    NgxsModule.forRoot([VideoState]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    CdkDrag,
    CdkDropList,
    HttpClientModule,
  ],
  providers: [VideoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
