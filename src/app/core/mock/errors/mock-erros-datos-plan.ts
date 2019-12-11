import {Error} from '../../../models';

export const ERROSDATOSPLAN: Error[] = [
  {
    errorName: 'invalidPlanImport',
    errorMsg: 'La distribución de fondos debe ser del 100%'
  },
  {
    errorName: 'invalidAssuredImportMxn',
    errorMsg: 'Cantidad mínima para la suma asegurada es de $400,000 pesos'
  },
  {
    errorName: 'invalidAssuredImportUsd',
    errorMsg: 'Cantidad mínima para la suma asegurada es de $40,000 dolares'
  }
];
