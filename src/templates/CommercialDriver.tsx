import { CommercialDriver } from 'src/data/commercial-driver/commercialDriver.types';
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
          default: hero.title.en,
          da: hero.title.dk,
          no: hero.title.no,
        }}
      /> */}
      {hero.title.en}
    </div>
  );
};

export default CommercialDriverTemplate;
