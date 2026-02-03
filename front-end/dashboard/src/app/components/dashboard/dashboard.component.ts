import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionStatsComponent } from '../transaction-stats/transaction-stats.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { TransactionSummaryComponent } from '../transaction-summary/transaction-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TransactionStatsComponent, TransactionListComponent, TransactionSummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor() {}
}
