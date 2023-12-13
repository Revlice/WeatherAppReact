import { useState } from "react";

function WeatherApp({ api, data }) {
    const [value, setValue] = useState("");

    const handleValue = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api(value);
    };

    return (
        <div style={{ height: '500px', width: '600px' }} className="flex-col bg-purple-900 rounded border-2 border-purple-600 mt-16">
            <div className="flex flex-col justify-center items-center mt-4">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full items-center">
                    <label className=" mb-4 text-xl">Aramak istediğiniz şehri girin</label>
                    <input
                        onChange={handleValue}
                        value={value}
                        className="rounded outline-0 w-1/2 focus:outline-1 focus:outline-purple-700 text-black text-lg"
                        type="text"
                    />
                </form>
            </div>
            {data && (
                <div className="text-white flex justify-center items-center p-10 flex-col border-white border-2 w-full  mt-4 text-xl">
                    <h1 className="text-xl">{data.name}</h1>
                    <h2 className="text-lg">{Math.floor(data.main.temp) + " °C Derece"}</h2>
                    <h2 className="text-lg">Hissedilen : {data.main.feels_like + " °C"}  </h2>
                    <h2 className="text-lg">Nem Oranı : {"%" + data.main.humidity }  </h2>

                </div>
            )}
        </div>
    );
}

export default WeatherApp;
