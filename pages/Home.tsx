import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, ideas } from '../data';
import { Icon } from '../components/Icon';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const trendingIdeas = ideas.slice(0, 4);

  return (
    <div className="flex flex-col pb-24">
      {/* App Bar */}
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-white/90 dark:bg-gray-900/90 px-4 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Icon name="account_balance_wallet" className="text-primary text-3xl" />
          <h1 className="text-xl font-bold tracking-tight">RendaExtra</h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme} 
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            aria-label="Toggle Dark Mode"
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
          </button>
          <button onClick={() => navigate('/search')} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon name="search" />
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="px-4 pt-6">
          <div 
            className="relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl bg-cover bg-center p-6 sm:aspect-[2/1] shadow-lg group cursor-pointer"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVWqC9ouTEGRH5SU0GGeF6PoA2jbPQdnousyuGpHpN2khrOGHNhgkUgrMqCvYnWcCVgv-eGwvbG_VvBN7j7GZdKiUzYioudkLL60vSKtvjqrBCxXmmszdG37CfJW_n_NeF_rn4Fvu5u_xp2zlI137K3wQh9x--pbwIUG2_SRqkDkmHVI2y1vgiwgaoM3-9O7rHL1jlXxQHZnstMy9IY5OeQLaVVzZHqQ4rTOYRnztedleMhF0VL-jqG9qi59nReL7f2EatfWRWIh0')` }}
            onClick={() => navigate('/quiz')}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity group-hover:via-black/50"></div>
            <div className="relative z-[1] flex flex-col gap-2 text-white">
              <h2 className="text-3xl font-black leading-tight tracking-tighter md:text-4xl drop-shadow-md">
                Sua jornada para a renda extra começa aqui.
              </h2>
              <p className="text-sm font-medium text-gray-100 opacity-90">
                Descubra 300 ideias para ganhar mais com pouco investimento.
              </p>
              <button className="mt-2 w-fit rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-md hover:bg-gray-100 transition-colors">
                Faça o Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="pt-8">
          <div className="flex items-center justify-between px-4 pb-3">
             <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Explore por Categoria</h3>
          </div>
          
          <div className="flex overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 gap-3 snap-x snap-mandatory">
            {categories.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => navigate(`/search?category=${cat.searchKey}`)}
                className="group flex min-w-[140px] snap-start cursor-pointer flex-col gap-3 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/40">
                  <Icon name={cat.icon} className="text-2xl transition-transform duration-300" />
                </div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-primary">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Ideas */}
        <div className="pt-6">
          <h3 className="px-4 pb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Ideias em Alta</h3>
          <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3">
            {trendingIdeas.map((idea) => (
              <div 
                key={idea.id}
                onClick={() => navigate(`/idea/${idea.id}`)}
                className="group flex cursor-pointer flex-col gap-3 rounded-2xl bg-white dark:bg-gray-800 p-2 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 transition-all hover:shadow-md"
              >
                <div className="relative w-full overflow-hidden rounded-xl">
                  <img 
                    src={idea.image} 
                    alt={idea.title} 
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {idea.isNew && (
                    <div className="absolute right-2 top-2 rounded-full bg-yellow-400/90 px-2 py-0.5 text-[10px] font-bold text-black backdrop-blur-sm">
                      NOVO
                    </div>
                  )}
                </div>
                <div className="flex flex-col px-1 pb-2">
                  <h4 className="font-bold text-sm leading-snug line-clamp-2">{idea.title}</h4>
                  <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Icon name="attach_money" className="text-[16px]" />
                      <span className="font-medium text-[10px]">{idea.cost === 'Baixo' ? '$' : '$$'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="signal_cellular_alt" className="text-[16px]" />
                      <span className="font-medium text-[10px]">{idea.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mx-4 mt-8 mb-8 rounded-2xl bg-primary/10 p-6 dark:bg-primary/20 border border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">300+</span>
              <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">Oportunidades</span>
            </div>
            <div className="h-10 w-px bg-primary/30"></div>
            <div className="flex flex-col text-right">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Até R$ 3k</span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Potencial inicial</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-8 text-center text-gray-400 dark:text-gray-600">
          <div className="flex justify-center gap-4 mb-4">
            <Icon name="rocket_launch" />
            <Icon name="favorite" />
            <Icon name="bolt" />
          </div>
          <p className="text-xs">© 2024 RendaExtra App</p>
          <p className="text-[10px] mt-1">Construa seu futuro hoje.</p>
        </div>
      </main>

      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-30">
        <button 
          onClick={() => navigate('/search')}
          className="flex h-14 items-center gap-2 rounded-full bg-primary pl-5 pr-6 text-white shadow-lg shadow-primary/40 transition-transform active:scale-95 hover:bg-primary-dark"
        >
          <Icon name="view_list" />
          <span className="font-bold">Ver todas</span>
        </button>
      </div>
    </div>
  );
};

export default Home;