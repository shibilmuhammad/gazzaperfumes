/**
 * Gazza Perfumes - Brand & Contact Configuration
 */

// Centralized WhatsApp business phone number
export const WHATSAPP_NUMBER = "919048686786";

// Brand Information
export const BRAND_NAME = "GAZZA PERFUMES";
export const BRAND_TAGLINE = "Fragrance of Heaven";
export const BRAND_SUBTITLE = "Premium fragrances inspired by the scents you love, at affordable prices.";

// Social Links (Leave empty string "" or update when official URL is ready)
export const INSTAGRAM_URL = "https://instagram.com/gazzaperfumes";

// Default prefilled messages
export const DEFAULT_WHATSAPP_MESSAGE = 
  "Hi Gazza Perfumes, I would like to see your perfume collection.";

export const CONSULTATION_WHATSAPP_MESSAGE = 
  "Hi Gazza Perfumes, I'm not sure which perfume to choose. Can you help me?";

/**
 * Helper function to generate clean WhatsApp click-to-chat links
 */
export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message);
  
  if (!cleanNumber || cleanNumber.includes("X")) {
    return `https://wa.me/?text=${encodedText}`;
  }
  
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Direct product order message
 * Example: "Hi Gazza Perfumes, I would like to order Khalifa."
 */
export function getProductInquiryUrl(productName: string): string {
  const message = `Hi Gazza Perfumes, I would like to order ${productName}.`;
  return getWhatsAppUrl(message);
}
