export function formatPrice(amount: number, currency: string = "NGN"): string {
  const symbols: Record<string, string> = {
    NGN: "₦",
    GHS: "GH₵",
    XOF: "CFA",
  };

  return `${symbols[currency] || currency} ${amount.toLocaleString()}`;
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
