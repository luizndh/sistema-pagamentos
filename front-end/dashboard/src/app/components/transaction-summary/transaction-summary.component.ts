import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService, Transaction } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-summary.component.html',
  styleUrl: './transaction-summary.component.scss'
})
export class TransactionSummaryComponent implements OnInit {
  incomeTransactions: Transaction[] = [];
  expenseTransactions: Transaction[] = [];
  incomeTotal: number = 0;
  expenseTotal: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.incomeTransactions = transactions.filter(t => t.type === 'income');
      this.expenseTransactions = transactions.filter(t => t.type === 'expense');

      this.incomeTotal = this.incomeTransactions.reduce((sum, t) => sum + t.amount, 0);
      this.expenseTotal = this.expenseTransactions.reduce((sum, t) => sum + t.amount, 0);
    });
  }

  getIncomePercentage(): number {
    const total = this.incomeTotal + this.expenseTotal;
    return total === 0 ? 0 : Math.round((this.incomeTotal / total) * 100);
  }

  getExpensePercentage(): number {
    const total = this.incomeTotal + this.expenseTotal;
    return total === 0 ? 0 : Math.round((this.expenseTotal / total) * 100);
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}
