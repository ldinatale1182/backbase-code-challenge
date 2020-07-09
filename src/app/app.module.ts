import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
//Components
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
// Services
import { TransactionService } from './services/transaction-service/transaction.service';
import { BalanceService } from './services/balance-service/balance.service';
// Filters
import { SearchPipe } from './filters/search/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    RecentTransactionsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TransactionService, BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
