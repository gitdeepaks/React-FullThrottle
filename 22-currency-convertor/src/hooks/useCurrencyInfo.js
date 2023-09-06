import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((data) => setCurrencyInfo(data[currency]));
    console.log(currencyInfo);
  }, [currency, currencyInfo]);
  console.log(currencyInfo);
  return currencyInfo;
}

export default useCurrencyInfo;
