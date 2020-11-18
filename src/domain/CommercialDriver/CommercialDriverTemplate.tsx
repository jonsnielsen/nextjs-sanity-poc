import { CommercialDriver } from './commercialDriverTypes';
import CommercialDriverHero from 'src/organisms/CommercialDriverHero';

interface ICommercialDriverTemplate {
  commercialDriver: CommercialDriver;
}
const CommercialDriverTemplate = ({
  commercialDriver,
}: ICommercialDriverTemplate) => {
  const { hero } = commercialDriver;
  return (
    <div>
      <CommercialDriverHero title={hero.title} description={hero.description} />
    </div>
  );
};

export default CommercialDriverTemplate;
