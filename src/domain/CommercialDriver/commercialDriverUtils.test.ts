import { RegionId } from 'src/data/region';
import { localeToTranslations } from './commercialDriverUtils';
import { RegionTranslations } from 'src/types/translations';
import { Translations } from 'src/lib/i18n/Trans';

test('localeStringToTranslation - Only danish regions with only, has only danish language', async () => {
  const localeString: RegionTranslations = {
    _type: 'localeString',
    dk: { da: 'DK danish' },
  };
  const result = localeToTranslations(localeString, RegionId.Dk);
  const expected: Translations = {
    da: 'DK danish',
  };

  expect(result).toMatchObject(expected);
});

test('localeStringToTranslation - Only danish regions with da, en - has DA and EN ', async () => {
  const localeStringDTO: RegionTranslations = {
    _type: 'localeString',
    dk: { da: 'DK danish', en: 'DK english' },
  };
  const result = localeToTranslations(localeStringDTO, RegionId.Dk);
  const expected: Translations = {
    da: 'DK danish',
    en: 'DK english',
  };

  expect(result).toMatchObject(expected);
});

test('localeStringToTranslation - DK and NA region with DK only DA and using NA En', async () => {
  const localeStringDTO: RegionTranslations = {
    _type: 'localeString',
    dk: { da: 'DK danish' },
    na: { en: 'NA english' },
  };
  const result = localeToTranslations(localeStringDTO, RegionId.Dk);
  const expected: Translations = {
    da: 'DK danish',
    en: 'NA english',
  };

  expect(result).toMatchObject(expected);
});
