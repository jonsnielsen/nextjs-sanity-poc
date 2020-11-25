import { CommercialDriver } from 'src/domain/CommercialDriver/commercialDriverTypes';
import { Trans, useTranslation } from 'src/lib/i18n';
import Image from 'src/components/Image';

type ICommercialDriverHero = CommercialDriver['hero'];

const CommercialDriverHero = ({
  title,
  description,
  backgroundImage,
}: ICommercialDriverHero) => {
  const transBackgroundImage = useTranslation(backgroundImage);
  const transTitle = useTranslation(title);
  const transDescription = useTranslation(description);

  return (
    <div>
      <h1>
        {/* <Trans translations={title} /> */}
        {transTitle}
      </h1>

      <p>
        {/* <Trans translations={description} /> */}
        {transDescription}
      </p>

      <Image src={transBackgroundImage.src} alt={transBackgroundImage.alt} />
    </div>
  );
};

export default CommercialDriverHero;
