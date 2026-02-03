/**
 * DADOS DE TESTE PARA O DASHBOARD
 *
 * Use estes dados para testes e desenvolvimento
 */

export const mockTransactionsExtended = [
  {
    id: '1',
    date: new Date('2026-02-01'),
    amount: 1500.00,
    status: 'completed' as const,
    type: 'income' as const,
    description: 'Pagamento de serviço',
    merchant: 'Cliente ABC',
    category: 'Services',
    tags: ['invoice', 'professional']
  },
  {
    id: '2',
    date: new Date('2026-02-01'),
    amount: 250.50,
    status: 'completed' as const,
    type: 'expense' as const,
    description: 'Compra de material',
    merchant: 'Fornecedor XYZ',
    category: 'Supplies',
    tags: ['office', 'inventory']
  },
  {
    id: '3',
    date: new Date('2026-02-02'),
    amount: 3200.00,
    status: 'completed' as const,
    type: 'income' as const,
    description: 'Venda de produto',
    merchant: 'E-commerce',
    category: 'Sales',
    tags: ['online', 'retail']
  },
  {
    id: '4',
    date: new Date('2026-02-02'),
    amount: 500.00,
    status: 'pending' as const,
    type: 'expense' as const,
    description: 'Aguardando processamento',
    merchant: 'Banco',
    category: 'Transfer',
    tags: ['pending', 'transfer']
  },
  {
    id: '5',
    date: new Date('2026-02-02'),
    amount: 120.00,
    status: 'failed' as const,
    type: 'expense' as const,
    description: 'Falha na transação',
    merchant: 'Provider',
    category: 'Error',
    tags: ['failed', 'retry-needed']
  },
  {
    id: '6',
    date: new Date('2026-02-03'),
    amount: 2100.00,
    status: 'completed' as const,
    type: 'income' as const,
    description: 'Consultoria',
    merchant: 'Empresa Partners',
    category: 'Consulting',
    tags: ['professional', 'contract']
  },
  {
    id: '7',
    date: new Date('2026-02-03'),
    amount: 450.00,
    status: 'completed' as const,
    type: 'expense' as const,
    description: 'Hospedagem',
    merchant: 'AWS',
    category: 'Infrastructure',
    tags: ['cloud', 'hosting']
  },
  {
    id: '8',
    date: new Date('2026-02-03'),
    amount: 800.00,
    status: 'completed' as const,
    type: 'income' as const,
    description: 'Assinatura anual',
    merchant: 'Cliente Premium',
    category: 'Subscription',
    tags: ['recurring', 'premium']
  },
  {
    id: '9',
    date: new Date('2026-02-04'),
    amount: 350.00,
    status: 'completed' as const,
    type: 'expense' as const,
    description: 'Licenças de software',
    merchant: 'Software Vendor',
    category: 'Software',
    tags: ['license', 'tools']
  },
  {
    id: '10',
    date: new Date('2026-02-04'),
    amount: 5000.00,
    status: 'completed' as const,
    type: 'income' as const,
    description: 'Projeto grande',
    merchant: 'Enterprise Client',
    category: 'Project',
    tags: ['large-project', 'important']
  }
];

/**
 * Categorias de Transações
 */
export const transactionCategories = [
  { id: 'income', label: 'Receita', icon: '↓', color: 'emerald' },
  { id: 'expense', label: 'Despesa', icon: '↑', color: 'red' },
  { id: 'transfer', label: 'Transferência', icon: '↔', color: 'blue' },
  { id: 'refund', label: 'Reembolso', icon: '⤴', color: 'purple' }
];

/**
 * Status de Transações
 */
export const transactionStatuses = [
  { id: 'completed', label: 'Concluída', color: 'emerald' },
  { id: 'pending', label: 'Pendente', color: 'amber' },
  { id: 'failed', label: 'Falhada', color: 'red' },
  { id: 'cancelled', label: 'Cancelada', color: 'gray' }
];

/**
 * Filtros Comuns de Data
 */
export const dateFilters = [
  { id: 'today', label: 'Hoje' },
  { id: 'yesterday', label: 'Ontem' },
  { id: 'this-week', label: 'Esta Semana' },
  { id: 'last-week', label: 'Semana Passada' },
  { id: 'this-month', label: 'Este Mês' },
  { id: 'last-month', label: 'Mês Passado' },
  { id: 'this-year', label: 'Este Ano' },
  { id: 'last-year', label: 'Ano Passado' },
  { id: 'all-time', label: 'Todos os Tempos' }
];

/**
 * Exemplo de Resposta da API (Paginada)
 */
export const mockPaginatedResponse = {
  data: mockTransactionsExtended,
  total: mockTransactionsExtended.length,
  page: 1,
  pageSize: 10,
  totalPages: 1
};

/**
 * Exemplo de Erro da API
 */
export const mockApiError = {
  status: 400,
  error: {
    code: 'INVALID_REQUEST',
    message: 'A requisição é inválida',
    details: {
      field: 'date',
      reason: 'Data inválida'
    }
  }
};

/**
 * Exemplo de Resposta de Sucesso
 */
export const mockSuccessResponse = {
  success: true,
  message: 'Operação realizada com sucesso',
  data: {
    ...mockTransactionsExtended[0],
    id: 'new-transaction-id'
  }
};
