import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService, Transaction } from '../../services/transaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  recentTransactions$: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) {
    this.transactions$ = this.transactionService.getTransactions();
    this.recentTransactions$ = this.transactionService.getRecentTransactions(5);
  }

  ngOnInit(): void {}

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'completed': 'transaction-badge--success',
      'pending': 'transaction-badge--warning',
      'failed': 'transaction-badge--danger'
    };
    return statusMap[status] || '';
  }

  getStatusLabel(status: string): string {
    const statusMap: { [key: string]: string } = {
      'completed': 'Completed',
      'pending': 'Pending',
      'failed': 'Failed'
    };
    return statusMap[status] || status;
  }

  getTypeIcon(type: string): string {
    return type === 'income' ? '↓' : '↑';
  }

  getTypeClass(type: string): string {
    return type === 'income' ? 'transaction-type--income' : 'transaction-type--expense';
  }
}
