import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
    const [orderValue, setOrderValue] = useState(1);
    const [restockValue, setRestockValue] = useState(1);

    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Number of Cakes: {numberOfCakes} </h2>
            <div>
                <input
                    type="number"
                    value={orderValue}
                    min={1}
                    onChange={(e) => setOrderValue(parseInt(e.target.value))}
                />
                <button onClick={() => dispatch(ordered(orderValue))}>Order Cake</button>
            </div>
            <div>
                <input
                    type="number"
                    value={restockValue}
                    min={1}
                    onChange={(e) => setRestockValue(parseInt(e.target.value))}
                />

                <button onClick={() => dispatch(restocked(restockValue))}>Restock Cake</button>
            </div>
        </>
    );
};

export default CakeView;
