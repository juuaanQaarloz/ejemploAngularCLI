import {Error} from '../../../models';

export const FORM_MSG_ERROR = 'Por favor, verfique la información a continuación';

export const ERROSDATOSPLAN: Error[] = [
  {
    errorName: 'invalidPlanImport',
    errorMsg: 'La distribución de fondos debe ser del 100%'
  },
  {
    errorName: 'invalidAssuredImportMxn',
    errorMsg: 'Cantidad mínima para la suma asegurada debe ser de $400,000 pesos'
  },
  {
    errorName: 'invalidAssuredImportUsd',
    errorMsg: 'Cantidad mínima para la suma asegurada debe ser de $40,000 dolares'
  }
];
