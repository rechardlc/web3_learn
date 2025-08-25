import { useTranslation } from '@/i18n/index'
export default async function Home({ params }) {
  const { lng } = await params
  const { t } = await useTranslation(lng, 'basic')
  return (  
    <div className="note--empty-state">
      <span className="note-text--empty-state">
        {t('initText')}
      </span>
    </div>
  );
}
