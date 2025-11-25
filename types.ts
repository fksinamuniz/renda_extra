export interface Idea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  cost: 'Baixo' | 'Médio' | 'Alto';
  costValue: string; // e.g. "Até R$ 100"
  profit: string; // e.g. "R$ 500 - R$ 1.500/mês"
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  tags: string[];
  image: string;
  requirements: string[];
  steps: string[];
  tips: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}