'use client';

import { useEffect, useState } from 'react';
import type {
  HelloResponse,
  HealthResponse,
} from '@nx-next-nest-prisma-ory-template/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3100';

export default function DispatcherPage() {
  const [data, setData] = useState<HelloResponse | null>(null);
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => res.json())
      .then(setData)
      .catch((err) => setError(err.message));

    fetch(`${API_URL}/api/health`)
      .then((res) => res.json())
      .then(setHealth)
      .catch(() => setHealth({ api: 'ok', database: 'error', timestamp: '' }));
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-slate-800 p-8 text-red-400 font-mono">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800 p-8 text-white font-mono">
      <h1 className="text-2xl font-bold text-cyan-400">Dispatcher (Admin)</h1>

      <section className="mt-6 rounded bg-slate-700/50 p-4">
        <h2 className="text-lg font-semibold text-cyan-300">
          API response (GET /api/hello)
        </h2>
        <p className="mt-2 text-lg">{data ? data.message : 'Loading...'}</p>
        {data?.timestamp && (
          <p className="mt-1 text-sm text-slate-400">{data.timestamp}</p>
        )}
        {data && (
          <pre className="mt-3 overflow-x-auto rounded bg-slate-900/50 p-2 text-xs text-slate-300">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </section>

      <section className="mt-4 rounded bg-slate-700/50 p-4">
        <h2 className="text-lg font-semibold text-cyan-300">
          Database status (GET /api/health)
        </h2>
        <p className="mt-2">API: {health?.api ?? '...'}</p>
        <p className="mt-1">
          Database:{' '}
          <span
            className={
              health?.database === 'connected'
                ? 'text-emerald-400'
                : 'text-amber-400'
            }
          >
            {health?.database ?? '...'}
          </span>
        </p>
        {health && (
          <pre className="mt-3 overflow-x-auto rounded bg-slate-900/50 p-2 text-xs text-slate-300">
            {JSON.stringify(health, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
}
