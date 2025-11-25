import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-end pb-12 overflow-hidden bg-gray-900">
      {/* Background Image with animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 animate-fade-in"
        style={{ 
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVWqC9ouTEGRH5SU0GGeF6PoA2jbPQdnousyuGpHpN2khrOGHNhgkUgrMqCvYnWcCVgv-eGwvbG_VvBN7j7GZdKiUzYioudkLL60vSKtvjqrBCxXmmszdG37CfJW_n_NeF_rn4Fvu5u_xp2zlI137K3wQh9x--pbwIUG2_SRqkDkmHVI2y1vgiwgaoM3-9O7rHL1jlXxQHZnstMy9IY5OeQLaVVzZHqQ4rTOYRnztedleMhF0VL-jqG9qi59nReL7f2EatfWRWIh0')` 
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-6 w-full max-w-md mx-auto flex flex-col items-start">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10 shadow-lg">
           <Icon name="verified" className="text-primary text-lg" />
           <span className="text-white text-xs font-bold tracking-wide uppercase">Oportunidades Reais</span>
        </div>
        
        <h1 className="text-5xl font-black text-white leading-[1.1] mb-6 tracking-tighter drop-shadow-lg">
          Renda<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Extra</span>
          <span className="text-primary">.</span>
        </h1>
        
        <p className="text-gray-200 text-lg mb-10 font-medium leading-relaxed max-w-[90%] drop-shadow-md">
          Transforme suas habilidades em lucro. Descubra mais de 300 ideias para começar hoje.
        </p>
        
        <div className="flex flex-col w-full gap-4">
          <button 
            onClick={() => navigate('/home')}
            className="w-full flex items-center justify-between bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] group"
          >
            <span className="text-lg">Começar Agora</span>
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <Icon name="arrow_forward" />
            </div>
          </button>
          
          <button 
            onClick={() => navigate('/quiz')}
            className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 transition-colors hover:text-primary active:scale-[0.98]"
          >
            <span>Descobrir meu perfil ideal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;