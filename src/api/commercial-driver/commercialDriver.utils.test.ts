import { RegionId } from 'src/data/region';
import { localeStringToTranslation } from './commercialDriver.utils';
import { LocaleString } from './commercialDriver.types';
import { Translations } from 'src/lib/i18n/Trans';

test('localeStringToTranslation - Only danish regions with only, has only danish language', async () => {
  const localeString: LocaleString = {
    dk: { da: 'DK danish' },
  };
  const result = localeStringToTranslation(localeString, RegionId.Dk);
  const expected: Translations = {
    da: 'DK danish',
  };

  expect(result).toMatchObject(expected);
});

test('localeStringToTranslation - Only danish regions with da, en - has DA and EN ', async () => {
  const localeString: LocaleString = {
    dk: { da: 'DK danish', en: 'DK english' },
  };
  const result = localeStringToTranslation(localeString, RegionId.Dk);
  const expected: Translations = {
    da: 'DK danish',
    en: 'DK english',
  };

  expect(result).toMatchObject(expected);
});

test('localeStringToTranslation - DK and NA region with DK only DA and using NA En', async () => {
  const localeString: LocaleString = {
    dk: { da: 'DK danish' },
    na: { en: 'NA english' },
  };
  const result = localeStringToTranslation(localeString, RegionId.Dk);
  const expected: Translations = {
    da: 'DK danish',
    en: 'NA english',
  };

  expect(result).toMatchObject(expected);
});
