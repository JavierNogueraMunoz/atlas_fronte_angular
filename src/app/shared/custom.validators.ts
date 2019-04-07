import { AppSettings } from './app.settings';

export const dniCustomValidator = (dni:string) => {
    return AppSettings.PATTER_DNI.exec(dni);
}
export const newsletterCustomValidator = (newsletter:string) => {
    return AppSettings.PATTER_NEWSLETTER.exec(newsletter)
}
export const captationCustomValidator = (captation:string) => {
    return AppSettings.PATTER_CAPTATION.exec(captation);
}
export const emailCustomValidator = (email:string) => {
    return AppSettings.PATTER_EMAIL.exec(email);
}

