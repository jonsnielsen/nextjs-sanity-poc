import { Trans, Translations } from 'src/lib/i18n';
interface ICommercialDriverHero {
  title: Translations;
  description: Translations;
}
const CommercialDriverHero = ({
  title,
  description,
}: ICommercialDriverHero) => {
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
      <Trans translations={title} />
      <Trans translations={description} />
    </div>
  );
};

export default CommercialDriverHero;
