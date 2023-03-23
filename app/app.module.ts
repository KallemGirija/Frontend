import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
//import { UserComponent } from './user/user.component';
import { TestQuestionsAddComponent } from './test-questions-add/test-questions-add.component';
import { TestQuestionViewComponent } from './test-question-view/test-question-view.component';
import { DataOperationService } from './data-operation-service';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { TestPaperAdminWorkComponent } from './test-paper-admin-work/test-paper-admin-work.component';
import { TestPaperAdminViewComponent } from './test-paper-admin-view/test-paper-admin-view.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';





const allLinks:Routes = [
  {path : 'addtestpapers',component:AdminViewComponent},
  {path : 'addtestQuestions',component:TestQuestionViewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    //UserComponent,
    TestQuestionsAddComponent,
    TestQuestionViewComponent,
    //DataOperationService,
    AdminViewComponent,
    TestPaperAdminWorkComponent,
    TestPaperAdminViewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),
    FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
