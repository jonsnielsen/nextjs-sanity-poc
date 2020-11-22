import { CommercialDriver } from 'src/domain/CommercialDriver/commercialDriverTypes';
import { Trans } from 'src/lib/i18n';
import { imageTranslationsToReact } from './commercialDriverUtils';

type ICommercialDriverHero = CommercialDriver['hero'];

const CommercialDriverHero = ({
  title,
  description,
  backgroundImage,
}: ICommercialDriverHero) => {
  const key = Math.random().toString();
  return (
    <div>
      <Trans translations={title} />
      <Trans translations={description} />
      <Trans
        key={key}
        translations={imageTranslationsToReact(backgroundImage)}
      />
    </div>
  );
};

export default CommercialDriverHero;
