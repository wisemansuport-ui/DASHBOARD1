import React, { useState } from 'react';
import { Users, Link as LinkIcon, Star, TrendingUp, TrendingDown, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface OperatorData {
  id: string;
  rank: number;
  initials: string;
  name: string;
  badge: string;
  badgeColor: string;
  deps: number;
  metas: number;
  profitPerConta: number;
  totalProfit: number;
}

const operatorData: OperatorData[] = [
  { id: '1', rank: 1, initials: 'R', name: 'Rafael Lima', badge: 'Top performer', badgeColor: 'text-primary', deps: 70, metas: 2, profitPerConta: 7.13, totalProfit: 499.20 },
  { id: '2', rank: 2, initials: 'J', name: 'Juliana Costa', badge: 'Top performer', badgeColor: 'text-primary', deps: 50, metas: 2, profitPerConta: 7.46, totalProfit: 372.80 },
  { id: '3', rank: 3, initials: 'L', name: 'Lucas Mendes', badge: 'Oscilando', badgeColor: 'text-warning', deps: 20, metas: 1, profitPerConta: -2.11, totalProfit: -42.30 },
];

const Operators = () => {
  const [activeTab, setActiveTab] = useState('Ranking');

  const handleCopyLink = () => {
    const inviteLink = `https://nytzer.com/register?r=${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    navigator.clipboard.writeText(inviteLink);
    toast.success("Link único gerado e copiado para a área de transferência!");
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-12 relative z-10 w-full">
      {/* Header & Link Gen */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl relative overflow-hidden shrink-0 shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
            <Users className="w-6 h-6 text-primary relative z-10" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Operadores de Elite</h1>
            <p className="text-sm text-muted-foreground mt-1">Ranking por lucro e performance individual da equipe.</p>
          </div>
        </div>

        <button 
          onClick={handleCopyLink}
          className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 shadow-[0_0_10px_hsl(var(--primary)/0.1)]"
        >
          <LinkIcon className="w-4 h-4" />
          Gerar Link de Cadastro
        </button>
      </div>

      {/* Tabs */}
      <div className="flex bg-muted/20 border border-border/50 rounded-lg p-1.5 overflow-x-auto hide-scrollbar">
        {['Ranking', 'Equipe', 'Folha de pagamento', 'Configurações'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap flex-1 text-center ${
              activeTab === tab 
                ? 'bg-muted text-foreground shadow-sm border border-border/50' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === 'Ranking' && (
        <div className="space-y-6 animate-fade-in">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="glass-card rounded-xl p-5 border-border/40 hover:border-border/80 transition-colors bg-card/40 backdrop-blur-md">
           <p className="text-[10px] text-muted-foreground font-bold tracking-widest mb-3 uppercase">Operadores</p>
           <p className="text-3xl font-extrabold text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">3</p>
         </div>
         <div className="glass-card rounded-xl p-5 border-border/40 hover:border-border/80 transition-colors bg-card/40 backdrop-blur-md">
           <p className="text-[10px] text-muted-foreground font-bold tracking-widest mb-3 uppercase">Ativos</p>
           <p className="text-3xl font-extrabold text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">2</p>
         </div>
         <div className="glass-card rounded-xl p-5 border-border/40 hover:border-border/80 transition-colors bg-card/40 backdrop-blur-md">
           <p className="text-[10px] text-muted-foreground font-bold tracking-widest mb-3 uppercase">Depositantes Totais</p>
           <p className="text-3xl font-extrabold text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">160</p>
         </div>
         <div className="glass-card bg-primary/5 rounded-xl p-5 border-primary/20 hover:border-primary/50 transition-colors backdrop-blur-md shadow-[0_0_15px_hsl(var(--primary)/0.05)]">
           <p className="text-[10px] text-primary font-bold tracking-widest mb-3 uppercase drop-shadow-[0_0_5px_hsl(var(--primary)/0.5)]">Lucro Equipe</p>
           <p className="text-3xl font-extrabold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">R$ 829,70</p>
         </div>
      </div>

      {/* Alert */}
      <div className="glass-card bg-primary/10 border-primary/30 p-4 rounded-xl flex items-center gap-3 shadow-[0_0_10px_hsl(var(--primary)/0.1)]">
        <div className="w-2 h-2 rounded-full bg-primary shrink-0 shadow-[0_0_8px_hsl(var(--primary)/0.8)] animate-pulse" />
        <p className="text-xs font-semibold text-primary/90">Este é o ranking global da sua equipe. Os dados financeiros refletem a performance bruta para o administrador.</p>
      </div>

      {/* Ranking List */}
      <div className="pt-2">
        <div className="space-y-4">
          {operatorData.map((op) => (
            <div key={op.id} className="glass-card py-5 px-6 rounded-2xl border-border/40 hover:bg-card/70 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group">
              
              <div className="flex items-center gap-4 w-full md:w-auto flex-1 relative z-10">
                
                {/* Ranking Circular Position */}
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0 bg-muted rounded-full border border-border/50 font-bold text-foreground font-mono">
                  {op.rank}
                </div>
                
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0 bg-primary/10 rounded-full border border-primary/30 font-bold text-primary text-xl">
                  {op.initials}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-lg font-extrabold text-foreground tracking-tight">{op.name}</span>
                    {op.badge === 'Top performer' ? <TrendingUp className="w-3.5 h-3.5 text-primary" /> : <TrendingDown className="w-3.5 h-3.5 text-warning" />}
                    <span className={`text-[9px] px-2 py-0.5 rounded bg-muted border border-border/50 font-bold uppercase tracking-wider ${op.badgeColor}`}>
                      {op.badge}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-medium">
                    <span><span className="text-foreground font-bold">{op.deps}</span> deps</span>
                    <span className="px-1 text-border/50">•</span>
                    <span><span className="text-foreground font-bold">{op.metas}</span> metas</span>
                    <span className="px-1 text-border/50">•</span>
                    <span className="px-1.5 py-0.5 bg-black/40 rounded border border-border/50">
                      R$ {op.profitPerConta.toFixed(2).replace('.', ',')}/conta
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full bg-border/40 rounded-full h-1 overflow-hidden mt-3 shadow-inner">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 relative" 
                      style={{ 
                        width: op.totalProfit > 0 ? `${Math.min(100, Math.max(10, op.totalProfit / 5))}%` : '15%', 
                        backgroundColor: op.totalProfit > 0 ? 'rgba(52, 211, 153, 0.8)' : 'rgba(248, 113, 113, 0.8)' 
                      }} 
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between md:flex-col md:items-end w-full md:w-auto pt-5 md:pt-0 border-t border-border/50 md:border-t-0 mt-3 md:mt-0 relative z-10">
                <div className="text-right mt-1">
                  <p className={`text-xl font-extrabold drop-shadow-md ${op.totalProfit > 0 ? 'text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]' : 'text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.3)]'}`}>
                    {op.totalProfit > 0 ? '+' : ''}R$ {op.totalProfit.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-[9px] text-muted-foreground font-bold tracking-[0.1em] uppercase hover:text-muted-foreground transition-colors mt-0.5">
                    {op.deps} depositantes
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
          </div>
        </div>
      )}

      {activeTab === 'Folha de pagamento' && (
        <div className="animate-fade-in space-y-6 mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-6">
            <div className="flex gap-2 p-1.5 bg-black/20 rounded-lg w-fit border border-border/40">
              {(['Hoje', '7 dias', '30 dias', 'Tudo']).map(f => (
                <button 
                  key={f}
                  className={`px-4 py-1.5 text-xs font-bold rounded transition-colors ${f === '30 dias' ? 'bg-muted/50 text-foreground shadow-lg border border-border/50' : 'text-muted-foreground hover:bg-muted/30'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
             <p className="text-sm font-medium text-muted-foreground">Modelo: <strong className="text-foreground">R$ 2,00 por depositante (NORMAL) e R$ 1,00 (DEP BAIXO)</strong></p>
             <div className="text-right">
                <p className="text-2xl font-extrabold text-emerald-400">R$ 280,00</p>
                <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mt-1">Total a pagar (demo)</p>
             </div>
          </div>

          <div className="glass-card bg-red-950/20 border-red-900/50 p-4 rounded-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <p className="text-xs font-semibold text-red-400">Exemplo de operacao em andamento — os dados reais comecam quando voce criar sua primeira meta.</p>
          </div>

          <div className="glass-card rounded-2xl border-border/40 overflow-hidden mt-6 hide-scrollbar overflow-x-auto">
             <table className="w-full text-sm text-left min-w-[700px]">
                <thead className="text-[10px] uppercase font-bold text-muted-foreground bg-muted/10 border-b border-border/40">
                   <tr>
                      <th className="px-6 py-4">Operador</th>
                      <th className="px-6 py-4 text-center">Metas</th>
                      <th className="px-6 py-4 text-center">Deps</th>
                      <th className="px-6 py-4 text-right">Lucro</th>
                      <th className="px-6 py-4 text-right">A Pagar</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                   {operatorData.map(op => {
                      // Demo math
                      const payout = op.deps * 2; // Assuming all normal for demo
                      return (
                         <tr key={op.id} className="hover:bg-muted/10 transition-colors">
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">{op.initials}</div>
                                  <div>
                                     <p className="font-bold text-foreground">{op.name}</p>
                                     <p className="text-xs text-muted-foreground">{op.name.split(' ')[0].toLowerCase()}@email.com</p>
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-4 text-center font-bold">{op.metas}</td>
                            <td className="px-6 py-4 text-center font-bold">{op.deps}</td>
                            <td className={`px-6 py-4 text-right font-bold ${op.totalProfit > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                               {op.totalProfit > 0 ? '+' : ''}R$ {op.totalProfit.toFixed(2).replace('.', ',')}
                            </td>
                            <td className="px-6 py-4 text-right">
                               <p className="font-extrabold text-red-400">R$ {payout.toFixed(2).replace('.', ',')}</p>
                               <p className="text-[9px] text-muted-foreground font-medium mt-1">{op.deps} x R$ 2,00</p>
                            </td>
                         </tr>
                      )
                   })}
                </tbody>
                <tfoot className="bg-muted/10 border-t border-border/40">
                   <tr>
                      <td className="px-6 py-4 font-bold text-foreground font-xl">Total</td>
                      <td className="px-6 py-4 text-center font-bold">5</td>
                      <td className="px-6 py-4 text-center font-bold">140</td>
                      <td className="px-6 py-4 text-right font-bold text-emerald-400">R$ 829,70</td>
                      <td className="px-6 py-4 text-right font-extrabold text-red-500 text-lg">R$ 280,00</td>
                   </tr>
                </tfoot>
             </table>
          </div>
        </div>
      )}

      {activeTab !== 'Ranking' && activeTab !== 'Folha de pagamento' && (
        <div className="glass-card p-16 mt-8 text-center rounded-2xl border-border/40 flex flex-col items-center justify-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-muted/30 border border-border/50 flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-muted-foreground opacity-50" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Aba em Desenvolvimento</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Os dados para <strong>{activeTab}</strong> serão populados automaticamente após o encerramento do primeiro ciclo mensal de faturamento.
          </p>
        </div>
      )}
    </div>
  );
};

export default Operators;
