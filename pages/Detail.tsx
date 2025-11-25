import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ideas } from '../data';
import { Icon } from '../components/Icon';
import { useTheme } from '../context/ThemeContext';

const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const idea = ideas.find(i => i.id === id);

  if (!idea) {
    return <div className="p-8 text-center">Ideia não encontrada. <button onClick={() => navigate('/')} className="text-primary underline">Voltar</button></div>;
  }

  const handleShare = () => {
    // URL oficial de produção para garantir que o link funcione para qualquer pessoa
    const shareUrl = `https://fksinamuniz.github.io/renda_extra/#/idea/${idea.id}`;

    if (navigator.share) {
      navigator.share({
        title: `RendaExtra: ${idea.title}`,
        text: `Olha essa ideia de renda extra: ${idea.shortDescription}`,
        url: shareUrl,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center bg-white/80 dark:bg-gray-900/80 p-4 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 gap-2">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">
          <Icon name="arrow_back" className="text-xl" />
        </button>
        <h1 className="flex-1 text-center text-base font-bold leading-tight tracking-tight line-clamp-1 px-2">{idea.title}</h1>
        
        <button 
          onClick={handleShare} 
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
          aria-label="Compartilhar"
        >
          <Icon name="share" />
        </button>

         <button 
          onClick={toggleTheme} 
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
        >
          <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
        </button>
      </header>

      <main className="w-full max-w-2xl mx-auto">
        {/* Main Image */}
        <div className="p-4">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm bg-gray-100">
            <img src={idea.image} alt={idea.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 px-4 mb-6">
          <div className="flex flex-col gap-2 rounded-xl bg-gray-50 dark:bg-gray-800 p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-primary">
              <Icon name="payments" />
              <span className="text-xs font-bold uppercase tracking-wide opacity-80">Lucro Estimado</span>
            </div>
            <p className="text-base font-semibold text-gray-900 dark:text-white leading-tight">{idea.profit}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-gray-50 dark:bg-gray-800 p-4 border border-gray-100 dark:border-gray-700">
             <div className="flex items-center gap-2 text-amber-500">
              <Icon name="account_balance_wallet" />
              <span className="text-xs font-bold uppercase tracking-wide opacity-80">Investimento</span>
            </div>
            <p className="text-base font-semibold text-gray-900 dark:text-white leading-tight">{idea.costValue}</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="px-4 space-y-6">
          <section>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Icon name="info" className="text-gray-400 text-xl" />
              O que é?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-normal bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              {idea.fullDescription}
            </p>
          </section>

          <section>
             <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Icon name="check_circle" className="text-gray-400 text-xl" />
              O que você precisa?
            </h2>
            <ul className="space-y-3">
              {idea.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-primary dark:bg-green-900/30 dark:text-green-400">
                    <Icon name="check" className="text-xs font-bold" />
                  </span>
                  <span className="flex-1 pt-0.5">{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
             <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Icon name="stairs" className="text-gray-400 text-xl" />
              Como começar?
            </h2>
             <div className="space-y-4 relative pl-2">
               <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              {idea.steps.map((step, i) => (
                <div key={i} className="relative flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary font-bold text-xs z-10">
                    {i + 1}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <p className="text-sm text-gray-700 dark:text-gray-200">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

           <section>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Icon name="lightbulb" className="text-yellow-500 text-xl" />
              Dica de Ouro
            </h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800/30">
              <p className="text-sm text-gray-700 dark:text-gray-200 italic">"{idea.tips}"</p>
            </div>
          </section>
        </div>
      </main>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-30">
        <div className="max-w-2xl mx-auto">
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
            <Icon name="rocket_launch" />
            <span>Vou Tentar!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;