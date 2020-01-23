/**
 * appConstants, aqui se definen todas las constantes que se utilizaran en la aplicación.
 */
export class AppConstants {
  // public static readonly URL_SERVICE: string = 'http://localhost:9090/despriv';
  // public static readonly URL_SERVICE_DEV: string = 'http://localhost:9090/despriv';
  public static readonly URL_SERVICE: string = 'https://dev.des.metlife.com/despriv';
  // public static readonly URL_SERVICE: string  = 'http://localhost:9080/cp-desws-priv';
   //public static readonly URL_SERVICE_DEV: string = 'http://10.215.104.61:35741/cp-desws-priv'; // servicios back
  public static readonly URL_SERVICE_DEV: string = 'https://dev.des.metlife.com/despriv'; // intermedia
  // public static readonly URL_SERVICE_DEV: string = 'http://int.des.mexico.services.metlife.com/cp-desws-priv';

  // public static readonly URL_SERVICE_DEV: string = 'http://10.215.104.61:35741/cp-desws-priv';
  // public static readonly URL_SERVICE: string  = 'https://dev.des.metlife.com/despriv';
  // public static readonly URL_SERVICE_DEV: string = 'https://dev.des.metlife.com/despriv';

  // public static readonly URL_SERVICE_DEV: string = 'https://dev.api.metlife.com/metlife/development/mexico/services/private/v1';
  // public static readonly URL_BROKER_SERVICE: string = 'https://dev.api.metlife.com/metlife/development/applicationservices/v1/tenants/MET_MEXICO/application';
  public static readonly URL_BROKER_SERVICE: string = 'https://dev.api.metlife.com/metlife/development/channel/applicationservices/v1/tenants/MET_MEXICO/application';
  // public static readonly URL_BROKER_SERVICE: string = 'http://10.184.10.166:8585/esb/appSerPriv/api/v1/app';
}
