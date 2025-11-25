import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ideas } from '../data';
import { Icon } from '../components/Icon';
import { useTheme } from '../context/ThemeContext';

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { theme, toggleTheme } = useTheme();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';

  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState(initialCategory);

  const filteredIdeas = ideas.filter(idea => {
    const matchesQuery = idea.title.toLowerCase().includes(query.toLowerCase()) || 
                         idea.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    const matchesCategory = filter ? idea.category === filter || idea.tags.includes(filter) : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center bg-white dark:bg-gray-900 p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold leading-tight tracking-tight flex-1">300 Ideias</h1>
        <div className="flex items-center gap-2">
           <button 
            onClick={toggleTheme} 
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
          </button>
          <button onClick={() => navigate('/')} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Icon name="close" />
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-4">
        {/* Search Bar */}
        <div className="mb-4">
          <label className="flex flex-col h-12 w-full">
            <div className="flex w-full flex-1 items-center rounded-xl bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus-within:ring-2 focus-within:ring-primary">
              <div className="flex items-center justify-center pl-4 text-gray-400">
                <Icon name="search" />
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 bg-transparent px-4 text-base font-normal text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none" 
                placeholder="Busque por 'vender', 'online'..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </label>
        </div>

        {/* Chips */}
        <div className="flex gap-2 pb-4 overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button 
            onClick={() => setFilter('')}
            className={`flex h-8 shrink-0 items-center justify-center rounded-full px-4 text-xs font-medium transition-colors ${!filter ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}
          >
            Todas
          </button>
          {['Vendas', 'Online', 'Serviços', 'Baixo Custo'].map(tag => (
            <button 
              key={tag}
              onClick={() => setFilter(filter === tag ? '' : tag)}
              className={`flex h-8 shrink-0 items-center justify-center rounded-full px-4 text-xs font-medium transition-colors ${filter === tag ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-4 px-1">Exibindo {filteredIdeas.length} ideias</p>

        {/* List */}
        <div className="flex flex-col gap-4 pb-8">
          {filteredIdeas.map(idea => (
            <div 
              key={idea.id}
              onClick={() => navigate(`/idea/${idea.id}`)}
              className="flex flex-col rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {idea.tags.slice(0, 3).map((tag, i) => {
                    const colors = [
                      'text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300',
                      'text-green-700 bg-green-50 dark:bg-green-900/30 dark:text-green-300',
                      'text-amber-700 bg-amber-50 dark:bg-amber-900/30 dark:text-amber-300'
                    ];
                    return (
                      <span key={tag} className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md ${colors[i % 3]}`}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">{idea.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{idea.shortDescription}</p>
                  </div>
                  {/* Optional thumbnail in list view */}
                  <img src={idea.image} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0 bg-gray-100" />
                </div>
                
                <div className="mt-4 flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
                   <span>Custo: <span className={idea.cost === 'Baixo' ? 'text-green-600' : 'text-amber-600'}>{idea.cost}</span></span>
                   <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                   <span>Dif: <span className="text-gray-700 dark:text-gray-300">{idea.difficulty}</span></span>
                </div>
              </div>
            </div>
          ))}

          {filteredIdeas.length === 0 && (
             <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
                <Icon name="search_off" className="text-5xl mb-2 opacity-50"/>
                <p>Nenhuma ideia encontrada.</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;