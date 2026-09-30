export interface WhatsAppBookingParams {
  destinationName: string;
  packageTitle?: string;
  season?: string;
  travellers?: number;
  totalPrice?: number;
  userName?: string;
  userPhone?: string;
  userEmail?: string;
  travelDate?: string;
  specialRequests?: string;
}

export const WHATSAPP_NUMBER = '918384080652'; // Official Concierge Hotline

export function sendWhatsAppBooking({
  destinationName,
  packageTitle,
  season,
  travellers = 2,
  totalPrice,
  userName,
  userPhone,
  userEmail,
  travelDate,
  specialRequests,
}: WhatsAppBookingParams) {
  const seasonText = season ? season.toUpperCase() : 'SPRING';

  const lines = [
    `*4 SEASONS HOLIDAYS -- LUXURY CONCIERGE*`,
    `----------------------------------------`,
    `Namaste! I would like to enquire & book a private luxury journey:`,
    ``,
    `*DESTINATION:* ${destinationName}`,
  ];

  if (packageTitle) {
    lines.push(`*PACKAGE TIER:* ${packageTitle}`);
  }
  if (season) {
    lines.push(`*SEASON MODE:* ${seasonText}`);
  }
  if (travelDate) {
    lines.push(`*PREFERRED DATES:* ${travelDate}`);
  }
  lines.push(`*TOTAL GUESTS:* ${travellers} Person(s)`);

  if (totalPrice) {
    lines.push(`*ESTIMATED AMOUNT:* Rs. ${totalPrice.toLocaleString('en-IN')}`);
  }

  if (userName || userPhone || userEmail || specialRequests) {
    lines.push(``);
    lines.push(`----------------------------------------`);
    lines.push(`*GUEST DETAILS:*`);
    if (userName) lines.push(`- Name: ${userName}`);
    if (userPhone) lines.push(`- Phone: ${userPhone}`);
    if (userEmail) lines.push(`- Email: ${userEmail}`);
    if (specialRequests) lines.push(`- Special Notes: ${specialRequests}`);
  }

  lines.push(``);
  lines.push(`----------------------------------------`);
  lines.push(`*REQUEST:* Kindly share the complete day-wise itinerary, luxury resort options, and booking process. Dhanyawaad!`);

  const messageText = lines.join('\n');
  const encodedText = encodeURIComponent(messageText);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  window.open(waUrl, '_blank');
}
