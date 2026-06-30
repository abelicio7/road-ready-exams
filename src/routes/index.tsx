import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2, XCircle, Zap, Smartphone, FileText,
  BookOpen, Clock, Brain, Wallet, AlertTriangle, ChevronDown, Lock,
  Download, Sparkles,
} from "lucide-react";
import heroProduct from "@/assets/hero-product.png";
import solutionMockup from "@/assets/solution-mockup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exames Teóricos Resolvidos — Prepare-se para o Exame de Condução" },
      { name: "description", content: "25 exames teóricos resolvidos com respostas comentadas. Estude pelo celular, ganhe confiança e chegue preparado para o exame de condução. Apenas 197 MT." },
      { property: "og:title", content: "Exames Teóricos Resolvidos — Material Digital de Estudo" },
      { property: "og:description", content: "25 exames resolvidos, respostas comentadas e acesso imediato por apenas 197 MT." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const CHECKOUT_URL = "https://www.ensinapay.com/checkout/0ce1b078-a7ba-4c32-ac14-2a1febd5cbcc";
const scrollToBuy = () => {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  const go = () => { window.location.href = CHECKOUT_URL; };
  if (fbq) {
    fbq("track", "InitiateCheckout", { value: 197, currency: "MZN" });
    setTimeout(go, 350);
  } else {
    go();
  }
};

function Landing() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--color-ink)] font-[var(--font-sans)] antialiased">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Receive />
      <Compare />
      <Faq />
      <Pricing />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[color:var(--color-brand-green)] text-white shadow-sm">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="font-[var(--font-display)] text-base font-extrabold tracking-tight sm:text-lg">
            Exames Resolvidos
          </span>
        </div>
        <button
          onClick={scrollToBuy}
          className="rounded-full bg-[color:var(--color-brand-orange)] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[color:var(--color-brand-orange-dark)] hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Quero Receber
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--color-brand-green-light)] via-white to-white" />
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-[color:var(--color-brand-orange)]/10 blur-3xl" />
      <div className="absolute -top-10 -left-24 -z-10 h-96 w-96 rounded-full bg-[color:var(--color-brand-green)]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-green)]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--color-brand-green)] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              EXAMES TEÓRICOS RESOLVIDOS
            </div>

            <h1 className="mt-5 font-[var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
              Pare de estudar sem direção.{" "}
              <span className="bg-gradient-to-r from-[color:var(--color-brand-green)] to-[color:var(--color-brand-green-dark)] bg-clip-text text-transparent">
                Pratique com exames resolvidos
              </span>{" "}
              e chegue muito mais preparado.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--color-ink-soft)]/80 sm:text-lg">
              Muitos candidatos reprovam por falta de prática com questões semelhantes às do exame teórico.
              Este material reúne <strong className="text-[color:var(--color-ink)]">25 exames resolvidos</strong> para você estudar de forma organizada, compreender melhor o conteúdo e ganhar confiança antes da prova.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={scrollToBuy}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-orange)] px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-orange-dark)] hover:shadow-xl hover:shadow-orange-500/30 sm:text-lg"
              >
                <CheckCircle2 className="h-5 w-5" />
                Quero Receber Agora
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {[
                "Acesso Imediato", "Material Digital", "Estude Pelo Celular", "PDF de Fácil Leitura",
              ].map((t) => (
                <div key={t} className="flex items-center gap-1.5 rounded-full border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-[color:var(--color-ink-soft)] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--color-brand-green)]" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 mx-auto h-[90%] w-[90%] rounded-[3rem] bg-gradient-to-br from-[color:var(--color-brand-green)]/20 via-[color:var(--color-brand-orange)]/10 to-transparent blur-2xl" />
            <img
              src={heroProduct}
              alt="Capa do produto Exames Teóricos Resolvidos"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-md drop-shadow-2xl lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { icon: AlertTriangle, t: "Medo de reprovar", d: "A insegurança aumenta a cada dia mais perto da prova." },
    { icon: Brain, t: "Não saber como estudar", d: "Sem um caminho claro, o conteúdo parece interminável." },
    { icon: Wallet, t: "Gastar dinheiro novamente", d: "Reprovar significa pagar e marcar o exame outra vez." },
    { icon: Clock, t: "Ansiedade antes da prova", d: "O nervosismo cresce porque falta prática real." },
    { icon: BookOpen, t: "Só Código da Estrada", d: "Ler sem praticar não prepara para o estilo das questões." },
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-brand-orange)]">O Problema</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Você também passa por isso?
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--color-brand-orange-light)] text-[color:var(--color-brand-orange)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const benefits = [
    "Treinar com 25 exames resolvidos",
    "Entender a lógica das respostas",
    "Revisar rapidamente antes da prova",
    "Estudar onde e quando quiser",
    "Ganhar muito mais confiança",
  ];
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-brand-green-light)]/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img
              src={solutionMockup}
              alt="Mockup do material em celular e tablet"
              width={1024}
              height={1024}
              loading="lazy"
              className="mx-auto w-full max-w-md drop-shadow-2xl lg:max-w-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-brand-green)]">A Solução</p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A forma mais inteligente de se preparar.
            </h2>
            <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/80 sm:text-lg">
              Com este material você poderá:
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color:var(--color-brand-green)] text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Receive() {
  const items = [
    { icon: FileText, t: "25 Exames Resolvidos", d: "Material completo para treinar." },
    { icon: BookOpen, t: "Questões Organizadas", d: "Estrutura clara e fácil de seguir." },
    { icon: Brain, t: "Respostas Comentadas", d: "Compreenda a lógica de cada resposta." },
    { icon: Download, t: "Arquivo em PDF", d: "Baixe e estude offline quando quiser." },
    { icon: Zap, t: "Acesso Imediato", d: "Receba logo após o pagamento." },
    { icon: Smartphone, t: "Compatível com Celular", d: "Estude no telemóvel, tablet ou PC." },
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-brand-orange)]">Conteúdo</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            O que você vai receber
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-white to-[color:var(--color-brand-green-light)]/30 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--color-brand-green)] text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const without = ["Estuda sem prática", "Insegurança constante", "Revisão difícil", "Pouca familiaridade com as questões"];
  const withIt = ["Estudo organizado", "Muito mais prática", "Revisão rápida e eficaz", "Confiança total antes do exame"];
  return (
    <section className="bg-[color:var(--color-ink)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-brand-orange)]">Diferenciais</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            A diferença é clara.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-400">Sem o material</h3>
            <ul className="mt-5 space-y-3">
              {without.map((t) => (
                <li key={t} className="flex items-start gap-3 text-base text-white/70">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-brand-green)]/40 bg-gradient-to-br from-[color:var(--color-brand-green)]/20 to-[color:var(--color-brand-orange)]/10 p-8 shadow-2xl">
            <div className="absolute right-4 top-4 rounded-full bg-[color:var(--color-brand-orange)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
              Recomendado
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-brand-green)]">Com o material</h3>
            <ul className="mt-5 space-y-3">
              {withIt.map((t) => (
                <li key={t} className="flex items-start gap-3 text-base font-medium text-white">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-brand-green)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: "Como recebo o material?", a: "Após a confirmação do pagamento, você recebe o link de acesso ao PDF imediatamente." },
    { q: "É em PDF?", a: "Sim. O material é um arquivo PDF otimizado para leitura em qualquer dispositivo." },
    { q: "Posso estudar pelo celular?", a: "Claro. O PDF é totalmente compatível com celular, tablet e computador." },
    { q: "Recebo imediatamente?", a: "Sim, o acesso é liberado em poucos minutos após o pagamento ser confirmado." },
    { q: "Preciso de internet depois do download?", a: "Não. Após baixar o PDF, pode estudar offline em qualquer lugar." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-brand-orange)]">FAQ</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[color:var(--color-brand-green-light)]/40"
              >
                <span className="text-base font-bold sm:text-lg">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--color-brand-green)] transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="border-t border-black/5 px-5 py-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/80 sm:text-base">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "Acesso Imediato",
    "Pagamento Seguro",
    "Arquivo em PDF",
    "Compatível com Celular",
    "Suporte via WhatsApp",
  ];
  return (
    <section id="comprar" className="relative overflow-hidden bg-gradient-to-br from-[color:var(--color-brand-green)] via-[color:var(--color-brand-green-dark)] to-[color:var(--color-ink)] py-20 text-white sm:py-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--color-brand-orange)]/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--color-brand-green)]/40 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-orange)] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            Oferta Especial — Apenas 197 MT
          </div>
          <h2 className="mt-6 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Comece a estudar hoje mesmo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            Por apenas <strong className="text-white">197 MT</strong>, você recebe acesso imediato ao Pack Digital Exames Teóricos Resolvidos — estude no seu ritmo pelo celular, tablet ou computador.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-1 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.75rem] bg-white p-8 text-[color:var(--color-ink)] sm:p-12">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-brand-orange)]">Investimento Único</p>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="font-[var(--font-display)] text-7xl font-black tracking-tighter sm:text-8xl">
                  197
                </span>
                <span className="font-[var(--font-display)] text-3xl font-extrabold text-[color:var(--color-brand-green)] sm:text-4xl">
                  MT
                </span>
              </div>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]/60">Pagamento único · sem mensalidades</p>
            </div>

            <ul className="mx-auto mt-8 max-w-md space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl bg-[color:var(--color-brand-green-light)]/50 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--color-brand-green)]" />
                  <span className="text-sm font-semibold sm:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToBuy(); }}
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--color-brand-orange)] px-6 py-5 text-base font-extrabold uppercase tracking-wide text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-orange-dark)] hover:shadow-2xl sm:text-lg"
            >
              <CheckCircle2 className="h-5 w-5" />
              Quero Receber Agora por 197 MT
            </a>

            <p className="mt-6 text-center text-xs leading-relaxed text-[color:var(--color-ink-soft)]/60">
              Invista apenas 197 MT hoje para estudar de forma mais organizada e chegar mais preparado para o exame teórico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[color:var(--color-brand-green)] text-white">
            <BookOpen className="h-4 w-4" />
          </div>
          <span className="font-[var(--font-display)] text-sm font-extrabold">Exames Resolvidos</span>
        </div>
        <p className="text-xs text-[color:var(--color-ink-soft)]/60">
          © {new Date().getFullYear()} Exames Teóricos Resolvidos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
