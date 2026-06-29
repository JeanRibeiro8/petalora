# npm run dev
# Petalora — E-commerce (React + TypeScript + Tailwind + Framer Motion)

###### ---ADD LOGIN, BUY, FAVORITE, SEARCH function

Loja fictícia de skincare, casa e bem-estar, feita como projeto de prática.

## Stack

- **React 18 + TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **Framer Motion** (animações)
- **React Router** (rotas)
- **lucide-react** (ícones)

Frontend-only: catálogo de produtos tipado em `src/data/products.ts`, carrinho
com `Context API` + persistência em `localStorage`. Sem backend — pronto pra
hospedar de graça na Vercel ou Netlify.

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Como buildar para produção

```bash
npm run build
npm run preview   # testa o build localmente
```

A pasta `dist/` gerada é o que você sobe na Vercel/Netlify.

## Deploy rápido na Vercel

1. Suba esse projeto pro GitHub.
2. Na Vercel, "Add New Project" → importe o repositório.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy.

## Estrutura

```
src/
├── components/      # componentes reutilizáveis (Header, ProductCard, CartDrawer, etc)
├── pages/           # páginas (Home, CategoryPage, ProductPage, AboutPage)
├── context/         # CartContext (estado global do carrinho)
├── data/            # catálogo de produtos e depoimentos (mock)
├── types/           # tipos TypeScript do domínio
├── App.tsx          # rotas + transições de página
└── main.tsx         # entry point
```

## O que praticar nesse projeto

- **Framer Motion**: `variants` + `staggerChildren` no Hero (`src/components/Hero.tsx`),
  `whileInView` para revelar elementos no scroll, `AnimatePresence` no
  `CartDrawer.tsx` para animar entrada/saída de itens e do próprio drawer,
  `whileHover` nas imagens dos cards.
- **Context API**: `CartContext.tsx` é um bom exemplo de estado global
  tipado, com side-effects (`useEffect` salvando no `localStorage`).
- **TypeScript**: tipos de domínio centralizados em `src/types`, reaproveitados
  em todo o app — produto, categoria e item de carrinho nunca são `any`.
- **React Router**: rotas dinâmicas (`/produto/:id`, `/categoria/:category`),
  `useParams`, `Navigate` para redirecionamento quando produto não existe.

## Próximos passos (se quiser evoluir o projeto)

- Adicionar página de checkout (mesmo que mockada)
- Adicionar busca funcional no Header
- Persistir favoritos (igual ao carrinho)
- Migrar para fullstack: trocar `src/data/products.ts` por chamadas a uma API
  (Node + Express + Prisma), sem precisar reescrever o frontend
# petalora
