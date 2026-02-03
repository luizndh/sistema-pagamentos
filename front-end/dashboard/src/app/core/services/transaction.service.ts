import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  type: 'income' | 'expense';
  description: string;
  merchant?: string;
}

export interface TransactionStats {
  totalTransactions: number;
  totalAmount: number;
  completedTransactions: number;
  failedTransactions: number;
  pendingTransactions: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions$ = new BehaviorSubject<Transaction[]>([]);
  private stats$ = new BehaviorSubject<TransactionStats | null>(null);

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData(): void {
    const mockTransactions: Transaction[] = [
      {
        id: '1',
        date: new Date(2026, 1, 1),
        amount: 1500.00,
        status: 'completed',
        type: 'income',
        description: 'Service Payment',
        merchant: 'Client ABC'
      },
      {
        id: '2',
        date: new Date(2026, 1, 1),
        amount: 250.50,
        status: 'completed',
        type: 'expense',
        description: 'Material Purchase',
        merchant: 'Supplier XYZ'
      },
      {
        id: '3',
        date: new Date(2026, 1, 2),
        amount: 3200.00,
        status: 'completed',
        type: 'income',
        description: 'Product Sale',
        merchant: 'E-commerce'
      },
      {
        id: '4',
        date: new Date(2026, 1, 2),
        amount: 500.00,
        status: 'pending',
        type: 'expense',
        description: 'Processing',
        merchant: 'Bank'
      },
      {
        id: '5',
        date: new Date(2026, 1, 2),
        amount: 120.00,
        status: 'failed',
        type: 'expense',
        description: 'Transaction Failed',
        merchant: 'Provider'
      },
      {
        id: '6',
        date: new Date(2026, 2, 1),
        amount: 2100.00,
        status: 'completed',
        type: 'income',
        description: 'Consulting',
        merchant: 'Partners Inc'
      },
      {
        id: '7',
        date: new Date(2026, 1, 3),
        amount: 450.00,
        status: 'completed',
        type: 'expense',
        description: 'Hosting',
        merchant: 'AWS'
      },
      {
        id: '8',
        date: new Date(2026, 1, 3),
        amount: 800.00,
        status: 'completed',
        type: 'income',
        description: 'Annual Subscription',
        merchant: 'Premium Client'
      }
    ];

    this.transactions$.next(mockTransactions);
    this.updateStats(mockTransactions);
  }

  private updateStats(transactions: Transaction[]): void {
    const stats: TransactionStats = {
      totalTransactions: transactions.length,
      totalAmount: transactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0),
      completedTransactions: transactions.filter(t => t.status === 'completed').length,
      failedTransactions: transactions.filter(t => t.status === 'failed').length,
      pendingTransactions: transactions.filter(t => t.status === 'pending').length
    };
    this.stats$.next(stats);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.transactions$.asObservable();
  }

  getStats(): Observable<TransactionStats | null> {
    return this.stats$.asObservable();
  }

  getRecentTransactions(limit: number = 5): Observable<Transaction[]> {
    return new Observable(observer => {
      this.transactions$.subscribe(transactions => {
        observer.next(
          transactions
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, limit)
        );
      });
    });
  }

  getTransactionsByType(type: 'income' | 'expense'): Observable<Transaction[]> {
    return new Observable(observer => {
      this.transactions$.subscribe(transactions => {
        observer.next(transactions.filter(t => t.type === type));
      });
    });
  }
}
