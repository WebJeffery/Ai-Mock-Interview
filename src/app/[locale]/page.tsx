import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('app.name')}</h1>
      <p>{t('app.description')}</p>
    </div>
  );
} 