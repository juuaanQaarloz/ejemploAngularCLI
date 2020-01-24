/**
 * appConstants, aqui se definen todas las constantes que se utilizaran en la aplicación.
 */
export class AppConstants {
  public static readonly URL_SERVICE: string = 'https://dev.des.metlife.com/despriv';
  // https://dev.des.metlife.com/despriv -> DES intermedio
  // http://usazebasu0350l.met_intnet.net:35741/cp-desws-priv -> DES directo
  // http://localhost:9080/despriv -> local
  // https://dev.api.metlife.com/metlife/development/channel/applicationservices/v1/tenants/MET_MEXICO/application -> channel

  public static readonly URL_SERVICE_DEV: string = 'https://dev.des.metlife.com/despriv';
}
