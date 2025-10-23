# 🚀 2GRW - AI-Powered Investment Portfolio Tracker

Site institucional moderno, responsivo e otimizado para SEO que converte visitantes em usuários do app 2GRW.

## 📋 Visão Geral

**Objetivo:** Site institucional moderno, responsivo e otimizado para SEO que converta visitantes em usuários do app 2GRW.

**Domínio:** `2grw.com` (site institucional)  
**Redirecionamento:** `app.2grw.com` (sistema atual)

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15** (App Router, SSR, SSG)
- **TypeScript** (type safety)
- **Tailwind CSS** (styling)
- **Framer Motion** (animações)
- **React Hook Form** (formulários)
- **Zustand** (state management)

### SEO & Performance
- **Next-SEO** (meta tags automáticas)
- **Schema.org** (dados estruturados)
- **Sitemap.xml** (geração automática)
- **Robots.txt** (otimizado)
- **Core Web Vitals** (otimizado)

### Deploy & Hosting
- **Vercel** (deploy automático)
- **Vercel Analytics** (métricas)
- **Vercel Speed Insights** (performance)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/2grw/2grw-site.git
cd 2grw-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linting
npm run type-check   # Verificação de tipos
```

## 📁 Estrutura do Projeto

```
2grw-site/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── (marketing)/        # Grupo de rotas de marketing
│   │   │   ├── page.tsx       # Homepage
│   │   │   └── features/      # Landing pages das features
│   │   ├── blog/              # Sistema de blog
│   │   ├── faq/               # FAQ
│   │   ├── contact/           # Contato
│   │   └── api/               # API routes
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes base (Button, Card, etc.)
│   │   ├── sections/         # Seções da página
│   │   ├── forms/            # Formulários
│   │   └── seo/              # Componentes SEO
│   ├── lib/                  # Utilitários e configurações
│   │   ├── seo.ts           # Configuração SEO
│   │   ├── utils.ts         # Funções utilitárias
│   │   └── constants.ts      # Constantes do projeto
│   └── styles/              # Estilos globais
│       └── globals.css      # CSS global com Tailwind
├── public/                  # Arquivos estáticos
├── content/                # Conteúdo do blog
└── package.json
```

## 🎨 Design System

### Cores
```css
Primary: #000000 (preto)
Secondary: #3B82F6 (azul)
Accent: #10B981 (verde)
Text: #FFFFFF (branco)
Gray: #6B7280
```

### Tipografia
- **Headings:** Inter (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Monospace:** JetBrains Mono

## 📄 Páginas Implementadas

### ✅ Páginas Principais
- [x] **Homepage** (`/`) - Seção hero, features, dashboard preview, AI, FAQ, CTA
- [x] **Features** (`/features`) - Landing page das funcionalidades
- [x] **FAQ** (`/faq`) - Perguntas frequentes

### 🚧 Páginas em Desenvolvimento
- [ ] **Blog** (`/blog`) - Sistema de blog
- [ ] **About** (`/about`) - Sobre a empresa
- [ ] **Contact** (`/contact`) - Formulário de contato
- [ ] **Pricing** (`/pricing`) - Planos e preços
- [ ] **How It Works** (`/how-it-works`) - Como funciona

## 🔍 SEO Implementado

### Meta Tags
- ✅ Title tags otimizados
- ✅ Meta descriptions
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs

### Estrutura
- ✅ Sitemap.xml automático
- ✅ Robots.txt otimizado
- ✅ Schema.org markup
- ✅ Breadcrumbs estruturados

### Performance
- ✅ Image optimization (Next.js Image)
- ✅ Code splitting automático
- ✅ Font optimization
- ✅ Bundle analysis

## 🎯 Funcionalidades

### Homepage
- **Hero Section** com animação e CTA
- **Features Cards** (4 principais funcionalidades)
- **Dashboard Preview** (mockup interativo)
- **AI Section** (diferencial da plataforma)
- **How It Works** (3 passos simples)
- **About Creator** (Gustavo Girard)
- **FAQ** (6 perguntas principais)
- **CTA Final** (Get Early Access)

### Componentes
- **Navigation** responsiva com mobile menu
- **Footer** completo com links organizados
- **Cards** reutilizáveis para features
- **Buttons** com variantes (primary, secondary, ghost)
- **Forms** com validação
- **Animations** com Framer Motion

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Variáveis de Ambiente
```env
GOOGLE_SITE_VERIFICATION=your_verification_code
NEXT_PUBLIC_SITE_URL=https://2grw.com
```

## 📊 Analytics & Tracking

### Métricas Configuradas
- **Google Analytics 4**
- **Google Search Console**
- **Vercel Analytics**
- **Core Web Vitals**

### Conversões
- **Sign-ups** (early access)
- **Demo requests**
- **Blog engagement**
- **Feature page views**

## 🎨 Customização

### Cores
Edite `tailwind.config.ts` para personalizar as cores do tema.

### Fontes
As fontes são carregadas via Google Fonts. Para alterar, edite `src/styles/globals.css`.

### Componentes
Todos os componentes estão em `src/components/` e podem ser facilmente customizados.

## 📝 Próximos Passos

1. **Implementar Blog** - Sistema completo de blog com MDX
2. **Páginas Restantes** - About, Contact, Pricing
3. **Otimização Performance** - Core Web Vitals
4. **Testes** - Unit tests e E2E tests
5. **Analytics** - Configuração completa de tracking

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**Gustavo Girard** - [@gustavogirard](https://twitter.com/gustavogirard) - gustavo@2grw.com

Link do Projeto: [https://github.com/2grw/2grw-site](https://github.com/2grw/2grw-site)

---

**Desenvolvido com ❤️ por Gustavo Girard**