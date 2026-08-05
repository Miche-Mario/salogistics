/** ErrandWallet brand blue — aligned with mobile app */
export const BRAND = {
  blue: "#0047AB",
  blueHover: "#003A8F",
  blueSoft: "#E0E9F5",
} as const;

/** Official business details (CAC certified extract) */
export const COMPANY = {
  name: "S-A Errand Logistics",
  bnNumber: "8672677",
  registeredDate: "6 August 2025",
  businessType: "Sole Proprietor",
  activity: "Trading",
  status: "Active",
  address:
    "15, Ijo Mimo Street, Ijo Mimo Ibukun Orisun Iye Parish, Oluyole, Ibadan, Oyo State, Nigeria",
  email: "Errand@errandlogistics.com",
  phone: "+234 907 565 2022",
  phoneHref: "tel:+2349075652022",
  proprietor: "Samson Ifeoluwa Adelani",
} as const;

export const countries = [
  {
    code: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    currency: "NGN",
    currencySymbol: "₦",
  },
  {
    code: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    currency: "GHS",
    currencySymbol: "GH₵",
  },
  {
    code: "bj",
    name: "Benin",
    flag: "🇧🇯",
    currency: "XOF",
    currencySymbol: "CFA",
  },
];

export const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty & Health",
  "Sports & Outdoors",
  "Food & Groceries",
  "Books & Media",
  "Toys & Games",
  "Automotive",
  "Others",
];

export const deliveryTypes = [
  { id: "seller", name: "Seller Delivery", icon: "📦" },
  { id: "sa-logistics", name: "SA-Errandlogistics", icon: "🚚" },
];
