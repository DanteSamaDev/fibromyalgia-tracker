# FibroFlow Pain Tracker (PWA)

Aplicativo React + Vite para acompanhamento de sintomas da fibromialgia com foco em uso mobile, funcionamento como PWA e estrutura escalável.

## Stack
- React 18
- Vite 5
- Tailwind CSS
- lucide-react
- Service Worker + Web App Manifest

## Estrutura

```txt
src/
  components/      # UI reutilizável
  pages/           # telas de fluxo
  services/        # acesso a storage/apis
  utils/           # regras de negócio e formatação
  App.jsx
  main.jsx
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Funcionalidades implementadas
- Dashboard com métricas resumidas (média de dor e quantidade de registros)
- Check-in diário com dor, fadiga e áreas afetadas
- Persistência em `localStorage`
- Geração/compartilhamento de relatório médico em texto
- Base PWA com Service Worker e Manifest para instalação em celular/desktop
