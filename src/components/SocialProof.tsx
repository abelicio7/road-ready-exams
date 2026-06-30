import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const NAMES = [
  "Emir Joaquim", "Carla Ernesto", "Nelson António", "Fátima Mussa", "Júlio Mabunda",
  "Celso Cumbe", "Sheila Cossa", "Armando Macuácua", "Anabela Sitoe", "Ernesto Baloi",
  "Luís Mondlane", "Sandra Chissano", "Joaquim Nhantumbo", "Dércio Mucavele",
  "Domingos Matavele", "Lídia Matola", "Ismael Macamo", "Eunice Bila", "Mateus Ubisse",
  "Teresa Mahumane", "Samuel Chauque", "Celina Mangue", "Horácio Zandamela",
  "Natália Tembe", "Eduardo Machava", "Elisa Massango", "Bernardino Mucavel",
  "Manuel Cumbane", "Rosa Mahumane", "Alberto Guambe",
];

const ACTIONS = [
  "está a adquirir o Pack Exames Teóricos Resolvidos",
  "iniciou a sua preparação para o exame",
  "garantiu acesso ao material",
  "começou a estudar agora",
  "adquiriu o Pack de Exames",
  "iniciou os estudos",
  "começou a praticar",
  "está a preparar-se para o exame",
  "acabou de adquirir o material",
];

const TIMES = ["há instantes", "há 1 minuto", "há 2 minutos", "recentemente", "agora mesmo"];

const DURATION_MS = 5000;
const MIN_GAP_MS = 12000;
const MAX_GAP_MS = 25000;

const pickRandom = <T,>(arr: T[], exclude?: T): T => {
  let pick = arr[Math.floor(Math.random() * arr.length)];
  if (exclude !== undefined && arr.length > 1) {
    while (pick === exclude) pick = arr[Math.floor(Math.random() * arr.length)];
  }
  return pick;
};

const getInitials = (name: string) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

type Notif = { id: number; name: string; action: string; time: string };

export default function SocialProof() {
  const [notif, setNotif] = useState<Notif | null>(null);
  const [visible, setVisible] = useState(false);
  const lastNameRef = useRef<string | undefined>(undefined);
  const idRef = useRef(0);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const show = () => {
      if (cancelled) return;
      if (document.hidden) {
        nextTimer = setTimeout(show, 3000);
        return;
      }
      const name = pickRandom(NAMES, lastNameRef.current);
      lastNameRef.current = name;
      idRef.current += 1;
      setNotif({
        id: idRef.current,
        name,
        action: pickRandom(ACTIONS),
        time: pickRandom(TIMES),
      });
      setVisible(true);

      hideTimer = setTimeout(() => {
        setVisible(false);
        const gap = MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);
        nextTimer = setTimeout(show, gap);
      }, DURATION_MS);
    };

    nextTimer = setTimeout(show, 4000);
    return () => {
      cancelled = true;
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  if (!notif) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-[320px] transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
        <div className="flex items-start gap-3 p-3.5">
          <div className="relative shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white">
              {getInitials(notif.name)}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-green ring-2 ring-white">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-snug text-ink">
              <span className="font-semibold">{notif.name}</span>{" "}
              <span className="text-ink-soft/80">{notif.action}</span>
            </p>
            <p className="mt-1 text-xs text-ink-soft/50">{notif.time}</p>
          </div>
        </div>
        <div className="h-1 w-full bg-brand-green-light">
          <div
            key={notif.id}
            className="h-full bg-brand-green"
            style={{ animation: `sp-progress ${DURATION_MS}ms linear forwards` }}
          />
        </div>
      </div>
      <style>{`@keyframes sp-progress { from { width: 100%; } to { width: 0%; } }`}</style>
    </div>
  );
}
