import './DecisionGraph.css';

// Signature element: a small decision tree drawn as nodes + edges.
// It reflects the decision-engine work that defines my day job, and
// doubles as the hero's focal point. Pure SVG, no dependencies.

interface Node {
  id: string;
  x: number;
  y: number;
  kind: 'root' | 'branch' | 'leaf-yes' | 'leaf-no';
}

const nodes: Node[] = [
  { id: 'root', x: 150, y: 30, kind: 'root' },
  { id: 'b1', x: 80, y: 110, kind: 'branch' },
  { id: 'b2', x: 220, y: 110, kind: 'branch' },
  { id: 'l1', x: 40, y: 190, kind: 'leaf-no' },
  { id: 'l2', x: 120, y: 190, kind: 'leaf-yes' },
  { id: 'l3', x: 180, y: 190, kind: 'leaf-yes' },
  { id: 'l4', x: 260, y: 190, kind: 'leaf-no' },
];

const edges: [string, string][] = [
  ['root', 'b1'],
  ['root', 'b2'],
  ['b1', 'l1'],
  ['b1', 'l2'],
  ['b2', 'l3'],
  ['b2', 'l4'],
];

const byId = (id: string) => nodes.find((n) => n.id === id)!;

export default function DecisionGraph() {
  return (
    <svg
      className="graph"
      viewBox="20 20 300 200"
      role="img"
      aria-label="A small decision tree branching from a root node into yes and no leaves"
    >
      <g className="graph-edges">
        {edges.map(([from, to], i) => {
          const a = byId(from);
          const b = byId(to);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          );
        })}
      </g>
      <g className="graph-nodes">
        {nodes.map((n, i) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.kind === 'root' ? 9 : 6.5}
            className={`node node-${n.kind}`}
            style={{ animationDelay: `${0.2 + i * 0.09}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
