import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
    const [orderValue, setOrderValue] = useState(1);
    const [restockValue, setRestockValue] = useState(1);

    const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Number of Icecream: {numberOfIcecreams}</h2>
            <div>
                <input
                    value={orderValue}
                    onChange={(e) => setOrderValue(parseInt(e.target.value))}
                    type="number"
                    min={1}
                />
                <button onClick={() => dispatch(ordered(orderValue))}>Order Icecream</button>
            </div>

            <div>
                <input
                    value={restockValue}
                    onChange={(e) => setRestockValue(parseInt(e.target.value))}
                    type="number"
                    min={1}
                />
                <button onClick={() => dispatch(restocked(restockValue))}>Restock Icecream</button>
            </div>
        </>
    );
};

export default IcecreamView;
