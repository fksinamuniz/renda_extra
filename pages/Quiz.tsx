import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const steps = [
    {
      question: "Qual sua preferência de trabalho?",
      options: [
        { label: "Trabalho Manual", icon: "handyman", value: "manual" },
        { label: "Trabalho Online", icon: "laptop_mac", value: "online" },
        { label: "Serviços", icon: "room_service", value: "servicos" }
      ]
    },
    {
      question: "Qual seu principal objetivo?",
      options: [
        { label: "Dinheiro Rápido", icon: "bolt", value: "rapido" },
        { label: "Longo Prazo", icon: "trending_up", value: "longo" },
        { label: "Hobby Lucrativo", icon: "palette", value: "hobby" }
      ]
    },
    {
      question: "Quanto você pode investir?",
      options: [
        { label: "Nada (R$ 0)", icon: "money_off", value: "zero" },
        { label: "Pouco (até R$ 100)", icon: "savings", value: "baixo" },
        { label: "Investidor (R$ 500+)", icon: "attach_money", value: "medio" }
      ]
    }
  ];

  const handleSelect = (value: string) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Finish quiz - for now just go to search page with a fake loading state
      navigate('/search');
    }
  };

  const currentStep = steps[step];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="flex items-center p-4">
        <button onClick={() => step > 0 ? setStep(step - 1) : navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <Icon name="arrow_back" />
        </button>
        <div className="flex-1 mx-4 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        <button onClick={() => navigate('/')} className="p-2 text-gray-400">
          <Icon name="close" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full pb-10">
        <div className="text-center mb-10 animate-fade-in">
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Passo {step + 1} de {steps.length}</span>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">
            {currentStep.question}
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {currentStep.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option.value)}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all active:scale-[0.98] text-left group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors text-gray-500">
                <Icon name={option.icon} className="text-2xl" />
              </div>
              <span className="text-lg font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Quiz;