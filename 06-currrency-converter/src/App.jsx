import { useState } from 'react';
import { inputBox } from './components'; // Fixed capitalization
import useCurrencyInfo from './hooks/useCurrencyinfo';
import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount); // Swap amounts correctly
        setConvertedAmount(amount);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        } else {
            setConvertedAmount(0); // Handle cases where conversion rate is unavailable
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://imgs.search.brave.com/TXXVzPABFBDen1Xp94BsAMAfYM-arcSl2eLZj8kZtaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM5/MjM2NDcxL3Bob3Rv/L3doZWVsLW9mLWN1/cnJlbmN5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0way1Q/NXh1cUNiYW1Ba1dH/MWYyaDlLZHZraVl3/SFJmRW55WS1nbEdP/RXdVPQ')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <inputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={setFrom} // Fix: update "from" currency
                                selectCurrency={from}
                                onAmountChange={setAmount} // Fix: update amount
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <inputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={setTo} // Fix: update "to" currency
                                selectCurrency={to}
                                amountDisable // Fix: prevent editing converted amount
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
