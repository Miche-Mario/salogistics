"use client";

import React, { createContext, useContext, useState } from "react";

export type CountryCode = "ng" | "gh" | "bj";

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  locale: string;
}

export const COUNTRIES: Country[] = [
  {
    code: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    currency: "NGN",
    currencySymbol: "₦",
    locale: "en-NG",
  },
  {
    code: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    currency: "GHS",
    currencySymbol: "GH₵",
    locale: "en-GH",
  },
  {
    code: "bj",
    name: "Benin",
    flag: "🇧🇯",
    currency: "XOF",
    currencySymbol: "CFA",
    locale: "fr-BJ",
  },
];

// Approximate FX rates relative to NGN
const FX: Record<CountryCode, number> = {
  ng: 1,
  gh: 0.04,   // 1 NGN ≈ 0.04 GHS
  bj: 2.5,    // 1 NGN ≈ 2.5 XOF
};

interface CountryContextType {
  country: Country;
  setCountryCode: (code: CountryCode) => void;
  formatPrice: (amountNGN: number) => string;
  convertPrice: (amountNGN: number) => number;
}

const CountryContext = createContext<CountryContextType>({
  country: COUNTRIES[0],
  setCountryCode: () => {},
  formatPrice: (n) => `₦${n.toLocaleString()}`,
  convertPrice: (n) => n,
});

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countryCode, setCountryCode] = useState<CountryCode>("ng");
  const country = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  const convertPrice = (amountNGN: number) =>
    Math.round(amountNGN * FX[countryCode]);

  const formatPrice = (amountNGN: number) => {
    const converted = convertPrice(amountNGN);
    return `${country.currencySymbol}${converted.toLocaleString()}`;
  };

  return (
    <CountryContext.Provider
      value={{ country, setCountryCode, formatPrice, convertPrice }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export const useCountry = () => useContext(CountryContext);
