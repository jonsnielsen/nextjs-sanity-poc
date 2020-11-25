import { CommercialDriver } from './commercialDriverTypes';
import CommercialDriverHero from 'src/domain/CommercialDriver/CommercialDriverHero';

interface ICommercialDriverTemplate {
  commercialDriver: CommercialDriver;
}
const CommercialDriverTemplate = ({
  commercialDriver,
}: ICommercialDriverTemplate) => {
  const { hero } = commercialDriver;
  return <CommercialDriverHero {...hero} />;
};

export default CommercialDriverTemplate;
