import type { TGenerateResponse } from '@/api/generate/type';

export const localStorageGenerateResult = {
  getGenerateResult: (): TGenerateResponse => {
    const generateResult = localStorage.getItem('generate-result');
    return JSON.parse(generateResult ?? '{}');
  },

  setGenerateResult: (generateResult?: TGenerateResponse) => {
    if (!generateResult) {
      localStorage.removeItem('generate-result');
      return;
    }
    localStorage.setItem('generate-result', JSON.stringify(generateResult));
  },

  removeGenerateResult: () => {
    localStorage.removeItem('generate-result');
  },
};
