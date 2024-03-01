import { TFormData } from '@/app/page';

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000';

export const LIST_PAKET = [
  {
    value: 'Bronze Wedding',
  },
  {
    value: 'Silver Wedding',
  },
  {
    value: 'Platinum wedding',
  },
  {
    value: 'Gold wedding',
  },
  {
    value: 'Diamond wedding',
  },
  {
    value: 'Bronze Engagement',
  },
  {
    value: 'Silver Engagement',
  },
  {
    value: 'Platinum Engagement',
  },
  {
    value: 'Bronze Outdoor',
  },
  {
    value: 'Silver Outdoor',
  },
  {
    value: 'Platinum Outdoor',
  },
  {
    value: 'Gold Outdoor',
  },
  {
    value: 'Bronze Indoor',
  },
  {
    value: 'Silver Indoor',
  },
  {
    value: 'Platinum Indoor',
  },
  {
    value: 'All in Package Photo & Video',
  },
];

export const ALL_IN_PACKAGES = [
  {
    value: 'Photo & Video Wedding',
  },
  {
    value: 'Photo & Video Intimate Wedding',
  },
  {
    value: 'Photo & Video Post Wedding',
  },
  {
    value: 'Photo & Video Engagement',
  },
  {
    value: 'Photo & Video Siraman',
  },
  {
    value: 'Paket All In Wedding',
  },
  {
    value: 'Paket All In Intimate Wedding',
  },
  {
    value: 'Paket All In Engagement',
  },
  {
    value: 'Paket All In Siraman',
  },
];

export const BUDGET_RANGE = [
  {
    value: '< 5 Juta',
  },
  {
    value: '10 - 15 Juta',
  },
  {
    value: '15 - 20 Juta',
  },
  {
    value: '> 20 Juta',
  },
];

export const FIND_US = [
  {
    value: 'Facebook',
  },
  {
    value: 'Instagram',
  },
  {
    value: 'Twitter',
  },
  {
    value: 'Tiktok',
  },
  {
    value: 'Youtube',
  },
  {
    value: 'Google',
  },
  {
    value: 'Teman / Keluarga / Saudara',
  },
  {
    value: 'Pameran',
  },
  {
    value: 'Lainnya',
  },
];

export const parseMessage = (value: TFormData) => {
  const message = `Assalamualaikum Fix Creative Photography
Saya ${value.nama}, saya tertarik Menggunakan Jasa Fix Creative Photography
  
*Nama*: ${value.nama}
*Email*: ${value.email}
*Kebutuhan*: ${value.paket}
*Tanggal*: ${value.date}
*Jam*: ${value.time}
*Estimasi Budget*: ${value.budget_range}
*Rencana Tanggal*: ${value.date}
*Venue*: ${value.estimate_location}
*Instagram*: ${value.instagram}

Saya menentukan Fix Creative Photography dari *${value.find_us}*
Kenapa Saya Memilih Fix Creative Photography: *${value.why_us}*
Yang diharapkan dari Fix Creative Photography: ${value.message}

Boleh di info Pricelistnya, Terimakasih Fix Creative Photography`;
  return message;
};
