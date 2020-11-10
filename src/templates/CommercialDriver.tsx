import { CommercialDriver } from 'src/api/commercial-driver/commercialDriver.types';
import { Trans } from 'src/lib/i18n';
interface ICommercialDriverTemplate {
  commercialDriver: CommercialDriver;
}
const CommercialDriverTemplate = ({
  commercialDriver,
}: ICommercialDriverTemplate) => {
  const { hero } = commercialDriver;
  return (
    <div>
      {/* <Trans
        translations={{
          na: 
          default: hero.title.en,
          da: hero.title.dk,
          no: hero.title.no,
        }}
      /> */}
      {/* {hero.title.translations.} */}
      <Trans translations={hero.title.translations} />
    </div>
  );
};

export default CommercialDriverTemplate;
