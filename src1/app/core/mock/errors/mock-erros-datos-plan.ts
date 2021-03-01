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


export const ERROSDATOSPERSONAFISICA: Error[] = [
  {
    errorName: 'invalidDobleName',
    errorMsg: 'El nombre no puede ser igual al apellido paterno y materno.'
  },
];

export const ERRORS_DOM_CONT: Error[] = [
  {
    errorName: 'invalidEmailConfirmation',
    errorMsg: 'Los emails no coinciden'
  }
];

export const ERROSDATOSSOLICITANTE: Error[] = [
  {
    errorName: 'invalidDobleName2',
    errorMsg: 'El nombre no puede ser igual al apellido paterno y materno.'
  },
];

export const ERROSDATOSREPRESENTANTE: Error[] = [
  {
    errorName: 'invalidDobleName3',
    errorMsg: 'El nombre no puede ser igual al apellido paterno y materno.'
  },
];

export const ERROSDATOSBENEFICIARIOS: Error[] = [
  {
    errorName: 'invalidDobleName4',
    errorMsg: 'El nombre no puede ser igual al apellido paterno y materno.'
  },
];
