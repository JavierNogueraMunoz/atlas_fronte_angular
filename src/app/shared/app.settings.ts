export class AppSettings  {
    public static readonly API_ENDPOINT = '//localhost:8000/';
    public static readonly API_ENDPOINT_USER = AppSettings.API_ENDPOINT + 'user';
    
    public static readonly NAME_MAX_LENGHT = 50;
    public static readonly EMAIL_MAX_LENGHT = 30;
    public static readonly ADDRESS_MAX_LENGHT = 100;
    public static readonly POSTAL_CODE_MAX_LENGHT = 15;
    public static readonly CITY_MAX_LENGHT = 30;
    public static readonly REGION_MAX_LENGHT = 30;
    public static readonly COUNTRY_MAX_LENGHT = 30;
    public static readonly OBSERVATION_MAX_LENGHT = 255;

    public static readonly PATTER_DNI = /^[0-9]{8}[A-Z]{1}$/; 
    public static readonly PATTER_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public static readonly PATTER_NEWSLETTER = /^[Yes|No]{1}$/; 
    public static readonly PATTER_CAPTATION = /^[web|telefónica|presencial]{1}$/; 
}
