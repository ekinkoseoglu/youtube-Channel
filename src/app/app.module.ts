import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [AppComponent, VideoListComponent, VideoCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
