import LiveMetricsTicker from '@/components/LiveMetricsTicker';

const tickerItems = [
  '.NET Core',
  'Angular 21',
  'CQRS',
  'MediatR',
  'Clean Architecture',
  'AI Integration',
  'Semantic Kernel',
  'TypeScript',
  'Redis',
  'Docker',
  'SignalR',
  'RESTful APIs',
  'Entity Framework',
  'Git/GitHub',
  'SQL Server',
  'Bootstrap',
  'Problem Solving',
  'Agile',
  'Team Leadership',
];

export default function TickerDivider() {
  return (
    <div className="bg-surface-dark border-y border-charcoal py-4 overflow-hidden">
      <LiveMetricsTicker items={tickerItems} speed={0.8} />
    </div>
  );
}
