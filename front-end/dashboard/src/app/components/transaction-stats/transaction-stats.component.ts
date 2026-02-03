import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService, TransactionStats } from '../../services/transaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-stats.component.html',
  styleUrl: './transaction-stats.component.scss'
})
export class TransactionStatsComponent implements OnInit {
  stats$: Observable<TransactionStats | null>;

  constructor(private transactionService: TransactionService) {
    this.stats$ = this.transactionService.getStats();
  }

  ngOnInit(): void {}

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}
